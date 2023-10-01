import React from "react";
import Image from "next/image";
import GetStartedButton from "@/components/get-started-button";
import { getAuthSession } from "@/lib/auth-options";
import { redirect } from "next/navigation";
type Props = {};

const HomePage = async(props: Props) => {
  const { session } = await getAuthSession();
  if (session) {
    return redirect("/dashboard");
  }
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 items-center justify-center flex-col">
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            width={720}
            height={600}
            src="/url.svg"
          />
          <div className="text-center lg:w-2/3 w-full text-foreground-700">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-foreground-700">
              Welcome to URL Shortener
            </h1>
            <p className="mb-8 leading-relaxed">
              This is a simple project to shorten your URL. You can use this
              project to shorten your URL. This project is created using NextJS
              Next Auth , Next UI and Prisma with MongoDB
            </p>
            <div className="flex justify-center">
              <GetStartedButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
