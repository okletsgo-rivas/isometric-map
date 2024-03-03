import styles from "./layout.module.css";

function TopBar({ children }) {
  return <div id={styles.topBar}>{children}</div>;
}

export default TopBar;
