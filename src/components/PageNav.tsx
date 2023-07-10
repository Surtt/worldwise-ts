import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo.tsx";

type Nav = {
  to: string;
  name: string;
};

const navData: Nav[] = [
  {
    to: "/pricing",
    name: "Pricing",
  },
  {
    to: "/product",
    name: "Product",
  },
  {
    to: "/login",
    name: "Login",
  },
];

export function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        {navData.map(({ to, name }) => (
          <li key={name}>
            <NavLink to={to} className={to === "/login" ? styles.ctaLink : ""}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
