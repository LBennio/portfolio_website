import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {User} from "@/types";
import {cookies} from "next/headers";
import {prisma} from "@/lib/db";

const JWT_SECRET = process.env.JWT_SECRET!;
const expiredTime = "5d";
const hashingSalt = 12;

export const hashPassword = async (password: string): Promise<string> => {
    return bcrypt.hash(password, hashingSalt);
}

export const verifyPassword = async (
    password: string,
    hashedPassword: string,
): Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword);
}

export const generateToken = (userId: string): string => {
    return jwt.sign({ userId }, JWT_SECRET);
}

export const verifyToken = (token: string): { userId: string } => {
    return jwt.verify(token, JWT_SECRET) as { userId: string };
}

export const getCurrentUser = async (): Promise<User | null> => {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;

        if(!token) return null;

        const decode = verifyToken(token);

        const userFromDb = await prisma.user.findUnique({
            where: { id: decode.userId },
        });

        if(!userFromDb) return null;

        const { password, ...user } = userFromDb;

        return user as unknown as User;
    } catch (error) {
        console.error("Authentication error: ", error);
        return null;
    }
}