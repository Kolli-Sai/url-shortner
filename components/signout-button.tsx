"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { signOut } from "next-auth/react";
import { toast } from "sonner";
import { useSearchParams, useRouter } from "next/navigation";
type Props = {};

const SignoutButton = (props: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const [isLoading, setIsLoading] = React.useState(false);
  const handleLogout = async () => {
    setIsLoading(true);
    try {
      const logout = await signOut({
        redirect: false,
        callbackUrl,
      });
      router.push(callbackUrl);
      router.refresh();
      setIsLoading(false);
      console.log({ logout });
      toast.success("Signed out successfully");
    } catch (error: any) {
      console.log({ logoutErrorMessage: error.message });
      toast.error(error.message || "Something went wrong");
    }
  };
  return (
    <Button
      isLoading={isLoading}
      onClick={handleLogout}
      variant="bordered"
      fullWidth
      color="danger"
    >
      Sign Out
    </Button>
  );
};

export default SignoutButton;
