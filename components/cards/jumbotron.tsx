import { useOnline } from "hooks";
import { ImagesProps } from "interfaces";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export interface CardJumbotronProps {
  id?: number;
  highlightText: JSX.Element;
  description?: string;
  imageUrl?: string;
  images?: ImagesProps;
  linkRefer?: string;
  textLink?: string;
}
interface Props {
  jumbotron: CardJumbotronProps[];
}

const CardJumbotron: React.FC<CardJumbotronProps> = ({
  highlightText,
  description,
  imageUrl = "/images/bg.png",
  linkRefer,
  textLink,
}) => {
  const isOnline = useOnline();
  return (
    <div className="flex w-[100%] h-[500px] bg-grey-2">
      <h1>{highlightText}</h1>
      {isOnline ? (
        <Image
          src={"http://localhost:1339" + imageUrl}
          alt={description}
          layout={"fill"}
        />
      ) : (
        <div>
          <h2 className="text-white">You are Offline</h2>
        </div>
      )}
    </div>
  );
};

const Jumbotron: NextPage<Props> = ({ jumbotron }) => {
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
        {jumbotron.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <CardJumbotron
                highlightText={item.highlightText}
                imageUrl={item.images?.data.attributes.url}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Jumbotron;
