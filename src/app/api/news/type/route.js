import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    let type = searchParams.get("type");
    console.log(type);
    const prisma = new PrismaClient();
    const result = await prisma.news_list.findMany({
      where: { type: type },
      take: 10,
    });

    return NextResponse.json({ message: "success", data: result });
  } catch (error) {
    return NextResponse.json({ message: "server site error" });
  }
}
