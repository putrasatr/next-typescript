import React from "react";

const HighlightCard = () => {
  const dummy = Array.from(Array(4).keys());
  let n = 1;
  return (
    <div className="flex flex-col gap-10 lg:gap-16">
      {dummy.map((item, index) => {
        return (
          <div
            key={index}
            className="flex lg:flex-row flex-col items-center gap-5 lg:gap-16"
          >
            <div
              className={`lg:w-6/12 ${
                index && index % 2 === 0
                  ? "bg-red-300 order-1"
                  : "bg-white order-2"
              }`}
            >
              {item}
            </div>
            <div
              className={`lg:w-6/12 ${
                index && index % 2 === 0
                  ? "bg-white order-2"
                  : "bg-red-300 order-1"
              }`}
            >
              <h2 className="text-xl lg:text-4xl font-semibold mb-5">{item}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HighlightCard;
