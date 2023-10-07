"use client";
import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import NavbarAvatar from "./navbar-avatar";
import NavbarSignin from "./navbar-signin";
import { ThemeSwitcher } from "./theme-switcher";
import { getServerSession } from "next-auth/next";
import { authOptions, getAuthSession } from "@/lib/auth-options";
import { useSession } from "next-auth/react";
import NavbarMenu from "./navbar-menu";
type Props = {};

const Navbar = (props: Props) => {
  // const { session } = await getAuthSession();
  const { data: session } = useSession();
  console.log({
    navbarSession: session,
  });

  return (
    <nav className=" flex gap-3 justify-between items-center py-6">
      <div>
        <div className=" sm:hidden">
          <NavbarMenu />
        </div>
        <div className=" hidden sm:block">
          <NextLink href={"/"} className="">
            <span className=" text-xl font-bold  underline underline-offset-4 text-primary  ">
              URL Shortner
            </span>
          </NextLink>
        </div>
      </div>

      <div className=" flex gap-3 items-center">
        <NextLink
          href={"/dashboard"}
          className="text-primary underline hidden sm:block"
        >
          Dashboard
        </NextLink>
        <ThemeSwitcher />
        {session?.user.id && (
          <NavbarAvatar
            email={session.user.email as string}
            image={session.user.image as string}
          />
        )}
        {!session?.user.id && <NavbarSignin />}
      </div>
    </nav>
  );
};

export default Navbar;
