import Link from "next/link";

const NotFound = () => {
  return (
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
  );
}

export default NotFound;