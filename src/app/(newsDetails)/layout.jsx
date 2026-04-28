import Header from "@/components/shared/header/Header";
import React from "react";

const NewsDetailsLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default NewsDetailsLayout;
