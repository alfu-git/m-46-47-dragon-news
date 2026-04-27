"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = () => {
  const pathname = usePathname();
  const activeClass = "border-b-2 border-[#D72050] text-lg font-medium";
  const inactiveClass = "text-[#706F6F] text-lg";

  return (
    <>
      <li>
        <Link
          href={"/"}
          className={`
          ${pathname === "/" || pathname.startsWith("/category") ? activeClass : inactiveClass}
          `}
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href={"/about"}
          className={`
          ${pathname === "/about" ? activeClass : inactiveClass}
          `}
        >
          About
        </Link>
      </li>

      <li>
        <Link
          href={"/career"}
          className={`
          ${pathname === "/career" ? activeClass : inactiveClass}
          `}
        >
          Career
        </Link>
      </li>
    </>
  );
};

export default NavLink;
