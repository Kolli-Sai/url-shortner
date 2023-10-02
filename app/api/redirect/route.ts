import { getAuthSession } from "@/lib/auth-options";
import prisma, { connectToDatabase } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  const { session } = await getAuthSession();
  if (!session) {
    return NextResponse.json({
      success: false,
      error: "You are not authenticated",
    });
  }
  const { searchParams } = new URL(req.nextUrl.toString());
  const alias = searchParams.get("alias");
  if (!alias) {
    return NextResponse.json({
      success: false,
      error: "Alias is required",
    });
  }
  try {
    await connectToDatabase();
    const url = await prisma.url.findFirst({
      where: {
        alias,
        createdBy: session?.user?.id as string,
      },
    });

    if (!url) {
      return NextResponse.json({
        success: false,
        error: "Alias not found",
      });
    }
    return NextResponse.redirect(url.url);
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  } finally {
    await prisma.$disconnect();
  }
}
