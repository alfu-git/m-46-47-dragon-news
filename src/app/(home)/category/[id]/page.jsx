import React from "react";
import AllCategory from "@/components/homePage/firstColumn/allCategory/AllCategory";
import AllNews from "@/components/homePage/secondColumn/AllNews";
import FindSection from "@/components/homePage/thirdColumn/FindSection";
import LoginSection from "@/components/homePage/thirdColumn/LoginSection";
import QZone from "@/components/homePage/thirdColumn/QZone";
import { getAllCategory, getNewsByCategoryId } from "@/lib/dataFetch";
import BlueBG from "@/components/homePage/thirdColumn/BlueBG";

const PageByCategory = async ({ params }) => {
  const { id } = await params;

  const allCategory = await getAllCategory();
  const newsByCategory = await getNewsByCategoryId(id);

  return (
    <section className="mt-18">
      <div className="grid gap-6 grid-cols-12">
        <div className="col-span-3">
          <AllCategory allCategory={allCategory} activeId={id} />
        </div>

        <div className="col-span-6">
          <AllNews newsByCategory={newsByCategory} />
        </div>

        <div className="col-span-3">
          <LoginSection />
          <FindSection />
          <QZone />
          <BlueBG />
        </div>
      </div>
    </section>
  );
};

export default PageByCategory;
