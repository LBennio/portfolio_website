import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/db";
import {generateToken, verifyPassword} from "@/lib/auth";

const cookieAge = 60 * 60 * 24 * 7;

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email, password } = body;

        if(!email || !password) {
            return NextResponse.json(
                { error: "Email or password are absent" },
                { status: 400 },
            );
        }

        const userFromDb = await prisma.user.findUnique({ where: { email } });

        if(!userFromDb) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 },
            );
        }

        const isValidPassword = await verifyPassword(password, userFromDb.password);

        if(!isValidPassword) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 },
            );
        }

        const token = generateToken(userFromDb.id);

        const response = NextResponse.json(
            {
                user: {
                    id: userFromDb.id,
                    email: userFromDb.email,
                    name: userFromDb.name,
                    surname: userFromDb.surname,
                    token
                }
            }
        );

        response.cookies.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: 'lax',
            maxAge: cookieAge,
        });

        return response;
    } catch (error) {
        console.error("Login error: ", error);

        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}