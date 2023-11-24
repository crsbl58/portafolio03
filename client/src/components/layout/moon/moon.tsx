import svgIllustrations from "@/svg/code";
import styles from "./moon.module.scss";

const Moon = () => {
  return <div className={styles.container}>{svgIllustrations().moon}</div>;
};

export default Moon;
