import Head from "next/head";
import Image from "next/image";
import Footer from "@/components/commons/Footer/Footer.";

function MinhasCertificacoes() {
    return (
        <div className="container mx-auto p-4 ">
            <Head>
                <title>Minha história | Hipólito</title>
            </Head>
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[450px]">
            <Image
              src="/certificado.png" // Substitua pelo caminho da sua imagem
              //centraliza a imagem
              layout="fill"
              alt="Descrição da imagem"
              objectFit="contain" // Ajuste para 'contain' se quiser que a imagem seja totalmente visível
              //arredonda a imagem
              className="rounded-lg shadow-lg py-4"
            />
          </div>
    
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[450px] ">
            <Image
              src="/certificados/Front.png" // Substitua pelo caminho da sua imagem
              //centraliza a imagem
              layout="fill"
              alt="Descrição da imagem"
              objectFit="contain" // Ajuste para 'contain' se quiser que a imagem seja totalmente visível
              //arredonda a imagem
              className="rounded-lg shadow-lg py-4"
            />
          </div>

          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[450px] ">
            <Image
              src="/certificados/Back.png" // Substitua pelo caminho da sua imagem
              //centraliza a imagem
              layout="fill"
              alt="Descrição da imagem"
              objectFit="contain" // Ajuste para 'contain' se quiser que a imagem seja totalmente visível
              //arredonda a imagem
              className="rounded-lg shadow-lg py-4"
            />
          </div>
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[450px] ">
            <Image
              src="/certificados/Cs.png" // Substitua pelo caminho da sua imagem
              //centraliza a imagem
              layout="fill"
              alt="Descrição da imagem"
              objectFit="contain" // Ajuste para 'contain' se quiser que a imagem seja totalmente visível
              //arredonda a imagem
              className="rounded-lg shadow-lg py-4"
            />
          </div>
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[450px] ">
            <Image
              src="/certificados/Python.png" // Substitua pelo caminho da sua imagem
              //centraliza a imagem
              layout="fill"
              alt="Descrição da imagem"
              objectFit="contain" // Ajuste para 'contain' se quiser que a imagem seja totalmente visível
              //arredonda a imagem
              className="rounded-lg shadow-lg px-5 py-4"
            />
          </div>
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[450px] ">
            <Image
              src="/certificados/Fundamentos.png" // Substitua pelo caminho da sua imagem
              //centraliza a imagem
              layout="fill"
              alt="Descrição da imagem"
              objectFit="contain" // Ajuste para 'contain' se quiser que a imagem seja totalmente visível
              //arredonda a imagem
              className="rounded-lg shadow-lg px-5 py-4"
            />
          </div>
          <Footer /> 
        </div>
        )
    }

export default MinhasCertificacoes;