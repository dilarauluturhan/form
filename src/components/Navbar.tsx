import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { Cat } from "lucide-react";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import UserAccountnav from "./UserAccountnav";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Cat size={32} strokeWidth={1.75} />
        </Link>
        {session?.user ? (
          <UserAccountnav />
        ) : (
          <Link className={buttonVariants()} href="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
