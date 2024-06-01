import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
    <Head>
      <title>404 - Página não encontrada</title>
    </Head>
      <div>
         <h1>404 - Page Not Found</h1>
        <div>
         <p>Opa! Não conseguimos encontrar essa página!</p>
          <span>
            Clique no botão abaixo para voltar para a página inicial.
          </span>
        </div>
          <Link href="./">Ir para a página inicial</Link>
      </div>
    </>

  );
}

export default NotFound;