import styles from "./LecturesAside.module.scss";
import lectures from "../../../data/lectures.json";
import { useNavigate } from "react-router-dom";

function LecturesAside() {
  const navigate = useNavigate();

  return (
    <aside className={styles.aside}>
      <h3>Навигация</h3>
      {lectures.map((lecture) => (
        <div key={lecture.id}>
          <h4>Темы</h4>
          <ul className={styles.details}>
            {lecture.chapters.map((chapter) => (
              <li
                key={chapter.id}
                onClick={() =>
                  navigate(`lectures/${lecture.id}/${chapter.id}`, {
                    state: { chapter, lecture },
                  })
                }
              >
                <summary>{chapter.title}</summary>
              </li>
            ))}
          </ul>

          <h4>Тесты</h4>
          <ul>
            {lecture.tests.map((test, index) => (
              <li
                key={index}
                onClick={() =>
                  navigate(`lectures/${lecture.id}/test`, {
                    state: { test, lecture },
                  })
                }
              >
                {test.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}

export default LecturesAside;
