import Head from "next/head";

const Contatos = () => {
    return (
        <>
        <Head>
            <title>Contatos | Hipólito</title>
        </Head>
        <div>
            <h1>Contatos</h1>
            <ul>
                <li>
                    <span>E-mail</span>
                  <div>
                    <a href="mailto:rauavasconcelos22@gmail.com">Rauã-rauavasconcelos22@gmail.com</a>
                  </div>
                </li>
                <li>
                    <span>Linkedin</span>
                  <div>
                    <a href="https://www.linkedin.com/in/devrauahipolito/">https://www.linkedin.com/in/devrauahipolito/</a>
                  </div>
                </li>
                <li>
                    <span>GitHub</span>
                  <div>
                    <a href="https://github.com/raua-hipolito">https://github.com/raua-hipolito</a>
                  </div>
                </li>
                <li>
                    <span>Instagram</span>
                  <div>
                    <a href="https://www.instagram.com/__rhipolito/">https://www.instagram.com/__rhipolito/</a>
                  </div>
                </li>
            </ul>
        </div> 
        </>
 
    );
}

export default Contatos;