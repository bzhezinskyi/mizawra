"use client";

import useStore from "@/store/store";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthRout({ children }) {
  const isAuth = useStore((state) => state.isAuth);
  const router = useRouter();
  const patch = usePathname();

  console.log(patch);

  useEffect(() => {
    if (
      isAuth &&
      (patch === "/login" || patch === "/signup" || patch === "/forgot")
    ) {
      return router.push("/");
    }
    if (!isAuth) {
      if (patch === "/login" || patch === "/signup" || patch === "/forgot") {
        return;
      }
      return router.push("/login");
    }
  }, [isAuth, patch]);

  return <>{children}</>;
}
