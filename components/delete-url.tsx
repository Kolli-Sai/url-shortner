"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { Trash } from "lucide-react";
import { deleteUrl } from "@/actions";
import { toast } from "sonner";
type Props = {
  id: string;
};

const DeleteUrl = (props: Props) => {
  const handleDelete = async () => {
    console.log("delete");
    try {
      const { data, error, success } = await deleteUrl(props.id);
      if (error) {
        console.log(error);
        toast.error(error);
      } else {
        toast.success("Url deleted successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button isIconOnly onClick={handleDelete} variant="light" color="danger">
        <Trash />
      </Button>
    </>
  );
};

export default DeleteUrl;
