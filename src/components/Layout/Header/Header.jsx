import styles from "./Header.module.scss";
import logoImg from "../../../assets/images/logo.jpg";
import { GrDocumentText } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { LuLightbulbOff } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logo}>
          <img src={logoImg} alt='ГБПОУ Колледж "Подмосковье"' />
        </div>

        <nav className={styles.nav}>
          <ul>
            <li onClick={() => navigate("/svetoslav-masanin/")}>
              <FaHome className={styles.navIcon} />
              Главная
            </li>
            <li onClick={() => navigate("lectures/")}>
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
