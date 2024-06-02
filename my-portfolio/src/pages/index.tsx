import Head from "next/head";
import { AboutMe } from "@/components/Home/AboutMe";

const Home = () => {
  return (
    <>
    <Head>
      <title>Sobre mim | Hipólito</title>
      <meta name="description" content="Sou um desenvolvedor full-stack apaixonado por conhecimento"/>
    </Head>
    <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28">
      <AboutMe />
    </div>
    </>

  );
}

export default Home;