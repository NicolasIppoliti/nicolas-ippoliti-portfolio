// next image
import Image from "next/image";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// import required modules
import { Pagination } from "swiper";

// icons
import {BsArrowRight } from "react-icons/bs";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Comercios Argentinos',
          path: '/thumb1.png',
          url: 'https://comerciosargentinos.com.ar/'
        },
        {
          title: 'MiCampus',
          path: '/thumb2.jpg',
          url: 'https://comerciosargentinos.com.ar/'
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          url: 'https://comerciosargentinos.com.ar/'
        },
        {
          title: 'Agencia Digital',
          path: '/thumb4.png',
          url: 'https://nicolasippoliti.github.io/agencia-digital/'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.png',
          url: 'https://nicolasippoliti.github.io/agencia-digital/'
        },
        {
          title: 'title',
          path: '/thumb1.png',
          url: 'https://comerciosargentinos.com.ar/'
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          url: 'https://comerciosargentinos.com.ar/'
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          url: 'https://comerciosargentinos.com.ar/'
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div key={index} className="relative flex items-center justify-center overflow-hidden rounded-lg group">
                    {/* link */}
                    {image.url && (
                      <a href={image.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={image.title}></a>
                    )}
                    <div className="relative flex items-center justify-center overflow-hidden group">
                      {/* image */}
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt=''
                      />
                      {/* overlay */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 transition-all duration-300 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">LIVE</div>
                          {/* title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">DEMO</div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay delay-200"><BsArrowRight/></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
              )}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default WorkSlider;
