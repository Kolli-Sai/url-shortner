"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { urlSchema } from "@/schemas";
import { UrlSchemaType } from "@/types";
import { createUrl } from "@/actions";
import { toast } from "sonner";
import { Snippet } from "@nextui-org/snippet";
import { baseUrl } from "@/lib/base-url";
import { Link } from "@nextui-org/link";

type Props = {};

const UrlForm = (props: Props) => {
  const [snippet, setSnippet] = React.useState("");

  // React.useEffect(() => {
  //   console.log("snippet", snippet);
  //   setTimeout(() => {
  //     setSnippet("");
  //   }, 10000);
  // }, [snippet]);
  /**useForm */
  const { register, reset, handleSubmit, formState, setError } =
    useForm<UrlSchemaType>({
      mode: "onBlur",
      resolver: zodResolver(urlSchema),
    });

  /**form State */
  const { errors, isDirty, isValid, isLoading, isSubmitting } = formState;

  /**submit handler */
  const onSubmit = async ({ url, alias }: UrlSchemaType) => {
    console.log("data", { url, alias });
    try {
      const { data, error } = await createUrl({ url: url, alias: alias });
      if (error) {
        console.log("error", error);
        setError("alias", { message: error.message });
        throw new Error(error);
      } else {
        console.log({ responseData: data });
        toast.success("Url created successfully");
        setSnippet(data?.alias || "");
        reset();
      }
    } catch (error: any) {
      console.log("error", error);
      toast.error(error.message || "Something went wrong");
    }
  };
  return (
    <form className=" w-full min-w-300 max-w-sm flex flex-col gap-8 my-4">
      <Input
        {...register("url")}
        type="url"
        labelPlacement="outside"
        label="URL"
        isRequired
        color="primary"
        variant="bordered"
        isInvalid={!!errors.url}
        errorMessage={errors?.url?.message}
      />
      <Input
        {...register("alias")}
        type="text"
        label="Alias"
        color="primary"
        labelPlacement="outside"
        variant="bordered"
        isInvalid={!!errors.alias}
        errorMessage={errors?.alias?.message}
      />
      <Button
        onClick={handleSubmit(onSubmit)}
        className=""
        color="primary"
        isLoading={isLoading || isSubmitting}
        isDisabled={!isDirty || !isValid}
      >
        Generate
      </Button>
      {snippet && (
        <Link
          href={`${baseUrl}/api/redirect/?alias=${snippet}`}
          isExternal
          showAnchorIcon
        >{`${baseUrl}/api/redirect/?alias=${snippet}`}</Link>
      )}
    </form>
  );
};

export default UrlForm;
