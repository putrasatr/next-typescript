import Image from "next/image";
import React from "react";

const HighlightCard = () => {
  const dummy = ["exclusive.png", "styles.png", "bag.png", "cotton.png"];
  let n = 1;
  return (
    <div className="grid grid-cols-3 gap-5 w-[80%] mx-[auto] h-[700px] my-[40px] relative">
      {dummy.map((item, index) => {
        const isEven = (index + 1) % 2 === 0;
        if (isEven) n++;
        const isSmall = n % 2 === 0;
        return (
          <div
            key={index}
            className={
              isSmall
                ? "bg-primary"
                : "col-span-2" +
                  " h-[328px] bg-secondary  overflow-hidden w-[100%]"
            }
          >
            <div className="relative">
              <Image
                src={"/images/assets/" + item}
                alt="highlight"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="fill"
              />
              <div
                className={
                  "rounded-[15px] absolute right-0 left-0 top-0 flex  justify-center text-white p-5"
                }
              >
                <div className="mx-auto max-w-[90%]">
                  <p className="text-[46px] font-bold break-words">
                    {item}lkadmsflkanfk
                  </p>
                </div>
              </div>
              <div
                className={
                  "absolute h-[100px] text-white" +
                  (isSmall ? " left-5 bottom-5" : "top-0")
                }
                style={{ background: "rgba(0,0,0,0.3)" }}
              >
                <div className="mx-auto max-w-[90%]">
                  <p className="text-[16px] font-bold break-words">
                    {item}lkadmsflkanfk
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HighlightCard;
