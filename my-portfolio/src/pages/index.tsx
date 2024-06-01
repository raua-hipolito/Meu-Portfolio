import Head from "next/head";
import { AboutMe } from "@/components/Home/AboutMe";

const Home = () => {
  return (
    <>
    <Head>
      <title>Sobre mim | Hipólito</title>
      <meta name="description" content="Sou um desenvolvedor full-stack apaixonado por conhecimento"/>
    </Head>
    <div>
      <AboutMe />
    </div>
    </>

  );
}

export default Home;