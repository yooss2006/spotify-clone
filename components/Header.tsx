"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "@/components/Button";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Header({ children, className }: Props) {
  const router = useRouter();

  const handleLogout = () => {};
  return (
    <div
      className={twMerge(
        `h-fit p-6 bg-gradient-to-b from-emerald-800`,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="p-2 rounded-full flex items-center justify-center bg-white hover:opacity-75 transition">
            <HiHome className="text-black" size={20} />
          </button>
          <button className="p-2 rounded-full flex items-center justify-center bg-white hover:opacity-75 transition">
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button
                onClick={() => {}}
                className="bg-transparent text-neutral-300 font-medium"
              >
                Sign up
              </Button>
            </div>
            <div>
              <Button onClick={() => {}} className="px-6 py-2 bg-white">
                Log in
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
}
