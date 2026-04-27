import React from "react";
import Image from "next/image";
import UserLogo from "@/assets/user.png";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <section className="mt-5">
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>

              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <NavLink />
              </ul>
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-5 items-center">
              <NavLink />
            </ul>
          </div>

          <div className="navbar-end">
            <div className="flex gap-2.5 items-center">
              <Image src={UserLogo} width={41} height={41} alt="User logo" />

              <button className="btn border-none shadow-none bg-[#403F3F] px-10 h-11 text-white text-xl font-semibold">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
