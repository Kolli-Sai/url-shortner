import UrlForm from "@/components/forms/url-form";
import { getAuthSession } from "@/lib/auth-options";
import { redirect } from "next/navigation";
import React from "react";
import NextLink from "next/link";
import { MoveRight } from "lucide-react";
import { Metadata } from "next";
type Props = {};

export const metadata:Metadata = {
  title: "Dashboard",
};

const DashboardPage = async (props: Props) => {
  const { session } = await getAuthSession();
  if (!session) {
    return redirect("/auth/signin");
  }
  return (
    <>
      <div className=" flex justify-center w-500">
        <UrlForm />
      </div>
      <div className=" flex justify-center gap-2 text-primary underline ">
        <NextLink href="/dashboard/urls" className="flex gap-2 ">
          View All
        <MoveRight className=" w-6 h-6 ml-2" />
        </NextLink>
      </div>
    </>
  );
};

export default DashboardPage;
