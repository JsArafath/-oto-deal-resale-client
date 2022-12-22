import { Link } from "react-router-dom";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import img2 from "../../assets/images/samsung-galaxy-q2-5g-black-spin-thumb.jpeg";
// import img3 from "../../assets/images/3.png";
// import img4 from "../../assets/images/4.png";
import "./style.css";

const Slider = () => {
  return (
    <div>
      <Swiper spaceBetween={10} slidesPerView={1}>
        <SwiperSlide>
          <div className="absolute bg-gray-900 opacity-50 w-full h-full "></div>
          <div className="absolute w-full h-full  flex flex-col justify-center ">
            <section className="text-white py-20 p-5 md:p-20">
              <h1 className=" text-5xl md:text-3xl font-extrabold mb-2">
                Lowest Price!
              </h1>
              <p className="md:text-xl text-xs">
                Buy and sell with <br /> confidence on our website.
              </p>
              <div className="mt-2">
                <Link to="/reg">
                  <button className="px-4 py-2 hover:bg-blue-900 bg-blue-600 rounded">
                    Sell Now
                  </button>
                </Link>
                <Link to="/categories">
                  {" "}
                  <button className="px-4 py-2 hover:bg-blue-600 rounded ml-2 border border-white">
                    See All Phone
                  </button>
                </Link>
              </div>
            </section>
          </div>

          <img src={img2} className="w-full " alt="00" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
