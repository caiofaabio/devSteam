import CartOption from "../cartOption/cartOption";
import styles from "./cartMenu.module.css";

export default function CartMenu() {
  return (
    <div className={styles.menu}>
      <div className={styles.options}>
        <CartOption />
        <CartOption />
        <CartOption />
      </div>
      <div className={styles.priceline}>
        <h2>Total</h2>
        <h2 className={styles.price}>R$ 999,89</h2>
      </div>
    </div>
  );
}