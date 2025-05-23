import React, { useState } from "react";

const FeaturesSections = () => {
  const [features, setFeatures] = useState();

  fetch("/features.json")
    .then((res) => res.json())
    .then((data) => {
      setFeatures(data);
    });

  // useEffect(() => {
  //   fetch("")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFeatures(data);
  //     });
  // }, []);

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
              className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-6xl mb-6">{icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-700">
                {title}
              </h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturesSections;
