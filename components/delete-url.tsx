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
  const [isLoading, setIsLoading] = React.useState(false);
  const handleDelete = async () => {
    console.log("delete");
    setIsLoading(true);
    try {
      const { data, error, success } = await deleteUrl(props.id);
      setIsLoading(false);
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
      <Button
        isLoading={isLoading}
        // isIconOnly
        onClick={handleDelete}
        variant="light"
        color="danger"
      >
        Delete
      </Button>
    </>
  );
};

export default DeleteUrl;
