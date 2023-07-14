import React from "react";
import Image from "next/image";
import style from "./saleCard.module.css";
import Button from "@/components/forms/button/button";

const Salecard = ({ image, discount, fullPrice, discountPrice, onAdd }) => {
  return (
    <div className={style.saleCard}>
      <Image src={`/products/${image}`} alt={image} width={250} height={300} />
      <div className={style.info}>
        <h3 className={style.title}>Oferta Exclusiva</h3>
        <div className={style.priceCard}>
          <div className={style.percent}>-{discount}</div>
          <div className={style.price}>
            <p className={style.fullPrice}>R${fullPrice}</p>
            <h4 className={style.discountPrice}>R${discountPrice}</h4>
          </div>
        </div>
        <Button fullWidth onClick={onAdd}>
          Adicionar ao carrinho
        </Button>
      </div>
    </div>
  );
};

export default Salecard;

Salecard.defaultProps = {
  image: "league-of-legends.jpg",
  discount: "90%",
  fullPrice: "199,90",
  discountPrice: "55,90",
};
