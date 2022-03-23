import React from "react";
import { A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface CardJumbotronProps {
  highlightText: JSX.Element;
  description?: string;
  imageUrl?: string;
  linkRefer?: string;
  textLink?: string;
}

const CardJumbotron: React.FC<CardJumbotronProps> = ({
  highlightText,
  description,
  imageUrl,
  linkRefer,
  textLink,
}) => {
  return (
    <div className="flex w-[100%] h-[500px] bg-grey-2">
      <h1>Rex {highlightText}</h1>
    </div>
  );
};

const Jumbotron = () => {
  const dummy = [
    {
      id: 0,
      highlightText: (
        <h1 className="white">
          Get up to 30% <span className="text-secondary">New Arrival</span>
        </h1>
      ),
      description: "",
      imageUrl: "",
      linkRefer: "",
      textLink: "",
    },
    {
      id: 0,
      highlightText: (
        <h1 className="white">
          Get up to 30% <span className="text-secondary">New Arrival</span>
        </h1>
      ),
      description: "",
      imageUrl: "",
      linkRefer: "",
      textLink: "",
    },
  ];
  return (
    <div>
      <Swiper
        modules={[A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          waitForTransition: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
        }}
        loop
        effect="cards"
        className="swiper-product"
      >
        {dummy.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <CardJumbotron highlightText={item.highlightText} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Jumbotron;
