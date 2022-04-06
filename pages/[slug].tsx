import { useRouter } from "next/router";

const Category = () => {
  const router = useRouter();
  return <div className="font-bold">{router.asPath}</div>;
};

export default Category;
