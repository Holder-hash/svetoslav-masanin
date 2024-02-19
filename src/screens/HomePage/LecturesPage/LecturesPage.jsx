import styles from "./LecturesPage.module.scss";
import lectures from "../../../data/lectures.json";

function LecturesPage() {
  return (
    <>
      <div className={styles.wrapper}>
        <aside className={styles.aside}>
          <h3>Навигация</h3>

          {lectures.map((lecture) => (
            <>
              <details>
                <summary>{lecture.title}</summary>
                {lecture.chapters.map((chapter) => (
                  <p>{chapter.title}</p>
                ))}
              </details>
            </>
          ))}
        </aside>
        <div className={styles.content}></div>
      </div>
    </>
  );
}

export default LecturesPage;
