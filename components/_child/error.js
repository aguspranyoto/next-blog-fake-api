import React from "react";
import Image from "next/image";

function error() {
  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold text-orange-600 py-10">
        Something went wrong
      </h1>
      <Image alt="" width={400} height={400} src={"/images/not_found.png"} />
    </div>
  );
}

export default error;
