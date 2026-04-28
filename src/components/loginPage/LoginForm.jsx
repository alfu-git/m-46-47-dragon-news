import Link from "next/link";
import React from "react";

const LoginForm = () => {
  return (
    <div className="px-4 py-10 sm:py-15 lg:w-188 lg:mx-auto lg:p-19 bg-white rounded-md shadow">
      <h4 className="mb-12.5 text-[#403F3F] text-4xl font-semibold text-center">
        Login your account
      </h4>

      <div className="pt-12.5 mb-7.5 px-3 lg:px-6 border-t border-[#E7E7E7]">
        <form>
          {/* email */}
          <fieldset className="fieldset mb-6">
            <legend className="fieldset-legend mb-3.75 text-[#403F3F] text-xl font-semibold">
              Email address
            </legend>

            <input
              type="email"
              name="email"
              className="input w-full h-16 p-5 bg-[#F3F3F3] border-none rounded-md placeholder:text-[#9F9F9F]"
              placeholder="Enter your email address"
            />
            <p className="label">Optional</p>
          </fieldset>

          {/* password */}
          <fieldset className="fieldset mb-7.5">
            <legend className="fieldset-legend mb-3.75 text-[#403F3F] text-xl font-semibold">
              Password
            </legend>

            <input
              type="password"
              name="password"
              className="input w-full h-16 p-5 bg-[#F3F3F3] border-none rounded-md placeholder:text-[#9F9F9F]"
              placeholder="Enter your password"
            />
            <p className="label">Optional</p>
          </fieldset>

          <button className="btn border-none shadow-none bg-[#403F3F] rounded-md w-full h-16 text-white text-xl font-semibold">
            Login
          </button>
        </form>
      </div>

      <p className="flex gap-1 items-center font-semibold justify-center">
        <span className="text-[#706F6F]">Dont’t Have An Account ?</span>

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
