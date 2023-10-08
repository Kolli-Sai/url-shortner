import { getAllUrls } from "@/actions";
import { getAuthSession } from "@/lib/auth-options";
import { redirect } from "next/navigation";
import React from "react";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { baseUrl } from "@/lib/base-url";
import DeleteUrl from "@/components/delete-url";
import { Metadata } from "next";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
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
              <Card
                key={url.id}
                className="  rounded-xl p-4 m-2 flex flex-col gap-2"
              >
                {/* <Link href={`${url.url}`} isExternal showAnchorIcon>
                  {url.url}
                </Link> */}
                <div>
                  <span className="text-foreground">Shorten Url : </span>
                  <Link
                    href={`${baseUrl}/api/redirect/?alias=${url.alias}`}
                    isExternal
                    showAnchorIcon
                    className=" line-clamp-3"
                  >
                    {`${baseUrl}/api/redirect/?alias=${url.alias}`}
                  </Link>
                </div>
                {/* <Link
                  href={`
                ${baseUrl}/api/redirect/?alias=${url.alias}
                `}
                  isExternal
                  showAnchorIcon
                >{`${baseUrl}/api/redirect/?alias=${url.alias}`}</Link> */}
                <div className=" flex justify-between items-center">
                  <div className=" text-foreground">
                    CreatedAt :&nbsp;
                    <span className="text-success">
                      {url.createdAt
                        .toUTCString()
                        .split(" ")
                        .slice(0, 4)
                        .join(" ")}
                    </span>
                  </div>
                  <DeleteUrl id={url.id} />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      {/* </SimpleBar> */}
    </>
  );
};

export default UrlsPage;
