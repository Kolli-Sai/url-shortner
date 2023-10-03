import React from "react";
import Image from "next/image";
import SignoutButton from "@/components/signout-button";
import { getAuthSession } from "@/lib/auth-options";
import { redirect } from "next/navigation";
import { Metadata } from "next";
type Props = {};

export const metadata: Metadata = {
  title: "Signout",
};

const SignoutPage = async (props: Props) => {
  const { session } = await getAuthSession();
  if (!session) {
    return redirect("/auth/signin");
  }
  return (
    <section className="text-gray-600 body-font my-10">
      <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            src={"/logout.svg"}
            width={720}
            height={600}
            alt="logout svg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center text-foreground-700">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Sign out of your account
          </h1>
          <p className="mb-8 leading-relaxed">
            To sign out of your account, click the button below
          </p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
              <SignoutButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignoutPage;
