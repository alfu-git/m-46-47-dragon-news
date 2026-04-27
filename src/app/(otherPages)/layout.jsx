import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const PagesLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default PagesLayout;
