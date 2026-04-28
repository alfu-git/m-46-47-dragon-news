import Image from "next/image";
import React from "react";
import { CiShare2 } from "react-icons/ci";
import { HiOutlineBookmark } from "react-icons/hi2";
import StarGroup from "@/assets/star_group.png";
import { IoEye } from "react-icons/io5";
import Link from "next/link";

const CategoryNewsCard = ({ news }) => {

  const {
    _id,
    author: { name, published_date, img },
    details,
    image_url,
    rating: { number },
    title,
    total_view,
  } = news;

  return (
    <div className="border border-[#E7E7E7] rounded-md shadow">
      <div className="pt-3 pb-4 px-5 bg-[#F3F3F3] flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div>
            <Image
              src={img}
              width={40}
              height={40}
              alt={name ? name : "Author png"}
              className="rounded-full w-auto h-auto"
            />
          </div>

          <div>
            <h3 className="text-[#403F3F] font-semibold">
              {name ? name : "Author Name Unavailable"}
            </h3>
            <span className="text-sm text-[#706F6F]">{published_date}</span>
          </div>
        </div>

        <div className="flex gap-2.5 items-center text-[#706F6F]">
          <button className="btn border-none shadow-none bg-transparent px-0 h-auto">
            <HiOutlineBookmark size={24} />
          </button>

          <button className="btn border-none shadow-none bg-transparent px-0 h-auto">
            <CiShare2 size={24} />
          </button>
        </div>
      </div>

      <div className="mt-3.5 mb-5 mx-5">
        <h2 className="mb-5 text-[#403F3F] text-xl font-bold leading-loose">
          {title}
        </h2>

        <figure className="mb-8 flex justify-center">
          <Image
            src={image_url}
            width={518}
            height={262}
            alt="News related image"
            className="w-full object-fill"
          />
        </figure>

        <p className="mb-2 text-[#706F6F] leading-relaxed line-clamp-4">
          {details}
        </p>

        <Link href={`/news-details/${_id}`}>
          <button className="btn border-none shadow-none px-0 h-auto bg-linear-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent text-lg font-semibold">
            Read More
          </button>
        </Link>
      </div>

      <div className="mb-5 pt-5 mx-5 border-t border-[#E7E7E7] flex justify-between items-center">
        <div className="flex gap-2.5 items-center">
          <Image
            src={StarGroup}
            width={140}
            height={24}
            alt="Multiple Star png"
          />

          <span className="text-[#706F6F] font-medium">{number}</span>
        </div>

        <div className="flex gap-2.5 items-center text-[#706F6F]">
          <IoEye size={24} />
          <span className="font-medium">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryNewsCard;
