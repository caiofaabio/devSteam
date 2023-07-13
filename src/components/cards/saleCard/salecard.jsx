import React from "react";
import Image from "next/image";
import style from "./saleCard.module.css";
import Button from "@/components/forms/button/button";

const Salecard = () => {
  return (
    <div className={style.saleCard}>
      <Image src="/products/league-of-legends.jpg" width={250} height={300} />
      <div className={style.info}>
        <h3 className={style.title}>Oferta Exclusiva</h3>
        <div className={style.priceCard}>
          <div className={style.percent}>-20%</div>
          <div className={style.price}>
            <p className={style.fullPrice}>R$99,90</p>
            <h4 className={style.discountPrice}>R$89,90</h4>
          </div>
        </div>
        <Button>Adicionar ao carrinho</Button>
      </div>
    </div>
  );
};

export default Salecard;
