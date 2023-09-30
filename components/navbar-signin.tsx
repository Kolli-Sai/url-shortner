"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
type Props = {};

const NavbarSignin = (props: Props) => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push("/auth/signin")} color="primary">
      Sign in
    </Button>
  );
};

export default NavbarSignin;
