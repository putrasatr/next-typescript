import type { NextPage } from "next";
import React from "react";
import { Navbar } from "components";

const Layout: NextPage = ({ children }) => {
  return (
    <main>
      <Navbar />
      <section className="mt-nav container mx-auto">{children}</section>
    </main>
  );
};

export default Layout;
