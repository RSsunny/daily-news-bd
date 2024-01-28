import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let keywords = searchParams.get("keywords");
    let take = parseInt(searchParams.get("take"));

    const prisma = new PrismaClient();
    const result = await prisma.news_list.findMany({
      where: { keywords: { contains: keywords } },
      take: take || 10,
    });

    return NextResponse.json({ status: true, data: result });
  } catch (error) {
    return NextResponse.json({ message: "server side error" });
  }
}
