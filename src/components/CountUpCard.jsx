import React from "react";
import CountUp from "react-countup";
import { BiUserCircle } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { TbWorldUpload } from "react-icons/tb";

const CountUpCard = () => {
  return (
    <>
      <div className="w-full lg:w-11/12 mx-auto my-12">
        <h1 className="text-indigo-700 text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl hover:scale-110 transition-all duration-800">
          Our Thriving Hobby Community
        </h1>
        <p className="text-center my-5 lg:w-2/5 mx-auto text-gray-400">
          Discover how people are connecting through shared passions every day
          on HobbyHub.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-11/12 md:w-full lg:w-full mx-auto">
          <CountUp
            start={0}
            end={340}
            delay={1}
            duration={10}
            scrollSpyDelay={100}
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <div className="bg-gradient-to-br from-white/80 to-indigo-50 backdrop-blur-md border border-gray-100 shadow-md hover:shadow-xl px-8 py-10 rounded-3xl hover:scale-105 hover:border-indigo-500 transition-all duration-700 cursor-pointer">
                <img className="mb-3" />
                <span
                  ref={countUpRef}
                  className="text-4xl md:text-5xl font-extrabold text-indigo-700"
                ></span>
                <span className="text-4xl md:text-5xl font-extrabold text-indigo-700">
                  +
                </span>
                <div className="text-[#0F0F0F] opacity-60 lg:text-xl font-medium mt-3">
                  <div className="mb-6 mt-6 w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-500">
                    <BiUserCircle
                      className="text-indigo-600 group-hover:text-indigo-700"
                      size={32}
                    />
                  </div>
                  <div className="text-gray-700 text-lg md:text-xl font-semibold leading-snug">
                    Active Users Now
                  </div>
                </div>
              </div>
            )}
          </CountUp>

          <CountUp
            start={1}
            end={120}
            delay={1}
            duration={10}
            scrollSpyDelay={100}
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <div className="bg-gradient-to-br from-white/80 to-indigo-50 backdrop-blur-md border border-gray-100 shadow-md hover:shadow-xl px-8 py-10 rounded-3xl hover:scale-105 hover:border-indigo-500 transition-all duration-700 cursor-pointer">
                <img className="mb-3" />
                <span
                  ref={countUpRef}
                  className="text-4xl md:text-5xl font-extrabold text-indigo-700"
                ></span>
                <span className="text-4xl md:text-5xl font-extrabold text-indigo-700">
                  +
                </span>
                <div className="text-[#0F0F0F] opacity-60 lg:text-xl font-medium">
                  <div className="mb-6 mt-6 w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-500">
                    <IoMdAddCircleOutline
                      className="text-indigo-600 group-hover:text-indigo-700"
                      size={32}
                    />
                  </div>
                  <div className="text-gray-700 text-lg md:text-xl font-semibold leading-snug">
                    Daily Groups Created
                  </div>
                </div>
              </div>
            )}
          </CountUp>

          <CountUp
            start={0}
            end={580}
            delay={1}
            duration={10}
            scrollSpyDelay={100}
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <div className="bg-gradient-to-br from-white/80 to-indigo-50 backdrop-blur-md border border-gray-100 shadow-md hover:shadow-xl px-8 py-10 rounded-3xl hover:scale-105 hover:border-indigo-500 transition-all duration-700 cursor-pointer">
                <img className="mb-3" />
                <span
                  ref={countUpRef}
                  className="text-4xl md:text-5xl font-extrabold text-indigo-700"
                ></span>
                <span className="text-4xl md:text-5xl font-extrabold text-indigo-700">
                  +
                </span>
                <div className="text-[#0F0F0F] opacity-60 lg:text-xl font-medium mt-3">
                  <div className="mb-6 mt-6 w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-500">
                    <FaUserFriends
                      className="text-indigo-600 group-hover:text-indigo-700"
                      size={32}
                    />
                  </div>
                  <div className="text-gray-700 text-lg md:text-xl font-semibold leading-snug">
                    Total Group Joins
                  </div>
                </div>
              </div>
            )}
          </CountUp>

          <CountUp
            start={0}
            end={810}
            delay={1}
            duration={10}
            scrollSpyDelay={100}
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <div className="bg-gradient-to-br from-white/80 to-indigo-50 backdrop-blur-md border border-gray-100 shadow-md hover:shadow-xl px-8 py-10 rounded-3xl hover:scale-105 hover:border-indigo-500 transition-all duration-700 cursor-pointer">
                <img className="mb-3" />
                <span
                  ref={countUpRef}
                  className="text-4xl md:text-5xl font-extrabold text-indigo-700"
                ></span>
                <span className="text-4xl md:text-5xl font-extrabold text-indigo-700">
                  +
                </span>
                <div className="text-[#0F0F0F] opacity-60 lg:text-xl font-medium mt-3">
                  <div className="mb-6 mt-6 w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-500">
                    <TbWorldUpload
                      className="text-indigo-600 group-hover:text-indigo-700"
                      size={32}
                    />
                  </div>
                  <p className="text-gray-700 text-lg md:text-xl font-semibold leading-snug">
                    Total Group Published
                  </p>
                </div>
              </div>
            )}
          </CountUp>
        </div>
      </div>
    </>
  );
};

export default CountUpCard;
