import "tailwindcss/tailwind.css";
import "styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
