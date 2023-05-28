import styles from "../styles/components/AppLayout.module.css";

const AppLayout = ({ children }) => {
  return <main className={styles.appContainer}>{children}</main>;
};

export default AppLayout;
