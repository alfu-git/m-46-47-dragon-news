import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="bg-[#F3F3F3]">
      <Navbar />
      {children}
    </div>
  );
};

export default AuthLayout;
