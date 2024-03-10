import styles from "./HomePage.module.scss";
import asideImg from "../../assets/images/aside-img.jpg";
import vkIcon from "../../assets/images/icons/vk-icon.png";
import tgIcon from "../../assets/images/icons/tg-icon.png";
import dsIcon from "../../assets/images/icons/ds-icon.png";
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/images/avatar.jpg";

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
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "14pt" }}
          >
            <span style={{ fontFamily: '"Times New Roman"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "right",
              fontSize: "14pt",
            }}
          >
            <img
              src={avatar}
              width={232}
              height={284}
              alt="ФОто для  партфолио.jpg"
              style={{
                marginRight: "9pt",
                marginLeft: "9pt",
                AwLeftPos: "257.9pt",
                AwRelHpos: "column",
                AwRelVpos: "paragraph",
                AwTopPos: "-0.1pt",
                AwWrapType: "square",
                float: "left",
              }}
            />
          </p>
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "14pt" }}
          >
            <span
              style={{ fontFamily: '"Times New Roman"', fontWeight: "bold" }}
            >
              1.Общие сведения
            </span>
          </p>
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "14pt" }}
          >
            <span
              style={{
                fontFamily: '"Times New Roman"',
                textDecoration: "underline",
              }}
            >
              Ф.И.О
            </span>
          </p>
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "14pt" }}
          >
            <span style={{ fontFamily: '"Times New Roman"' }}>Масанин</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              Светослав Сергеевич
            </span>
          </p>
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "14pt" }}
          >
            <span
              style={{
                fontFamily: '"Times New Roman"',
                textDecoration: "underline",
              }}
            >
              Дата рождения,
            </span>
          </p>
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "14pt" }}
          >
            <span style={{ fontFamily: '"Times New Roman"' }}>11 февраля</span>
            <span style={{ fontFamily: '"Times New Roman"' }}> 1993 (31</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>)</span>
          </p>
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "14pt" }}
          >
            <span
              style={{ fontFamily: '"Times New Roman"', fontWeight: "bold" }}
            >
              2
            </span>
            <span
              style={{ fontFamily: '"Times New Roman"', fontWeight: "bold" }}
            >
              . Работа
            </span>
          </p>
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "14pt" }}
          >
            <span
              style={{
                fontFamily: '"Times New Roman"',
                textDecoration: "underline",
              }}
            >
              Занимаемая должность
            </span>
          </p>
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "14pt" }}
          >
            <span style={{ fontFamily: '"Times New Roman"' }}>
              Основная работа в ГКБ
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              Кончаловского
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}> (</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              г.Зеленоград
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>)-</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              ренгенолаборант
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>. </span>
            <span
              style={{
                fontFamily: '"Times New Roman"',
                textDecoration: "underline",
              }}
            >
              Уверенно работаю на класси
            </span>
            <span
              style={{
                fontFamily: '"Times New Roman"',
                textDecoration: "underline",
              }}
            >
              ческом
            </span>
            <span
              style={{
                fontFamily: '"Times New Roman"',
                textDecoration: "underline",
              }}
            >
              рентгене и КТ.
            </span>
          </p>
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "14pt" }}
          >
            <span style={{ fontFamily: '"Times New Roman"' }}>
              Преподаватель специальных дисциплин
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}> </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>Колледж </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>подмосковье</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              (совместитель
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>)</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>. </span>
            <span
              style={{
                fontFamily: '"Times New Roman"',
                textDecoration: "underline",
              }}
            >
              Преподаваемые
            </span>
            <span
              style={{
                fontFamily: '"Times New Roman"',
                textDecoration: "underline",
              }}
            >
              дисциплины
            </span>
            <span
              style={{
                fontFamily: '"Times New Roman"',
                textDecoration: "underline",
              }}
            >
              .
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}> Акушерство</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              и гинекология, хирургия, медицина катастроф, безопасность
              жизнедеятельности, основы технологической деятельности.
            </span>
          </p>
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "14pt" }}
          >
            <span
              style={{
                fontFamily: '"Times New Roman"',
                textDecoration: "underline",
              }}
            >
              Общий
            </span>
            <span
              style={{
                fontFamily: '"Times New Roman"',
                textDecoration: "underline",
              }}
            >
              медицинский
            </span>
            <span
              style={{
                fontFamily: '"Times New Roman"',
                textDecoration: "underline",
              }}
            >
              стаж
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>12</span>
            <span style={{ fontFamily: '"Times New Roman"' }}> лет 9</span>
            <span style={{ fontFamily: '"Times New Roman"' }}> месяцев</span>
            <span
              style={{
                fontFamily: '"Times New Roman"',
                textDecoration: "underline",
              }}
            ></span>
            <span
              style={{
                fontFamily: '"Times New Roman"',
                textDecoration: "underline",
              }}
            >
              лаборантский стаж
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>7</span>
            <span style={{ fontFamily: '"Times New Roman"' }}> лет 9</span>
            <span style={{ fontFamily: '"Times New Roman"' }}> месяцев</span>
          </p>
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "14pt" }}
          >
            <span
              style={{
                fontFamily: '"Times New Roman"',
                textDecoration: "underline",
              }}
            >
              Общий трудовой и педагогический стаж
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>4</span>
            <span style={{ fontFamily: '"Times New Roman"' }}> год</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>а 9</span>
            <span style={{ fontFamily: '"Times New Roman"' }}> месяцев</span>
          </p>
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "14pt" }}
          >
            <span
              style={{
                fontFamily: '"Times New Roman"',
                textDecoration: "underline",
              }}
            >
              Квалификационная категория
            </span>
          </p>
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "14pt" }}
          >
            <span style={{ fontFamily: '"Times New Roman"' }}>нет</span>
          </p>
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "14pt" }}
          >
            <span
              style={{
                fontFamily: '"Times New Roman"',
                textDecoration: "underline",
              }}
            >
              Почетные звания и награды
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "36pt",
              marginBottom: "0pt",
              textIndent: "-18pt",
              fontSize: "14pt",
            }}
          >
            <span style={{ fontFamily: '"Times New Roman"' }}>1)</span>
            <span style={{ font: '7pt "Times New Roman"' }}>
              &nbsp;&nbsp;&nbsp;
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              3 место на конкурсе
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              профессионального мастерства «Формула жизни» «
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>Специалист</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              по лучевой диагностики» в категории «
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>Рен</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>т</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              генолаборант
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>»</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              от 28.10.2020г.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "36pt",
              marginBottom: "0pt",
              textIndent: "-18pt",
              fontSize: "14pt",
            }}
          >
            <span style={{ fontFamily: '"Times New Roman"' }}>2)</span>
            <span style={{ font: '7pt "Times New Roman"' }}>
              &nbsp;&nbsp;&nbsp;
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>4</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              место на конкурсе профессионального мастерства «Формула жизни»
              «Специалист по лучевой диагностики» в категории «
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>Рен</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>т</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              генолаборант
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>» от </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>30.09</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>.</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>2021г.</span>
            <span style={{ fontFamily: '"Times New Roman"' }}> </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "36pt",
              marginBottom: "0pt",
              textIndent: "-18pt",
              fontSize: "14pt",
            }}
          >
            <span style={{ fontFamily: '"Times New Roman"' }}>3)</span>
            <span style={{ font: '7pt "Times New Roman"' }}>
              &nbsp;&nbsp;&nbsp;
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              Почетная грамота за проявленный профессионализм и повышение
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              качества престижа профессии
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>рентг</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              енолаборанта
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              от главного врача
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}> </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "36pt",
              marginBottom: "0pt",
              textIndent: "-18pt",
              fontSize: "14pt",
            }}
          >
            <span style={{ fontFamily: '"Times New Roman"' }}>4)</span>
            <span style={{ font: '7pt "Times New Roman"' }}>
              &nbsp;&nbsp;&nbsp;
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              Благодарственное письмо
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>от префекта</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>Зел</span>
            <span style={{ fontFamily: '"Times New Roman"' }}> АО </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>г.Москвы</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "36pt",
              marginBottom: "0pt",
              textIndent: "-18pt",
              fontSize: "14pt",
            }}
          >
            <span style={{ fontFamily: '"Times New Roman"' }}>5)</span>
            <span style={{ font: '7pt "Times New Roman"' }}>
              &nbsp;&nbsp;&nbsp;
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              Благодарность от руководителя департамента здравоохранения г.
              Москвы
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              за проявленный профессионализм и повышение качества престижа
              профессии
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>рентг</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              енолаборанта
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "36pt",
              marginBottom: "0pt",
              textIndent: "-18pt",
              fontSize: "14pt",
            }}
          >
            <span style={{ fontFamily: '"Times New Roman"' }}>6)</span>
            <span style={{ font: '7pt "Times New Roman"' }}>
              &nbsp;&nbsp;&nbsp;
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              Благодарность за самоотверженный труд, профессионализм, четкость и
              высокий уровень организации работы по оказанию квалифицированной
              помощи в борьбе с пандемией
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>COVID</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>-19</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>. </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "36pt",
              marginBottom: "0pt",
              textIndent: "-18pt",
              fontSize: "14pt",
            }}
          >
            <span style={{ fontFamily: '"Times New Roman"' }}>7)</span>
            <span style={{ font: '7pt "Times New Roman"' }}>
              &nbsp;&nbsp;&nbsp;
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>Почетный </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>нагрудный </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              знак за многолетнюю
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>работу в</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              здравоохранении
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>г.Москвы</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>. </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "36pt",
              marginBottom: "0pt",
              textIndent: "-18pt",
              fontSize: "14pt",
            }}
          >
            <span style={{ fontFamily: '"Times New Roman"' }}>8)</span>
            <span style={{ font: '7pt "Times New Roman"' }}>
              &nbsp;&nbsp;&nbsp;
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              Почетный нагрудный знак за Борьбу с
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>COVID</span>
            <span style={{ fontFamily: '"Times New Roman"' }}> -</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              19 Награжден
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              командующим войсками Центрального РК ВВ МВД РФ нагрудным знаком
              «за отличие в службе» 2 степени
            </span>
          </p>
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "14pt" }}
          >
            <span
              style={{ fontFamily: '"Times New Roman"', fontWeight: "bold" }}
            >
              4. Образование
            </span>
          </p>
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "14pt" }}
          >
            <span
              style={{
                fontFamily: '"Times New Roman"',
                textDecoration: "underline",
              }}
            >
              Название и год окончания учреждения профессионального образования
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "36pt",
              marginBottom: "0pt",
              textIndent: "-18pt",
              fontSize: "14pt",
            }}
          >
            <span style={{ fontFamily: '"Times New Roman"' }}>1)</span>
            <span style={{ font: '7pt "Times New Roman"' }}>
              &nbsp;&nbsp;&nbsp;
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              Медицинский колледж №8 г.Москва(Зеленоград)
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              Среднее профессиональное образование - Медицинский брат 2012г.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "36pt",
              marginBottom: "0pt",
              textIndent: "-18pt",
              fontSize: "14pt",
            }}
          >
            <span style={{ fontFamily: '"Times New Roman"' }}>2)</span>
            <span style={{ font: '7pt "Times New Roman"' }}>
              &nbsp;&nbsp;&nbsp;
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              2)ГБОУ ВПО МГМСУ
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>им.А.И.Евдо</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>кимова</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              кафедра лучевой диагностики.
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              Специализация -
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              рентгенолаборант
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}> 2013г. </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>2018г.</span>
            <span style={{ fontFamily: '"Times New Roman"' }}> 2024 г.</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "36pt",
              marginBottom: "0pt",
              textIndent: "-18pt",
              fontSize: "14pt",
            }}
          >
            <span style={{ fontFamily: '"Times New Roman"' }}>3)</span>
            <span style={{ font: '7pt "Times New Roman"' }}>
              &nbsp;&nbsp;&nbsp;
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>ФГБО </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              УВ&nbsp; РГСУ
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}> г.Москва. </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              Высшее образование
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>–</span>
            <span style={{ fontFamily: '"Times New Roman"' }}> </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              Красный диплом Академический медицинский брат. Преподаватель
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>2018</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>г</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>.</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "36pt",
              marginBottom: "0pt",
              textIndent: "-18pt",
              fontSize: "14pt",
            }}
          >
            <span style={{ fontFamily: '"Times New Roman"' }}>4)</span>
            <span style={{ font: '7pt "Times New Roman"' }}>
              &nbsp;&nbsp;&nbsp;
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              Удостоверение о повышении квалификации
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}> «</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>Середечно</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              -легочная реанимация. Базовый курс» 2019г.
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}> </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "36pt",
              marginBottom: "0pt",
              textIndent: "-18pt",
              fontSize: "14pt",
            }}
          >
            <span style={{ fontFamily: '"Times New Roman"' }}>5)</span>
            <span style={{ font: '7pt "Times New Roman"' }}>
              &nbsp;&nbsp;&nbsp;
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              Обучение&nbsp; в
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              магистратуре
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>Сиб</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>ГМУ</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              (управление здравоохранением)
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}> </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>с </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>2022г.</span>
          </p>
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "14pt" }}
          >
            <span
              style={{
                fontFamily: '"Times New Roman"',
                textDecoration: "underline",
              }}
            >
              Специальность, квалификация по диплому
            </span>
          </p>
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "14pt" }}
          >
            <span style={{ fontFamily: '"Times New Roman"' }}>«</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              Медицинский брат
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>»</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>. </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>«</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              Рентгенолаборант
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>»</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>. </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>«</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              Академический медицинский брат. Преподаватель
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>»</span>
          </p>
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "14pt" }}
          >
            <span
              style={{
                fontFamily: '"Times New Roman"',
                textDecoration: "underline",
              }}
            >
              Степень владения иностранными языками, уточнить каким (свободно,
              читаю, не владею
            </span>
          </p>
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "14pt" }}
          >
            <span style={{ fontFamily: '"Times New Roman"' }}>
              Английский .Читаю
            </span>
          </p>
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "14pt" }}
          >
            <span
              style={{ fontFamily: '"Times New Roman"', fontWeight: "bold" }}
            >
              5
            </span>
            <span
              style={{ fontFamily: '"Times New Roman"', fontWeight: "bold" }}
            >
              . Профессиональные ценности
            </span>
          </p>
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "14pt" }}
          >
            <span
              style={{
                fontFamily: '"Times New Roman"',
                textDecoration: "underline",
              }}
            >
              Профессиональные и личностные ценности
            </span>
          </p>
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "14pt" }}
          >
            <span style={{ fontFamily: '"Times New Roman"' }}>
              Профессионализм, ответственность, исполнительность, субординация,
              баланс доброты и справедливости,
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              соблюдение этики и деонтологии,
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}> честь!</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              Моя активная гражданская позиция – будущее за молодежью!
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              Нужно делать свою работу качественно, ч
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              то бы молоде
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              жь могла построить
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              новую страну
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>! На</span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              м нужно их обучить!
            </span>
          </p>
          <p
            style={{ marginTop: "0pt", marginBottom: "0pt", fontSize: "14pt" }}
          >
            <span style={{ fontFamily: '"Times New Roman"' }}>
              Личностные ценности- семья
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>
              , благополучие населения
            </span>
            <span style={{ fontFamily: '"Times New Roman"' }}>!!!</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "right",
              fontSize: "14pt",
            }}
          >
            <span style={{ fontFamily: '"Times New Roman"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "115%",
              fontSize: "11pt",
            }}
          >
            <span style={{ fontFamily: "Calibri" }}>&nbsp;</span>
          </p>
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
