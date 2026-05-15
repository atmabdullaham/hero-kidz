"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link className={` ${path === href ? "text-primary" : ""}`} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
