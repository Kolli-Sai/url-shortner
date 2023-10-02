"use server";

import { getAuthSession } from "@/lib/auth-options";
import prisma, { connectToDatabase } from "@/lib/db";
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";
export const createUrl = async ({
  url,
  alias,
}: {
  url: string;
  alias?: string;
}) => {
  /**session */
  const { session } = await getAuthSession();
  try {
    await connectToDatabase();
    if (alias) {
      const checkAlias = await prisma.url.findUnique({
        where: {
          alias,
          createdBy: session?.user?.id as string,
        },
      });
      if (checkAlias) {
        throw new Error("Alias already exists");
      }
      const createAlias = await prisma.url.create({
        data: {
          url,
          alias,
          createdBy: session?.user?.id as string,
        },
      });
      revalidatePath("/dashboard");
      return {
        success: true,
        data: createAlias,
      };
    } else {
      const createUrl = await prisma.url.create({
        data: {
          url,
          alias: nanoid(6),
          createdBy: session?.user?.id as string,
        },
      });
      return {
        success: true,
        data: createUrl,
      };
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
  }
};

export const getAllUrls = async () => {
  const { session } = await getAuthSession();
  try {
    await connectToDatabase();
    const allUrls = await prisma.url.findMany({
      where: {
        createdBy: session?.user?.id as string,
      },
    });
    return {
      success: true,
      data: allUrls,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
  }
};

export const deleteUrl = async (id: string) => {
  const { session } = await getAuthSession();
  try {
    await connectToDatabase();
    const deleteUrl = await prisma.url.delete({
      where: {
        id,
      },
    });
    revalidatePath("/dashboard/[urls]");
    return {
      success: true,
      data: deleteUrl,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
  }
};
