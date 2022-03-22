import React from "react";

const Navbar = () => {
  return (
    <header className="block fixed top-0 h-nav w-[100%] drop-shadow-sm bg-grey-6 ">
      <div className="container mx-[auto] flex py-[auto] h-[100%] text-primary-1 items-center justify-between">
        <div id="nav-logo" className=" text-[24px] font-[400]">
          Sedot Tinja
        </div>
        <div id="nav-search-input" className="">
          <input type="text" />
        </div>
        <nav className="flex flex-row space-x-7 text-[16px] text-grey-7 font-[500]">
          <ul className="active">
            <li>Store</li>
          </ul>
          <ul>
            <li>Wish List</li>
          </ul>
          <ul>
            <li>Basket</li>
          </ul>
          <ul>
            <li>Profile</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
