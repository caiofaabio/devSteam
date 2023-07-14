import React from "react";
import Image from "next/image";
import style from "./gameCard.module.css";
import Button from "@/components/forms/button/button";

const GameCard = ({ onAdd }) => {
  return (
    <div className={style.gameCard}>
      <Image
        className={style.image}
        src="/products/counter-strike.jpg"
        width={300}
        height={145}
        alt="cs"
      />
      <div className={style.info}>
        <h3 className={style.title}>Counter Strike</h3>
        <p className={style.category}>Ação, estratégia, multijogador.</p>
        <div className={style.pricing}>
          <h2 className={style.price}>R$99,90</h2>
          <Button onClick={onAdd}>Adicionar ao Carrinho</Button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
