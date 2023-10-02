"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import NextLink from "next/link";
type Props = {
  image: string;
  email : string;
};

const NavbarAvatar = (props: Props) => {
  const router = useRouter();
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar isBordered color="primary" src={props.image} />
      </DropdownTrigger>
      <DropdownMenu
        variant="bordered"
        color="primary"
        aria-label="Static Actions"
        disabledKeys={["profile"]}
      >
        <DropdownItem key="profile">
          Signed in as <br />
          <strong>{props.email}</strong>
        </DropdownItem>
        <DropdownItem
          key="signout"
          className="text-danger"
          color="danger"
          endContent={<LogOut className="w-4 h-4" />}
        >
          <NextLink href="/auth/signout">Sign out</NextLink>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarAvatar;
