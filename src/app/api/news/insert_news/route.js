import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();
    const name = await reqBody?.category;

    const count = await prisma.categories.count({
      where: { name },
    });

    if (count === 1) {
      const query = await prisma.categories.findUnique({
        where: { name },
      });

      const id = parseInt(query?.id);
      const result = await prisma.news_list.create({
        data: {
          title: reqBody?.title,
          short_des: reqBody?.short_des,
          img1: reqBody?.img1,
          img2: reqBody?.img2,
          img3: reqBody?.img3,
          img4: reqBody?.img4,
          keywords: reqBody?.keywords,
          long_des: reqBody?.long_des,
          type: reqBody?.type,
          meta_des: reqBody?.meta_des,
          meta_title: reqBody?.meta_title,
          categorieId: id,
        },
      });
      return NextResponse.json({ result });
    } else {
      const newCategoris = await prisma.categories.create({
        data: { name },
      });

      const id = parseInt(newCategoris?.id);

      const result = await prisma.news_list.create({
        data: {
          title: reqBody?.title,
          short_des: reqBody?.short_des,
          img1: reqBody?.img1,
          img2: reqBody?.img2,
          img3: reqBody?.img3,
          img4: reqBody?.img4,
          keywords: reqBody?.keywords,
          long_des: reqBody?.long_des,
          type: reqBody?.type,
          meta_des: reqBody?.meta_des,
          meta_title: reqBody?.meta_title,
          categorieId: id,
        },
      });
      return NextResponse.json({ result });
    }
  } catch (error) {
    return NextResponse.json({ status: "failed", error });
  }
}
