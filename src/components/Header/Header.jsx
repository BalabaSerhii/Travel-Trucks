import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/" className={styles.logoLink}>
          <h1>
            Travel<span>Trucks</span>
          </h1>
        </NavLink>
      </div>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${styles["nav-link"]} ${styles.active}`
              : styles["nav-link"]
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            isActive
              ? `${styles["nav-link"]} ${styles.active}`
              : styles["nav-link"]
          }
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
