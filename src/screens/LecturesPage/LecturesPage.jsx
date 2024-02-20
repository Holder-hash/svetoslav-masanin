import styles from "./LecturesPage.module.scss";
import lectures from "../../data/lectures.json";

function LecturesPage() {
  return (
    <>
      <div className={styles.content}>
        <h2>Выберите материал для изучения</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          autem sed doloremque, repellendus soluta aliquam minima saepe
          accusantium. Harum at enim natus. Ratione labore sunt reprehenderit
          sed tempora laboriosam quisquam fugiat id et saepe dolorem
          necessitatibus delectus unde quaerat in commodi alias nulla
          aspernatur, laudantium dolor quia magnam! Sunt, praesentium.
        </p>
        <div className={styles.cardsWrapper}>
          {lectures.map((lecture) => (
            <div key={lecture.id} className={styles.card}>
              <img src={lecture.img} alt="" />
              <div className={styles.cardTitleBlock}>
                <h2>{lecture.title}</h2>
                <p>{lecture.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className={styles.copy}>
          Автором предоставленных материалов является Светосла Масанин.
        </p>
      </div>
    </>
  );
}

export default LecturesPage;
