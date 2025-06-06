import { useTranslation } from "next-i18next";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialSlider = () => {
  const { t } = useTranslation("testimonials");
  const testimonialData = t("testimonials", { returnObjects: true });
  console.log(t('testimonials'));
  console.log('Namespace content root:',t('', { returnObjects: true }));

  if (!Array.isArray(testimonialData)) {
    console.error("Testimonials data is not an array:", testimonialData);
    return null;
  }

  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center h-full px-16 md:flex-row gap-x-8">
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                <div className="mx-auto mb-2">
                  <Image
                    src={`/t-avt-${index + 1}.png`}
                    width={100}
                    height={100}
                    alt="avatar"
                  />
                </div>
                <div className="text-lg">{person.name}</div>
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              <div className="mb-4">
                <FaQuoteLeft className="mx-auto text-4xl xl:text-6xl text-white/20 md:mx-0" />
              </div>
              <div className="text-center xl:text-lg md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
