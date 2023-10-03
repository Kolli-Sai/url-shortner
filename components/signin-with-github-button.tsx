"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
type Props = {};

const SigninWithGithubButton = (props: Props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const login = await signIn("github", { callbackUrl });
      console.log({ login });
      setIsLoading(false);
      if (login?.error) {
        throw new Error(login.error);
      } else {
        // toast.success("Signed in successfully");
      }
    } catch (error: any) {
      console.log({ loginErrorMessage: error.message });
      toast.error(error.message || "Something went wrong");
    }
  };
  return (
    <Button
      isLoading={isLoading}
      onClick={handleLogin}
      variant="bordered"
      fullWidth
      color="primary"
      endContent={<Github className=" w-4 h-4" />}
    >
      Sign in with Github
    </Button>
  );
};

export default SigninWithGithubButton;
