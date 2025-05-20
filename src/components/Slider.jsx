import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <>
     <div className="md:w-11/12 mx-auto p-4">
      <div className="reviews-carousel my-12">
        <h2 className="text-green-700 text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-6">
          🎉 Featured Offers or Giveaways
        </h2>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
        >
          <SwiperSlide>
            <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl group">
              <img
                src="https://img.freepik.com/free-vector/gradient-enter-win-label_23-2150291882.jpg"
                alt="Enter to Win"
                className="w-full h-full hover:bg-black/60 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-black"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl group">
              <img
                src="https://img.freepik.com/free-vector/gradient-enter-win-label_23-2150291879.jpg"
                alt="Enter to Win"
                className="w-full h-full hover:bg-black/60 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-black"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl group">
              <img
                src="https://www.pushengage.com/wp-content/uploads/2022/11/Social-Media-Giveaway-Ideas.png"
                alt="Enter to Win"
                className="w-full h-full hover:bg-black/60 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-black"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl group">
              <img
                src="https://www.creativefabrica.com/wp-content/uploads/2022/03/02/Giveaway-and-Enter-to-Win-Banner-2-Graphics-26324567-1-1-580x386.jpg"
                alt="Enter to Win"
                className="w-full h-full hover:bg-black/60 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-black"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="w-11/12 flex justify-end">
          <div ref={progressCircle} className="progress-circle">
            <span ref={progressContent} className="progress-text">
              0s
            </span>
          </div>
        </div>
      </div>

      <div className="border border-dashed border-gray-300"></div>
    </div>
    </>
  );
};

export default Slider;
