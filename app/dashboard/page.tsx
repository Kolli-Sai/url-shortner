import { getAuthSession } from "@/lib/auth-options";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const DashboardPage = async (props: Props) => {
  const { session } = await getAuthSession();
  if (!session) {
    return redirect("/auth/signin");
  }
  return <div>DashboardPage</div>;
};

export default DashboardPage;
