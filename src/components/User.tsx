"use client";

import { useSession } from "next-auth/react";

const User = () => {
  const { data: session } = useSession();

  return <pre>{JSON.stringify(session)}</pre>;
};

export default User;

// burada UseSession'ı kullanarak session'ları alıcam
