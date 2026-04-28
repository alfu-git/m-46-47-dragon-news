"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import UserLogo from "@/assets/user.png";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SessionSec = () => {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleLogoutBtn = async () => {
    await authClient.signOut();
    router.push("/");
  };

  const spinner = (
    <span className="mx-10 loading loading-ring loading-xl"></span>
  );

  if (isPending) {
    return spinner;
  }

  return (
    <div className="flex gap-2.5 items-center">
      {user && <p className="font-bold text-zinc-500">{user?.name}</p>}

      <Image
        src={user?.image || UserLogo}
        width={40}
        height={40}
        alt="User logo"
        className="w-10 h-10 rounded-full"
      />

      {user ? (
        <button
          onClick={handleLogoutBtn}
          className="btn border-none shadow-none bg-[#403F3F] sm:px-10 h-11 text-white text-lg sm:text-xl font-semibold"
        >
          Logout
        </button>
      ) : (
        <Link href={"/login"}>
          <button className="btn border-none shadow-none bg-[#403F3F] sm:px-10 h-11 text-white text-lg sm:text-xl font-semibold">
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default SessionSec;
