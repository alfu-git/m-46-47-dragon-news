import FindSection from "@/components/homePage/thirdColumn/FindSection";
import LoginSection from "@/components/homePage/thirdColumn/LoginSection";
import QZone from "@/components/homePage/thirdColumn/QZone";
import { getNewsById } from "@/lib/dataFetch";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";

const NewsDetails = async ({ params }) => {
  const { id } = await params;

  const news = await getNewsById(id);
  console.log(news);

  return (
    <section className="mb-20">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-9">
          <h5 className="mb-5 text-[#403F3F] text-xl font-semibold">
            Dragon News Home
          </h5>

          <div className="p-7.5 border border-[#E7E7E7] rounded-md">
            <figure className="mb-5">
              <Image
                src={news.image_url}
                width={780}
                height={410}
                alt={news.title}
                className="rounded-md w-full"
              />
            </figure>

            <h2 className="mb-2 text-[#403F3F] text-xl font-bold leading-loose">
              {news.title}
            </h2>

            <p className="mb-8 text-[#706F6F] leading-relaxed">
              {news.details}
            </p>

            <Link href={`/category/${news.category_id}`}>
              <button className="btn border-none shadow-none h-12 px-6 py-2 bg-[#D72050] text-white text-xl font-medium flex gap-1.5 items-center">
                <FiArrowLeft size={24} />
                <span>All news in this category</span>
              </button>
            </Link>
          </div>
        </div>

        <div className="col-span-3">
          <LoginSection />
          <FindSection />
          <QZone />
        </div>
      </div>
    </section>
  );
};

export default NewsDetails;
