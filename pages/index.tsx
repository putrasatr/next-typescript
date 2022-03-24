import Jumbotron, { CardJumbotronProps } from "components/cards/jumbotron";
import type { NextPage } from "next";
import { fetchAPI } from "lib/api";
import Image from "next/image";
import { imageBaseUrl } from "config";
import { useOnline } from "hooks";

interface Props {
  jumbotron: CardJumbotronProps[];
  home: string;
}

const Home: NextPage<Props> = ({ home }) => {
  const isOnline = useOnline();
  return (
    <div className="text-3xl font-bold underline">
      <p>{isOnline === null ? "Load" : isOnline ? "" : "You are offline"}</p>
      <Image src={imageBaseUrl + home} alt="" width={100} height={400} />
      {/* <Jumbotron jumbotron={jumbotron} /> */}
      <iframe></iframe>
    </div>
  );
};

export const getStaticProps = async () => {
  const homepage = await fetchAPI("/home", {
    // populate: {
    //   hero: "*",
    //   jumbotron: {
    //     populate: "*",
    //   },
    //   seo: {
    //     populate: "*",
    //   },
    // },
    populate: {
      hero: {
        populate: "*",
      },
    },
  });
  const home = homepage.data.attributes.hero;
  const image = home.image.data.attributes.url;
  return {
    props: {
      home: image,
      // jumbotron: homepage.data.attributes.jumbotron,
      // hero: homepage.data.attributes.hero,
      // seo: homepage.data.attributes.seo,
    },
  };
};

export default Home;
