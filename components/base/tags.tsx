import React from "react";

const Tags = () => {
  const dummy = Array.from(Array(6).keys());
  return (
    <section className="relative drop-shadow-sm w-[100%] lg:h-[50px] bg-white lg:p-[10px] fixed top-[50px] lg:top-nav">
      <div
        className="my-[auto] container mx-[auto] overflow-x-auto pb-[10px] scroll-smooth"
        id="tags"
      >
        <div className={`flex gap-8 ${dummy.length > 5 && "justify-between"}`}>
          {dummy.map((item, i) => {
            return (
              <ul key={i} className="flex-none">
                <li>New Arrival {item}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tags;
