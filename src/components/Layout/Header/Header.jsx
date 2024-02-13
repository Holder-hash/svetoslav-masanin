import styles from "./Header.module.scss";
import logoImg from "../../../assets/images/logo.jpg";
import { GrDocumentText } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { LuLightbulbOff } from "react-icons/lu";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logo}>
          <img src={logoImg} alt='ГБПОУ Колледж "Подмосковье"' />
        </div>

        <nav className={styles.nav}>
          <ul>
            <li>
              <FaHome className={styles.navIcon} />
              Главная
            </li>
            <li>
              <GrDocumentText className={styles.navIcon} />
              Лекционные материалы
            </li>
          </ul>
        </nav>

        <div className={styles.themeIcon}>
          <LuLightbulbOff />
        </div>
      </div>
    </header>
  );
}

export default Header;
