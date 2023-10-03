import React from "react";
import { Spinner } from "@nextui-org/spinner";
type Props = {};

const loading = (props: Props) => {
  return (
    <div className="  flex justify-center ">
      <Spinner size="lg" />
    </div>
  );
};

export default loading;
