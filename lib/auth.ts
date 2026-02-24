import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {User} from "@/types";

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

export const verifyToken = async (token: string): Promise<{ userId: string }> => {
    return jwt.verify(token, JWT_SECRET) as { userId: string };
}

export const getCurrentUser = async (): Promise<User | null> => {

}