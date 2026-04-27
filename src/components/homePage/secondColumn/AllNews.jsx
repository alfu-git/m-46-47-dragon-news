import React from "react";

const AllNews = ({ newsByCategory }) => {
  console.log(newsByCategory);
  return (
    <div>
      <h5 className="mb-5 text-[#403F3F] text-xl font-semibold">
        Dragon News Home
      </h5>

      {newsByCategory.length > 0 ? (
        <div>
          {newsByCategory.map((news, index) => (
            <h2 key={index}>{news.title}</h2>
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
