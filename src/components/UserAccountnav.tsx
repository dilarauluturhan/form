"use client";

import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

const UserAccountnav = () => {
  return (
    <Button onClick={() => signOut({
        redirect: true,
        callbackUrl: `${window.location.origin}/login`
    })} variant="destructive">
      Sign out
    </Button>
  );
};

export default UserAccountnav;
