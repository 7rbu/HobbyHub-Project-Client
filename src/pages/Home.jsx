import React from "react";
import Theme from "../components/Theme";
import Slider from "../components/Slider";
import { useLoaderData } from "react-router";
import FeaturedGroup from "../components/FeaturedGroup";
import CountUpCard from "../components/CountUpCard";
import FeaturesSections from "../components/FeaturesSections";

const Home = () => {
  const featuredGroupData = useLoaderData();
  console.log(featuredGroupData);

  return (
    <div>
      <Theme></Theme>

      <Slider></Slider>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full mx-auto">
        {featuredGroupData?.map((group) => (
          <FeaturedGroup key={group._id} group={group} />
        ))}
      </div>
      <CountUpCard></CountUpCard>
      <FeaturesSections></FeaturesSections>
    </div>
  );
};

export default Home;
