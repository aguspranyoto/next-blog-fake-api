import React from "react";
import Image from "next/image";
import Link from "next/link";

function author({ name, img, designation }) {
  if (!name && !img) return <></>;
  return (
    <div className="author flex py-5">
      <Image
        src={img || "/"}
        width={60}
        height={60}
        alt=""
        className="rounded-full"
      />
      <div className="flex flex-col justify-center px-4">
        <Link
          href={"/"}
          className="text-md font-bold text-gray-800 hover:text-gray-600"
        >
          {name || "Unknown"}
        </Link>
        <span className="text-sm text-gray-500">
          {designation || "Unknown"}
        </span>
      </div>
    </div>
  );
}

export default author;
