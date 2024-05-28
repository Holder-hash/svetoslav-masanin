import styles from "./Header.module.scss";
import logoImg from "../../../assets/images/logo.jpg";
import { GrDocumentText } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { LuLightbulbOff } from "react-icons/lu";
import { IoMdPerson } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import CustomModal from "../../ui/CustomModal/CustomModal";
import { useState, useEffect } from "react";

function Header({ totalUniqueVisitors }) {
  const navigate = useNavigate();
  const [modalInfoIsOpen, setModalInfoIsOpen] = useState(false);

  return (
    <>
      <CustomModal
        isOpen={modalInfoIsOpen}
        onClose={() => setModalInfoIsOpen(false)}
      >
        <h2>О себе</h2>
        <br />
        <p style={{ fontWeight: "bold" }}>
          Масанин Светослав Сергеевич (31 год)
        </p>
        <br />
        <p>
          <strong>Образование:</strong> Московский «Медицинский колледж № 8»
        </p>
        <p>Российский Государственный Социальный университет.</p>
        <br />
        <p>
          <strong>Специальность:</strong>
          «Академический медицинский брат. Преподаватель».
        </p>
        <p>
          Дополнительное обучение на базе МГМСУ им. А.И. Евдокимова по
          специализации «Рентгенолаборант».
        </p>
        <br />
        <p>
          <strong>Место работы и должность</strong>: Преподаватель специальных
          дисциплин - ГБПОУ МО «Колледж «Подмосковье» - преподаватель
          специальных дисциплин
        </p>
      </CustomModal>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <img src={logoImg} alt='ГБПОУ Колледж "Подмосковье"' />
          </div>

          <nav className={styles.nav}>
            <ul>
              <li onClick={() => navigate("/")}>
                <FaHome className={styles.navIcon} />
                Главная
              </li>
              <li onClick={() => navigate("lectures/")}>
                <GrDocumentText className={styles.navIcon} />
                Лекционные материалы
              </li>
              <li onClick={() => setModalInfoIsOpen(true)}>
                <IoMdPerson className={styles.navIcon} />О себе
              </li>
            </ul>
          </nav>

          <div className={styles.themeIcon}>
            {/* <LuLightbulbOff /> */}
            <p style={{ fontSize: "16px", fontWeight: "600" }}>
              Посетителей сайта: {totalUniqueVisitors}
            </p>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
