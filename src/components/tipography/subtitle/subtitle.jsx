import style from "./subtitle.module.css";

const Subtitle = ({ children }) => {
  return <h2 className={style.subtitle}>{children}</h2>;
};

export default Subtitle;
