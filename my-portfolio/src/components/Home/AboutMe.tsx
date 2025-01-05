import Image from 'next/image';
import Link from 'next/link';
import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: '500',
});


export const AboutMe = () => {
    return(
      <main className="flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowerap xl:justify-between ">
             <div className="text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
            <h1 className="text-3xl sm:text-7xl xl:leading-[80px]">Prazer, me chamo&nbsp;
             <span className="font-bold">Rauã Hipólito</span>
            </h1>
           
            <div className="mb-12">
                <h2 className={`${roboto.className} mb-12`}>Sou um desenvolvedor full-stack apaixonado por conhecimento e desafios</h2>
                <Link href="/contatos" className="p-3 bg-h-gray-500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80">Converse comigo!</Link>
            </div>


            <ul className="flex flex-wrap justify-center  xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl">

                <li style={{ backgroundColor: '#2F74C0', color: '#FFFFFF' }} className="w-fit p-2 rounded-md">    
                    TypeScript
                </li>
                <li style={{ backgroundColor: '#6BDDFA', color: '#000000' }} className="w-fit p-2 rounded-md">
                    React
                </li>
                <li style={{ backgroundColor: '#EFD81D', color: '#000000' }} className="w-fit p-2 rounded-md">
                    JavaScript
                </li>
                <li style={{ backgroundColor: '#000000', color: '#FFFFFF' }} className="w-fit p-2 rounded-md">
                    NextJS
                </li>
                <li style={{ backgroundColor: '#334155', color: '#FFFFFF' }} className="w-fit p-2 rounded-md">
                    GitHub
                </li>               
                 <li style={{ backgroundColor: '#ea580c', color: '#000000' }} className="w-fit p-2 rounded-md">
                    HTML5
                </li>
                <li style={{ backgroundColor: '#0ea5e9', color: 'white' }} className="w-fit p-2 rounded-md">
                    CSS
                </li>
                <li style={{ backgroundColor: '#facc15', color: '#1d4ed8' }} className="w-fit p-2 rounded-md">
                    Python
                </li>
            </ul>

        </div>   
        <div className="relative">
            <Image src="https://avatars.githubusercontent.com/u/124948183?v=4" 
            alt="Foto de perfil de Rauã. Homem determinado, cabelos preto e um charme enorme"
            width={500}
            height={500}
            unoptimized
            className="rounded-full"
           />
            <p className="p-4 w-fit text-base leading-tight bg-h-blue-500 rounded-xl text-black absolute -bottom-[1.25rem] sm:bottom-3">
                <span className="text-2xl">+2</span>
                <br />
                anos de experiência
            </p>
        </div>
      </main>

    )
}
