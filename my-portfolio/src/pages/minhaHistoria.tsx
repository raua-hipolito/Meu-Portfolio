import Footer from "@/components/commons/Footer/Footer.";
import Head from "next/head";
import Image from "next/image";
import Video from "@/components/meuVideo/Video";

function minhaHistoria() {
    return (
    <div className="container mx-auto p-4 ">
        <Head>
            <title>Minha história | Hipólito</title>
        </Head>
        <Video />
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[450px]">
        <Image
          src="/certificado.png" // Substitua pelo caminho da sua imagem
          //centraliza a imagem
          layout="fill"
          alt="Descrição da imagem"
          objectFit="contain" // Ajuste para 'contain' se quiser que a imagem seja totalmente visível
          //arredonda a imagem
          className="rounded-lg shadow-lg"
        />
      </div>
      <h2 className="text-2xl font-bold mb-4 px-5 py-4">
        Sou formado em Desenvolvimento Full-Stack ,um curso onde pude aprender tecnológias esseciais pro mercado de trabalho.
      </h2>

      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[450px]">
        <Image
          src="/certificado.png" // Substitua pelo caminho da sua imagem
          //centraliza a imagem
          layout="fill"
          alt="Descrição da imagem"
          objectFit="contain" // Ajuste para 'contain' se quiser que a imagem seja totalmente visível
          //arredonda a imagem
          className="rounded-lg shadow-lg"
        />
      </div>
      <h2 className="text-2xl font-bold mb-4 px-5 py-4">
        Sou formado em Desenvolvimento Full-Stack ,um curso onde pude aprender tecnológias esseciais pro mercado de trabalho.
      </h2>
      <Footer /> 
    </div>
    )
}

export default minhaHistoria;
