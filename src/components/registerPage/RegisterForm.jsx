"use client";
import React, { useState } from "react";

const RegisterForm = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="px-4 pt-10 sm:pt-15 pb-5 lg:w-188 lg:mx-auto lg:p-19 bg-white rounded-md shadow">
      <h4 className="mb-12.5 text-[#403F3F] text-4xl font-semibold text-center">
        Register your account
      </h4>

      <div className="pt-12.5 mb-7.5 px-3 lg:px-6 border-t border-[#E7E7E7]">
        <form>
          {/* name */}
          <fieldset className="fieldset mb-6">
            <legend className="fieldset-legend mb-3.75 text-[#403F3F] text-xl font-semibold">
              Your Name
            </legend>

            <input
              type="text"
              name="name"
              className="input w-full h-16 p-5 bg-[#F3F3F3] border-none rounded-md placeholder:text-[#9F9F9F]"
              placeholder="Enter your name"
            />
            <p className="label">Optional</p>
          </fieldset>

          {/* photo url */}
          <fieldset className="fieldset mb-7.5">
            <legend className="fieldset-legend mb-3.75 text-[#403F3F] text-xl font-semibold">
              Photo URL
            </legend>

            <input
              type="url"
              name="photo-url"
              className="input w-full h-16 p-5 bg-[#F3F3F3] border-none rounded-md placeholder:text-[#9F9F9F]"
              placeholder="Enter your photo url"
            />
            <p className="label">Optional</p>
          </fieldset>

          {/* email */}
          <fieldset className="fieldset mb-7.5">
            <legend className="fieldset-legend mb-3.75 text-[#403F3F] text-xl font-semibold">
              Email
            </legend>

            <input
              type="email"
              name="email"
              className="input w-full h-16 p-5 bg-[#F3F3F3] border-none rounded-md placeholder:text-[#9F9F9F]"
              placeholder="Enter your email"
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

          {/* checkbox */}
          <fieldset className="fieldset mb-7.5 flex items-center">
            <input
              type="checkbox"
              id="terms"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="w-5 h-5 border-[#CFCFCF] rounded-md"
            />

            <label
              htmlFor="terms"
              className="flex gap-1 items-center text-[#706F6F]"
            >
              <span>Accept</span>
              <span className="font-semibold">Terms & Conditions</span>
            </label>
          </fieldset>

          <button className="btn border-none shadow-none bg-[#403F3F] rounded-md w-full h-16 text-white text-xl font-semibold">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
