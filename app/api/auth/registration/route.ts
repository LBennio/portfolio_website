import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/db";
import {hashPassword} from "@/lib/auth";

const cookieAge = 60 * 60 * 24 * 7;

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, surname, email, password } = body;

        if(!name || !surname || !email || !password) {
            return NextResponse.json(
                { error: "Name, email or password are absent" },

                { status: 400 }
            );
        }

        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        const hashedPassword = hashPassword(password);

        const userCount = await prisma.user.count({});


    } catch (error) {
        console.error("registration error: ", error);

        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}