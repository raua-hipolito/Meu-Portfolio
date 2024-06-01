import Link from 'next/link';

export const AboutMe = () => {
    return(
      <main>
             <div>
            <h1>Prazer, sou &nbsp;</h1>
            <span>Rauã Hipólito</span>
            <div>
                <h2>Sou um desenvolvedor full-stack apaixonado por conhecimento</h2>
                <Link href="/contatos">Converse comigo!</Link>
            </div>
            <ul>
                <li style={{ backgroundColor: '#2F74C0', color: '#FFFFFF' }}>TypeScript</li>
                <li style={{ backgroundColor: '#6BDDFA', color: '#000000' }}>React</li>
                <li style={{ backgroundColor: '#EFD81D', color: '#000000' }}>JavaScript</li>
                <li style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>NextJS</li>
            </ul>
        </div>   
        <div>
            <img src="https://avatars.githubusercontent.com/u/124948183?v=4" alt="Foto de perfil de Rauã. Homem determinado, cabelos preto e um charme enorme" />
            <p>
                <span>1+</span>
                <br />
                anos de experiência
            </p>
        </div>
      </main>

    )
}
