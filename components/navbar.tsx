import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import NavbarAvatar from "./navbar-avatar";
import NavbarSignin from "./navbar-signin";
import { ThemeSwitcher } from "./theme-switcher";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className=" flex gap-3 justify-between items-center py-6">
      <NextLink href={"/"} className="flex gap-1 items-center">
        <Image src={"/favicon-32x32.png"} alt="logo" width={32} height={32} />
        <span className=" text-xl font-bold">URL Shortner</span>
      </NextLink>
      <div className=" flex gap-3 items-center">
       
        <ThemeSwitcher />
        {/* <NavbarSignin /> */}
        <NavbarAvatar />
      </div>
    </nav>
  );
};

export default Navbar;
