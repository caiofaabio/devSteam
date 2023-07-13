import Salecard from "@/components/cards/saleCard/salecard";
import Container from "@/components/container/container";
import Navbar from "@/components/navbar/navbar";
import Subtitle from "@/components/tipography/subtitle/subtitle";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta
          name="description"
          content="DevSteam: A sua loja online de games"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container>
        <div>
          <Subtitle>Promocoes</Subtitle>
          <div>
            <Salecard />
          </div>
        </div>
        <div>
          <Subtitle>Outros jogos</Subtitle>
        </div>
      </Container>
    </>
  );
}
