import React from "react";
import { useState } from "react";

const images = [
  "/src/Components/Slider/s1.jpg",
  "/src/Components/Slider/s2.jpg",
  "/src/Components/Slider/s3.jpg",
  "/src/Components/Slider/s4.jpg",
  "/src/Components/Slider/s5.jpg",
  "/src/Components/Slider/s6.jpg",
  "/src/Components/Slider/s7.jpg",
  "/src/Components/Slider/s8.jpg",
  "/src/Components/Slider/s9.jpg",
];

const Front = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  return (
    <>
    
      <div
        className="w-full max-w-7xl mx-auto my-5 mt-7 rounded-3xl overflow-hidden shadow-2xl  bg-gradient-to-r from-blue-300 to-purple-200 flex items-center justify-center"
        style={{ height: "38rem" }}
      >
        <button
          onClick={prevSlide}
          className="absolute left-4 z-20 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-3 drop-shadow-lg text-blue-500 transition-all duration-200"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          aria-label="Previous"
        >
          <svg
            className="w-8 h-8 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 z-20 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          aria-label="Next"
        >
          <svg
            className="w-8 h-8 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <div className="relative w-full    sm:h-72 md:h-80 lg:h-96">
          <div
            className="absolute flex items-center h-full animate-slide"
            style={{ minWidth: "200%" }}
          >
            {[...images, ...images].map((img, idx) => (
              <div key={idx} className="mx-10 flex-shrink-0 flex flex-col items-center justify-center text-center">

                <img
                  src={img} 
                  alt={`Category ${idx + 1}`}
                  className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl flex items-center justify-center transition-transform duration-300 hover:scale-112"
                  style={{ height: "34rem" }}
                />
                <div className=" absolute top-113 mt-4 pl-250 left-1/2 transform -translate-x-1/2 font-medium text-gray-500 text-center font-serif ">30% To 50% Off On All Products</div>

              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 mb-5 mt-4 rounded-full cursor-pointer ${
              i === current ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default Front;
