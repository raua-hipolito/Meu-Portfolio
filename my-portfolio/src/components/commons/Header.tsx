import Image from "next/image"
import Link from "next/link"
import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: '500',
});

export const Header = () => {
    return(
        <header className={roboto.className}>
        <Link href="/">
            <Image src="/favicon.ico" width={55} height={55} alt="icone da letra H" />
        </Link>
        <nav>
            <Link href="/">Sobre mim</Link>
            {/* <Link href="/portfolio">Portfolio</Link> */}
            <Link href="/contatos">Entre em contatos</Link>
        </nav>
     </header>
    )
}
