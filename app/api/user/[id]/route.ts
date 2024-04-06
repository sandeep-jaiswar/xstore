import prisma from "@/config/prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: any) {
    try {
        const { id } = params;
        const data = await prisma.user.findUnique({
            where:{
                id
            }
        })
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        throw error;
    }
}