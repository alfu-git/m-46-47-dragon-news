"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const LoginSection = () => {
  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleGithubLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="mb-8">
      <h5 className="mb-5 text-[#403F3F] text-xl font-semibold">Login With</h5>

      <div className="flex flex-col gap-3">
        <button
          onClick={handleGoogleLogin}
          className="btn shadow-none bg-transparent border-2 border-blue-600 text-blue-600 text-base rounded-lg"
        >
          <FaGoogle size={18} />
          <span>Login with Google</span>
        </button>

        <button
          onClick={handleGithubLogin}
          className="btn shadow-none bg-transparent border-2 border-black text-base rounded-lg"
        >
          <FaGithub size={18} />
          <span>Login with Github</span>
        </button>
      </div>
    </div>
  );
};

export default LoginSection;
