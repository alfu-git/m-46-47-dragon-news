import AllCategory from "@/components/homePage/firstColumn/allCategory/AllCategory";
import AllNews from "@/components/homePage/secondColumn/AllNews";
import FindSection from "@/components/homePage/thirdColumn/FindSection";
import LoginSection from "@/components/homePage/thirdColumn/LoginSection";
import QZone from "@/components/homePage/thirdColumn/QZone";

const getAllCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data.news_category;
};

export default async function Home() {
  const allCategory = await getAllCategory();

  return (
    <section className="mt-18">
      <div className="grid gap-6 grid-cols-12">
        <div className="col-span-3">
          <AllCategory allCategory={allCategory} activeId={null} />
        </div>

        <div className="col-span-6">
          <AllNews />
        </div>

        <div className="col-span-3">
          <LoginSection />
          <FindSection />
          <QZone />
        </div>
      </div>
    </section>
  );
}
