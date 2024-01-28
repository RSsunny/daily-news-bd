import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();
    const result = await prisma.users.findUnique({ where: reqBody });
    return NextResponse.json({ data: result });
  } catch (error) {
    return NextResponse.json({ status: failed, error });
  }
}
