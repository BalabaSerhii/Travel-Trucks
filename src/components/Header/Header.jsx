import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import IconComponent from "../IconComponent/IconComponent";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/" className={styles.logoLink}>
          <h1>
          <IconComponent id="Logo" height="16" width="136" />{" "}
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
