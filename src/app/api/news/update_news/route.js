import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function PATCH(req, res) {
  try {
    const reqBody = await req.json();
    const { searchParams } = new URL(req.url);
    let id = searchParams.get("id");

    const prisma = new PrismaClient();
    const result = await prisma.news_list.update({
      where: { id: parseInt(id) },
      data: reqBody,
    });

    return NextResponse.json({ message: "success", data: result });
  } catch (error) {
    return NextResponse.json({ message: "server site error" });
  }
}
