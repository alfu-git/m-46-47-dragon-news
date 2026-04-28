import NotFound from "@/components/shared/notFoundPage/NotFound";
import React from "react";

export const metadata = {
  title: "Page Not Found",
  description: "This page is not available",
};

const NotFoundPage = () => {
  return (
    <div>
      <NotFound />
    </div>
  );
};

export default NotFoundPage;
