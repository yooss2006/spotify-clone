"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPlay } from "react-icons/fa";

type Props = {
  image: string;
  name: string;
  href: string;
};

export default function ListItem({ image, name, href }: Props) {
  const router = useRouter();
  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      className="pr-4 relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition"
    >
      <div className="min-w-[64px] min-h-[64px] relative">
        <Image className="object-cover" fill src={image} alt="Image" />
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div className="p-4 flex items-center justify-center absolute right-5 transition opacity-0 rounded-full bg-green-500 drop-shadow-md group-hover:opacity-100 hover:scale-110">
        <FaPlay className="text-black" />
      </div>
    </button>
  );
}
