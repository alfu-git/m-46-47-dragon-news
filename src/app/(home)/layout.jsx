import Headline from "@/components/headline/Headline";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Headline />
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
