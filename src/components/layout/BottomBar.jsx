import styles from "./layout.module.css";

function BottomBar({ children }) {
  return <div id={styles.bottomBar}>{children}</div>;
}

export default BottomBar;
