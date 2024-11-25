
import CardSection from "@/components/Home/cardsection";
import Consultant from "@/components/Home/consultant";
import FeatureSection from "@/components/Home/featuresection";
import HeroSection from "@/components/Home/herosction";
import Introduction from "@/components/Home/introduction";
import Calculate from "@/components/Home/calculate";
import React from "react";
import Income from "@/components/Home/income";
import Comments from "@/components/Home/comments";
import Blogs from "@/components/Home/blogs/blogs";



const Home = () => {
  return (
    <main className="p-4 space-y-10 pb-20 py-8 flex flex-col gap-8">
      <HeroSection />
      <CardSection />
      <Introduction />
      <FeatureSection />
      <Consultant />
      <Calculate />
      <Income />
      <Comments />
      <Blogs />
    </main>
  );
};

export default Home;
