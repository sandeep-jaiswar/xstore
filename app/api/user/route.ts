import prisma from "@/config/prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = await prisma.user.findRaw()
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function POST(request: Request) {
    try {
        const {
            mobile
        } = await request.json();
        const data = await prisma.user.create({
            data: {
                mobile
            }
        })
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function DELETE() {
    try {
        const data = await prisma.user.deleteMany()
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        throw error;
    }
}