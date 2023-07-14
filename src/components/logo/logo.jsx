import Image from "next/image";

import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image src="/logo.svg" width={60} height={60} />
      <h1 className={styles.name}>DevStem</h1>
    </div>
  );
};

export default Logo;
