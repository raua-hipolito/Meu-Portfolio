import Link from "next/link"

export const Header = () => {
    return(
        <header>
        <Link href="/">
            <img src="/favicon.ico" alt="icone da letra H" />
        </Link>
        <nav>
            <Link href="/">Sobre mim</Link>
            {/* <Link href="/portfolio">Portfolio</Link> */}
            <Link href="/contatos">Entre em contatos</Link>
        </nav>
     </header>
    )
}
