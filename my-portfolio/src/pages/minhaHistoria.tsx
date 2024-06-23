import Footer from "@/components/commons/Footer/Footer.";
import Head from "next/head";
import Video from "@/components/meuVideo/Video";
import Image from "next/image";

function minhaHistoria() {
    return (
    <div className="container mx-auto p-4 ">
        <Head>
            <title>Minha história | Hipólito</title>
        </Head>
        <Video />
        <p className="font-mono text-justify text-2xl tracking-tight md:tracking-normal md:text-3xl lg:text-4xl">
        Olá tudo bem? Me chamo Rauã Hipólito!
        <br />
        <br />
         Atualmente a tecnologia se faz totalmente presente na minha vida, sempre fui muito curioso em buscar desafios para o meu conhecimento profissional como desenvolvedor, gosto de focar em assuntos relevantes que vão me levar a etapas factíveis em minha vida.
        <br />
        <br />
         Me formei na Trybe onde aprendi os principais módulos divididos em Fundamentos, Front-End, Back-End, Ciências da Computação e Eletivas na linguagem Python. Hoje estou cursando Análise e Desenvolvimento de sistemas na Unama.
        <br />
        <br />
        Tenho experiência em trabalho em equipe envolvendo prática com Soft Skills como organização (Trello etc.) e comunicação (síncrona e assíncrona). Já na pratica em Hard Skills minha experiência está adentrada a projetos onde utilizei as seguintes tecnologias Git, GitHub, HTML, CSS, JavaScript, Python, TypeScript, React.
        <br />
        <br />
        </p>
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[450px] ">
            <Image
              src="/you.jpg" // Substitua pelo caminho da sua imagem
              //centraliza a imagem
              layout="fill"
              alt="Descrição da imagem"
              objectFit="contain" // Ajuste para 'contain' se quiser que a imagem seja totalmente visível
              //arredonda a imagem
              className="rounded-lg shadow-lg py-4"
            />
          </div>
          <p className="font-mono text-justify text-2xl tracking-tight md:tracking-normal md:text-3xl lg:text-4xl">
            <br />
          Sou apaixonado por tecnologia, buscando constantemente aprender e crescer profissionalmente. Estou aberto a novas oportunidades e colaborações que me permitam contribuir com minha experiência e habilidades. Vamos conectar e explorar possíveis sinergias! 🚀
          </p>
      <Footer /> 
    </div>
    )
}

export default minhaHistoria;
