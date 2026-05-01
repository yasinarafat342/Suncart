"use client";

import { createAuthClient } from "better-auth/react";
import { useEffect, useState } from "react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
});

type Session = Awaited<ReturnType<typeof authClient.getSession>>["data"];

export function useSession() {
  const [data, setData] = useState<Session>(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    authClient.getSession().then((res) => {
      setData(res.data);
      setIsPending(false);
    });
  }, []);

  return { data, isPending };
}