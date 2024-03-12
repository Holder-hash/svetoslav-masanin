import styles from "./HomePage.module.scss";
import asideImg from "../../assets/images/aside-img.jpg";
import vkIcon from "../../assets/images/icons/vk-icon.png";
import tgIcon from "../../assets/images/icons/tg-icon.png";
import dsIcon from "../../assets/images/icons/ds-icon.png";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.overview}>
        <div className={styles.overviewTitle}>
          <h1>
            Светослав
            <br />
            Масанин
          </h1>
          <p>Преподователь специальных дисцеплин</p>
        </div>

        <div className={styles.overviewLinks}>
          <img
            src={vkIcon}
            alt="vk"
            onClick={() => window.open("https://vk.com/svetoskav/", "_blank")}
          />
          <img
            src={tgIcon}
            alt="tg"
            onClick={() =>
              window.open("https://web.telegram.org/a/#5111001045", "_blank")
            }
          />
          <img src={dsIcon} alt="ds" />
        </div>
      </div>

      <div className={styles.content}>
        <div>
          <p>Подготовка к экзаменам</p>
          <p>Самоконтроль после прочтения лекции</p>
        </div>

        <aside className={styles.aside}>
          <h2>Ознакомьтесь с лекционными материалами!</h2>
          <img src={asideImg} alt="Врачебная лекция" />
          <ul>
            <li>Учебные материалы по специальности сетринцкое дело</li>
            <li>Тестирование в конце каждой главы</li>
            {/* <li>Альтернативый видео материал</li> */}
          </ul>
          <button onClick={() => navigate("lectures/")}>Начать учится!</button>
        </aside>
      </div>
    </>
  );
}

export default HomePage;
