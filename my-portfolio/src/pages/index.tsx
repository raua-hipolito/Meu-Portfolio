import Head from "next/head";
import { AboutMe } from "@/components/Home/AboutMe";
import { Projects } from "@/components/Home/Projects";    
import Footer from "@/components/commons/Footer/Footer.";


const Home = () => {
  const projects = [
    {
      name: 'Calculadora Freelancer',
      image: {
        url: 'https://i.imgur.com/88vqYkJ.png',
        alt: 'Calculadora freelancer',
      },
      projectsLink: 'https://calculadora-freelancer-raua.netlify.app/'
    },
    {
      name: 'Solar-System',
      image: {
        url: 'https://i.imgur.com/15Uo4IP.jpeg',
        alt: 'Imagem do projeto 2',
      },
      projectsLink: 'https://solar-system-137eb2.netlify.app/'
    },
    {
      name: 'Projeto 3',
      image: {
        url: 'https://i.imgur.com/7WjvXt1.png',
        alt: 'Imagem do projeto 3',
      },
      projectsLink: 'https://calculadora-freelancer-raua.netlify.app/'
    },
    {
      name: 'Projeto 4',
      image: {
        url: 'https://i.imgur.com/7WjvXt1.png',
        alt: 'Imagem do projeto 4',
      },
      projectsLink: 'https://calculadora-freelancer-raua.netlify.app/'
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
      <Footer />
    </>
  );
}

export default Home;


// Voce pode utilizar o imgur para hospedar as imagens e colocar na url de cada projeto da const projects