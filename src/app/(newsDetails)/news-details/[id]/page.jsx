import React from "react";

const NewsDetails = async ({ params }) => {
  const { id } = await params;

  return <div>news details page: {id}</div>;
};

export default NewsDetails;
