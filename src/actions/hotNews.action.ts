"use server";
import prisma from "@/lib/prisma";
import { HotNews } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function getHotNews() {
  try {
    const hotNews = await prisma.hotNews.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return {
      success: true,
      hotNews,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
}
export async function updateHotNews(id: string, data: Partial<HotNews>) {
  try {
    const updatedNews = await prisma.hotNews.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/"); // 重新验证路径，更新UI
    return {
      success: true,
      updatedNews,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
}
