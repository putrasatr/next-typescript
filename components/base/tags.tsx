import Link from "next/link";
import React from "react";

const Tags = () => {
  const dummy = [
    { name: "New Arrival", href: "new-arrival" },
    { name: "T-Shirt", href: "tshirt" },
  ];
  return (
    <section className="drop-shadow-sm w-[100%] lg:h-[50px] bg-white lg:p-[10px] fixed top-[50px] lg:top-nav">
      <div
        className="my-[auto] container mx-[auto] overflow-x-auto pb-[10px] scroll-smooth"
        id="tags"
      >
        <div className={`flex gap-8 ${dummy.length > 5 && "justify-between"}`}>
          {dummy.map((item, i) => {
            return (
              <ul key={i} className="flex-none">
                <li>
                  <Link href={"/" + item.href}>{item.name}</Link>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tags;
