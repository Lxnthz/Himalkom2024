import React, { useState } from 'react';
import { motion } from 'framer-motion';
import arrowleft from "./../assets/ImageSlider/Arrow - Left Circle.svg";
import arrowright from "./../assets/ImageSlider/Arrow - Right Circle.svg";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleThumbs = [
    currentIndex,
    (currentIndex + 1) % slides.length,
    (currentIndex + 2) % slides.length,
    (currentIndex + 3) % slides.length
  ];

  const slideStyles = {   
    backgroundPosition: 'center',
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const getThumbnailIndex = (index) => {
    if (currentIndex + index < slides.length) {
      return currentIndex + index;
    } else {
      return currentIndex + index - slides.length;
    }
  };

  return (
    <motion.div
      whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.35 }}   
      id="image-slider" 
      className="mt-20 flex flex-col justify-center items-center"
    >
    <div className="flex justify-center items-center w-56 md:w-56 lg:w-56 xl:w-56 2xl:w-56 h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12 bg-[#E49800] border border-gray-900 shadow-black-4 translate-y-6 shadow-[7px_7px_0_#000000]">
                            <h2 className="font-monts font-semibold text-2xl md:text-xl lg:text-xl xl:text-xl 3xl:text-xl leading-6 md:leading-6 lg:leading-6 xl:leading-6 2xl:leading-6 text-center text-white ">
                                DOKUMENTASI
                            </h2>
                        </div>

        <div className="w-[66.5rem] h-[704px] bg-[#453755] border-3 border-gray-900 shadow-lg p-4 flex flex-col items-center">
        <div className="flex justify-center items-center w-full py-14">
          <img
            src={arrowleft}
            alt="arrow left"
            className="cursor-pointer pr-4 sm:pr-8 md:pr-12 lg:pr-16 xl:pr-20"
            onClick={goToPrevious}
          />
          <div className='w-[40rem] h-[18rem] sm:h-[250px] md:h-[300px] lg:h-[342px] border-3 border-[#16052B] shadow-lg' style={slideStyles}></div>
          <img
            src={arrowright}
            alt="arrow right"
            className="cursor-pointer pl-4 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20"
            onClick={goToNext}
          />
        </div>

        <div className="flex bg-black justify-center p-4 sm:p-6 md:p-10 lg:p-14 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          {visibleThumbs.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className="border-2 border-[#16052B] w-[150px] h-[100px] sm:w-[180px] sm:h-[120px] md:w-[200px] md:h-[130px] lg:w-[215px] lg:h-[136px] m-1 transition-transform transform hover:scale-110"
            >
              <img
                src={slides[getThumbnailIndex(slideIndex)].url}
                alt={`Slide ${slideIndex + 1}`}
                className="object-cover cursor-pointer w-full h-full"
                onClick={() => setCurrentIndex(getThumbnailIndex(slideIndex))}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ImageSlider;