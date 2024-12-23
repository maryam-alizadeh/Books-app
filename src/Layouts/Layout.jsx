import React from "react";
import styles from "./Layout.module.css";
import  {children} from "react";
function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p> simple project</p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Maryam with ❤️ </p>
      </footer>
    </>
  );
}

export default Layout;
