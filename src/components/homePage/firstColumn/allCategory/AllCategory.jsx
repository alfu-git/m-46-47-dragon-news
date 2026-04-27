import Link from "next/link";
import React from "react";

const AllCategory = async ({ allCategory, activeId }) => {
  return (
    <div>
      <h5 className="mb-5 text-[#403F3F] text-xl font-semibold">
        All Category
      </h5>

      <div>
        <ul className="flex flex-col gap-3 items-center">
          {allCategory.map((category) => (
            <Link
              href={`/category/${category.category_id}`}
              key={category.category_id}
            >
              <li
                className={`
              text-xl py-3 px-12
              ${activeId === category.category_id ? "btn h-13 border-none shadow-none  bg-[#E7E7E7] rounded-sm text-[#403F3F] font-semibold" : "text-[#9F9F9F] font-medium"}
              `}
              >
                {category.category_name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllCategory;
