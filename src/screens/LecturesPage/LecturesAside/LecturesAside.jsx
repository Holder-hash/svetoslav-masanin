import styles from "./LecturesAside.module.scss";
import lectures from "../../../data/lectures.json";

function LecturesAside() {
  return (
    <aside className={styles.aside}>
      <h3>Навигация</h3>

      {lectures.map((lecture) => (
        <>
          <details>
            <summary>{lecture.title}</summary>
            {lecture.chapters.map((chapter) => (
              <p key={chapter.id}>{chapter.title}</p>
            ))}
          </details>
        </>
      ))}
    </aside>
  );
}

export default LecturesAside;
