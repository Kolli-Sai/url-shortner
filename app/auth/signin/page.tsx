import SigninWithGithubButton from '@/components/signin-with-github-button';
import { getAuthSession } from '@/lib/auth-options';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react'


type Props = {}

const SigninPage = async (props: Props) => {
  const { session } = await getAuthSession()
  if (session) {
    return redirect("/dashboard");
  }
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image src={"/login.svg"} width={720} height={600} alt="login svg" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center text-foreground-700">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
           Sign in to your account
          </h1>
          <p className="mb-8 leading-relaxed">
            To use this project you need to sign in to your account
          </p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
             <SigninWithGithubButton/>
            </div>
         
          </div>
         
         
        </div>
      </div>
    </section>
  );
}

export default SigninPage