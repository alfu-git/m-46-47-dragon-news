import React from "react";
import CategoryNewsCard from "./CategoryNewsCard";

const AllNews = ({ newsByCategory }) => {
  return (
    <div>
      <h5 className="mb-5 text-[#403F3F] text-xl font-semibold">
        Dragon News Home
      </h5>

      {newsByCategory.length > 0 ? (
        <div className="flex flex-col gap-y-7.5">
          {newsByCategory.map((news, index) => (
            <CategoryNewsCard key={index} news={news} />
          ))}
        </div>
      ) : (
        <div className="my-30 flex justify-center items-center">
          <p className="text-4xl text-zinc-400 font-semibold">
            No News Available
          </p>
        </div>
      )}
    </div>
  );
};

export default AllNews;
