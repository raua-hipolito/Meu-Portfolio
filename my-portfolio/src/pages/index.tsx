import Link from "next/link";

const Home = () => {
  return (
    <main>
      <h1>Hello World com Next!</h1>
      <Link href="/contatos">Ir para a página contatos</Link>
    </main>
  );
}

export default Home;