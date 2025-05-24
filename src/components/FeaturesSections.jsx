import React, { useEffect, useState } from "react";
import LoadingSpinners from "./LoadingSpinners";

const FeaturesSections = () => {
  const [features, setFeatures] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://papaya-server.vercel.app/featuresdata")
      .then((res) => res.json())
      .then((data) => {
        setFeatures(data);
        setLoading(false);
      });
  }, [setFeatures]);

  if (loading) {
    return <LoadingSpinners />;
  }

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-12 text-gray-900">
        <h2 className="text-indigo-700 text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-6 hover:scale-110 transition-all duration-800">
          Why People Love HobbyHub
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features?.map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-6xl mb-6">{icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-700 dark:text-gray-300">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturesSections;
