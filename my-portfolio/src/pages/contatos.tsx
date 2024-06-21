import { CopyButton } from "@/components/commons/CopyButton";
import Head from "next/head";

const Contatos = () => {
    return (
        <>
        <Head>
            <title>Contatos | Hipólito</title>
        </Head>
        <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
            <h1 className="text-5xl md:text-7xl font-bold text-center">Contatos</h1>
            <ul className="table mx-auto space-y-6 md:space-y-8">
                <li className="md:text-xl">
                    <span className="font-bold">E-mail</span>
                  <div className="flex gap-1 md:gap-3 items-center">
                    <a href="mailto:rauavasconcelos22@gmail.com" className="text-sm  md:text-lg  text-slate-300 underline truencate">Rauã-rauavasconcelos22@gmail.com</a>
                    <CopyButton textToCopy="rauavasconcelos22@gmail.com" />
                  </div>
                </li>
               <li className="md:text-xl">
                   <span className="font-bold">Linkedin</span>
                  <div className="flex gap-1 md:gap-3 items-center">
                    <a href="https://www.linkedin.com/in/devrauahipolito/"
                    className="text-sm  md:text-lg text-slate-300 underline truencate">https://www.linkedin. com/in/devrauahipolito/</a>
                  </div>
                </li>
               <li className="md:text-xl">
                   <span className="font-bold">GitHub</span>
                  <div className="flex gap-1 md:gap-3 items-center">
                    <a href="https://github.com/raua-hipolito"
                    className="text-sm  md:text-lg text-slate-300 underline truencate">https://github.com/raua-hipolito </a>
                  </div>
                </li>
               <li className="md:text-xl">
                   <span className="font-bold">Instagram</span>
                  <div className="flex gap-1 md:gap-3 items-center">
                    <a href="https://www.instagram.com/__rhipolito/"
                    className="text-sm  md:text-lg text-slate-300 underline truencate">https://www.instagram.com/ __rhipolito/</a>
                  </div>
                </li>
            </ul>
        </div>
        </>
 
    );
}

export default Contatos;