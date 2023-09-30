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
type Props = {};

const NavbarAvatar = (props: Props) => {
  const router = useRouter();
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          isBordered
          color="primary"
          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="profile">Profile</DropdownItem>
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
