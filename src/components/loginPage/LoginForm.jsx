"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = async (data) => {
    const { email, password } = data;

    setLoading(true);

    const { data: res, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
      callbackURL: "/",
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    if (res) {
      alert("Login Successful!");
    }
  };

  return (
    <div className="px-4 py-10 sm:py-15 lg:w-188 lg:mx-auto lg:p-19 bg-white rounded-md shadow">
      <h4 className="mb-12.5 text-[#403F3F] text-4xl font-semibold text-center">
        Login your account
      </h4>

      <div className="pt-12.5 mb-7.5 px-3 lg:px-6 border-t border-[#E7E7E7]">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          {/* email */}
          <fieldset className="fieldset mb-6">
            <legend className="fieldset-legend mb-3.75 text-[#403F3F] text-xl font-semibold">
              Email address
            </legend>

            <input
              type="email"
              {...register("email", { required: "Email field is required" })}
              className="input w-full h-16 p-5 bg-[#F3F3F3] border-none rounded-md placeholder:text-[#9F9F9F]"
              placeholder="Enter your email address"
            />

            {errors.email && (
              <p className="label text-red-500">{errors.email.message}</p>
            )}
          </fieldset>

          {/* password */}
          <fieldset className="fieldset mb-7.5">
            <legend className="fieldset-legend mb-3.75 text-[#403F3F] text-xl font-semibold">
              Password
            </legend>

            <input
              type="password"
              {...register("password", {
                required: "Password field is required",
              })}
              className="input w-full h-16 p-5 bg-[#F3F3F3] border-none rounded-md placeholder:text-[#9F9F9F]"
              placeholder="Enter your password"
            />

            {errors.password && (
              <p className="label text-red-500">{errors.password.message}</p>
            )}
          </fieldset>

          <button
            disabled={loading}
            className="btn border-none shadow-none bg-[#403F3F] rounded-md w-full h-16 text-white text-xl font-semibold"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>

      <p className="flex gap-1 items-center font-semibold justify-center">
        <span className="text-[#706F6F]">Don’t Have An Account ?</span>

        <Link
          href={"/register"}
          className="bg-linear-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent f"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
