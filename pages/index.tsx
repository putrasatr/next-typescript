import Jumbotron from "components/cards/jumbotron";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="text-3xl font-bold underline">
      <Jumbotron />
    </div>
  );
};

export default Home;
