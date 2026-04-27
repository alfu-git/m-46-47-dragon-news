import React from "react";

const AllCategory = async ({ allCategory, activeId }) => {
  return (
    <div>
      <h2 className="mb-5 text-[#403F3F] text-xl font-semibold">
        All Category
      </h2>

      <div>
        <ul className="flex flex-col gap-3 items-center">
          {allCategory.map((category) => (
            <li
              key={category.category_id}
              className={`
              text-xl py-3
              ${activeId === category.category_id ? "px-12 bg-[#E7E7E7] rounded-sm text-[#403F3F] font-semibold" : "text-[#9F9F9F] font-medium"}
              `}
            >
              {category.category_name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllCategory;
