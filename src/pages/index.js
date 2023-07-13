import Salecard from "@/components/cards/saleCard/salecard";
import Container from "@/components/container/container";
import Navbar from "@/components/navbar/navbar";
import Subtitle from "@/components/tipography/subtitle/subtitle";
import Head from "next/head";
import styles from "@/styles/index.module.css";

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
        <div className={styles.session}>
          <Subtitle>Promocoes</Subtitle>
          <div className={styles.saleContainer}>
            <Salecard />
            <Salecard />
            <Salecard />
          </div>
        </div>
        <div className={styles.session}>
          <Subtitle>Outros jogos</Subtitle>
        </div>
      </Container>
    </>
  );
}
