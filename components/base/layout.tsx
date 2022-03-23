import type { NextPage } from "next";
import React from "react";
import { Navbar } from "components";
import Tags from "./tags";

const Layout: NextPage = ({ children }) => {
  return (
    <main>
      <Navbar />
      <Tags />
      <section className="mt-[88px] container mx-auto">{children}</section>
    </main>
  );
};

export default Layout;
