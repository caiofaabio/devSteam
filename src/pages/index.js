import Salecard from "@/components/cards/saleCard/salecard";
import Container from "@/components/container/container";
import Navbar from "@/components/navbar/navbar";
import Subtitle from "@/components/tipography/subtitle/subtitle";
import Head from "next/head";
import styles from "@/styles/index.module.css";
import GameCard from "@/components/cards/gameCard/gameCard";
import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState([]);

  const handleAddProduct = (novo) => {
    setCart([...cart, novo]);
  };

  const handleRemoveProduct = (posicao) => {
    setCart(cart.filter((obj, index) => index !== posicao));
  };

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
      <Navbar cart={cart} onRemove={handleRemoveProduct} />
      <Container>
        <div className={styles.session}>
          <Subtitle>Promocoes</Subtitle>
          <div className={styles.saleContainer}>
            <Salecard
              discount="100%"
              fullPrice="210,90"
              discountPrice="0"
              onAdd={() =>
                handleAddProduct({
                  name: "league-of-legends",
                  price: "0",
                  image: "league-of-legends.jpg",
                })
              }
            />
            <Salecard
              image={"dota-2.jpg"}
              onAdd={() =>
                handleAddProduct({
                  name: "dota-2",
                  price: "55.90",
                  image: "dota-2.jpg",
                })
              }
            />
            <Salecard
              image={"valorant.jpg"}
              onAdd={() =>
                handleAddProduct({
                  name: "valorant",
                  price: "55.90",
                  image: "valorant.jpg",
                })
              }
            />
          </div>
        </div>
        <div className={styles.session}>
          <Subtitle>Outros jogos</Subtitle>
          <div className={styles.gameContainer}>
            <GameCard
              onAdd={() =>
                handleAddProduct({
                  name: "counter-strike",
                  price: "99.9",
                  image: "counter-strike.jpg",
                })
              }
            />
          </div>
        </div>
      </Container>
    </>
  );
}
