import Jumbotron, { CardJumbotronProps } from "components/cards/jumbotron";
import type { NextPage } from "next";
import { fetchAPI } from "lib/api";
import { HighlightCard } from "components";

interface Props {
  jumbotron: CardJumbotronProps[];
}

const Home: NextPage<Props> = ({ jumbotron }) => {
  return (
    <div className="text-3xl font-bold">
      <Jumbotron jumbotron={jumbotron} />

      <div className=" flex flex-col pt-[30px] text-black  place-content-center">
        <p>Week Highlight</p>
        <div className="w-[100%]">
          <HighlightCard />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const homepage = await fetchAPI("/homepage", {
    populate: {
      hero: "*",
      jumbotron: {
        populate: "*",
      },
      seo: {
        populate: "*",
      },
    },
  });
  return {
    props: {
      jumbotron: homepage.data.attributes.jumbotron,
      hero: homepage.data.attributes.hero,
      seo: homepage.data.attributes.seo,
    },
  };
};

export default Home;
