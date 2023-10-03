import { getAllUrls } from "@/actions";
import { getAuthSession } from "@/lib/auth-options";
import { redirect } from "next/navigation";
import React from "react";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { baseUrl } from "@/lib/base-url";
import DeleteUrl from "@/components/delete-url";
import { Metadata } from "next";
type Props = {};

export const metadata: Metadata = {
  title: "Urls",
};
const UrlsPage = async (props: Props) => {
  const { session } = await getAuthSession();
  if (!session) {
    return redirect("/auth/signin");
  }
  const { data, error, success } = await getAllUrls();
  if (error) {
    return <div>{error}</div>;
  }
  if (data?.length === 0) {
    return <div>No urls found</div>;
  }

  return (
    <>
      {/* <SimpleBar style={{ maxHeight: 500 }}> */}
      <div className=" flex justify-center">
        <div className=" max-w-md flex flex-col gap-6">
          {data?.map((url) => {
            return (
              <div
                key={url.id}
                className=" bg-rose-100/10 rounded-xl p-4 m-2 flex flex-col gap-2"
              >
                <Link href={`${url.url}`} isExternal showAnchorIcon>
                  {url.url}
                </Link>
                <Link
                  href={`
                ${baseUrl}/api/redirect/?alias=${url.alias}
                `}
                  isExternal
                  showAnchorIcon
                >{`${baseUrl}/api/redirect/?alias=${url.alias}`}</Link>
                <DeleteUrl id={url.id} />
              </div>
            );
          })}
        </div>
      </div>
      {/* </SimpleBar> */}
    </>
  );
};

export default UrlsPage;
