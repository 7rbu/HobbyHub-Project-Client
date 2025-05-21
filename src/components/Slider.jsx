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
          <h2 className="text-indigo-700 text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-6">
           See What Everyone’s Up To!
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
                  src="https://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/s3/field/field_image_main/sm_friends.jpg?itok=FHTZDpkH"
                  alt="Enter to Win"
                  className="w-full h-full hover:bg-black/60 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-black"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl group">
                <img
                  src="https://imgix.bustle.com/uploads/shutterstock/2019/7/25/af09e39b-adfb-4c33-bdfb-d185fdc78f55-shutterstock-1157410036.jpg?w=374&h=249&fit=crop&crop=faces&dpr=2"
                  alt="Enter to Win"
                  className="w-full h-full hover:bg-black/60 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-black"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl group">
                <img
                  src="https://images.unsplash.com/photo-1495837174058-628aafc7d610?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZW5kcyUyMGhhdmluZyUyMGZ1bnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Enter to Win"
                  className="w-full h-full hover:bg-black/60 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-black"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl group">
                <img
                  src="https://images.pexels.com/photos/1222949/pexels-photo-1222949.jpeg?cs=srgb&dl=pexels-minan1398-1222949.jpg&fm=jpg"
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
