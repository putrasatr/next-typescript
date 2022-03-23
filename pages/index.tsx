import type { NextPage } from "next";

const Home: NextPage = () => {
  const dummy = Array.from(Array(6).keys());

  return <div className="text-3xl font-bold underline">Home</div>;
};

export default Home;
