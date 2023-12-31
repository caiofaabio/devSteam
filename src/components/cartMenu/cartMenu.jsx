import CartOption from "../cartOption/cartOption";
import styles from "./cartMenu.module.css";

export default function CartMenu({ cart, onRemove }) {
  return (
    <div className={styles.menu}>
      <div className={styles.options}>
        {cart.length === 0 && <p>Nenhum produto no seu carrinho.</p>}

        {cart.map((cartInfo, index) => (
          <CartOption
            image={cartInfo.image}
            title={cartInfo.name}
            price={cartInfo.price}
            onRemove={() => onRemove(index)}
            key={`cart-info-${index}`}
          />
        ))}
      </div>
      <div className={styles.priceline}>
        <h2>Total</h2>
        <h2 className={styles.price}>
          R${" "}
          {cart
            .reduce((prev, current) => prev + parseFloat(current.price), 0)
            .toFixed(2)}
        </h2>
      </div>
    </div>
  );
}
