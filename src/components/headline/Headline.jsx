import React from "react";
import Marquee from "react-fast-marquee";

const headlineNews = [
  { id: 1, title: "Global Tech Companies Invest Billions in AI Innovation" },
  { id: 2, title: "Climate Change Talks Resume with New Global Commitments" },
  { id: 3, title: "Stock Markets Show Strong Recovery Amid Economic Optimism" },
  { id: 4, title: "Breakthrough in Renewable Energy Boosts Solar Efficiency" },
  { id: 5, title: "International Sports Events Draw Record-Breaking Crowds" },
  { id: 6, title: "New Education Policy Aims to Modernize Learning Systems" },
  { id: 7, title: "Healthcare Sector Sees Major Advancements in Telemedicine" },
];

const Headline = () => {
  return (
    <section className="p-4 bg-[#F3F3F3]">
      <div className="flex gap-5 items-center">
        <button className="btn border-none shadow-none bg-[#D72050] lg:px-6 lg:h-12 text-xl text-white font-medium">
          Latest
        </button>

        <Marquee pauseOnHover={true}>
          {headlineNews.map((news) => (
            <div
              key={news.id}
              className="flex gap-5 text-lg text-[#403F3F] font-semibold"
            >
              <p>{news.title}</p>
              <span className="mr-5">|</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Headline;
