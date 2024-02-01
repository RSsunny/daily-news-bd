import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    let searchParams = new URL(req.url).searchParams;
    let name = searchParams.get("name");

    let obj = {};
    if (name) {
      obj.name = name;
    }
    const result = await prisma.categories.findMany({
      where: obj,
      include: { news_list: true },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "failed", error });
  }
}
