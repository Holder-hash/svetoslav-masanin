import styles from "./LecturesAside.module.scss";
import lectures from "../../../data/lectures.json";
import { useNavigate } from "react-router-dom";

function LecturesAside() {
  const navigate = useNavigate();

  return (
    <aside className={styles.aside}>
      <h3>Навигация</h3>

      {lectures.map((lecture) => (
        <>
          <details className={styles.details} key={lecture.id}>
            <summary>{lecture.title}</summary>
            {lecture.chapters.map((chapter) => (
              <p
                key={chapter.id}
                onClick={() => navigate(`lectures/${lecture.id}/${chapter.id}`)}
              >
                {chapter.title}
              </p>
            ))}
          </details>
        </>
      ))}
    </aside>
  );
}

export default LecturesAside;
