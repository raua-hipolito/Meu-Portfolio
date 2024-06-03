import Head from "next/head";
import { AboutMe } from "@/components/Home/AboutMe";
import { Projects } from "@/components/Home/Projects";    

const Home = () => {
  const projects = [
    {
      slug: 'project-1',
      name: 'Projeto 1',
      image: {
        url: 'https://i.imgur.com/7WjvXt1.png',
        alt: 'Imagem do projeto 1',
      },
    },
    {
      slug: 'project-2',
      name: 'Projeto 2',
      image: {
        url: 'https://i.imgur.com/7WjvXt1.png',
        alt: 'Imagem do projeto 2',
      },
    },
    {
      slug: 'project-3',
      name: 'Projeto 3',
      image: {
        url: 'https://i.imgur.com/7WjvXt1.png',
        alt: 'Imagem do projeto 3',
      },
    },
    {
      slug: 'project-4',
      name: 'Projeto 4',
      image: {
        url: 'https://i.imgur.com/7WjvXt1.png',
        alt: 'Imagem do projeto 4',
      },
    },
  ]

  return (
    <>
    <Head>
      <title>Portfolio | Hipólito</title>
      <meta name="description" content="Sou um desenvolvedor full-stack apaixonado por conhecimento"/>
    </Head>
    <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28">
      <AboutMe />
      <Projects projects={projects}/>
    </div>
    </>

  );
}

export default Home;


// Voce pode utilizar o imgur para hospedar as imagens e colocar na url de cada projeto da const projects