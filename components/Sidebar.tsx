"use client";

import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "@/components/Box";
import SidebarItem from "@/components/SidebarItem";
import Library from "@/components/Library";

type Props = {
  children: React.ReactNode;
};

export default function Sidebar({ children }: Props) {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );
  return (
    <div className="flex h-full">
      <div className="w-[300px] h-full p-2 hidden md:flex flex-col gap-y-2 bg-black">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => {
              return <SidebarItem key={item.label} {...item} />;
            })}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
}
