import React from "react";
import Slider from "../components/Slider";
import { useLoaderData } from "react-router";
import FeaturedGroup from "../components/FeaturedGroup";
import CountUpCard from "../components/CountUpCard";
import FeaturesSections from "../components/FeaturesSections";
import Theme from "./../components/Theme";

const Home = () => {
  const featuredGroupData = useLoaderData();

  return (
    <div>
      <div className="flex justify-end">
        <Theme></Theme>
      </div>
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
