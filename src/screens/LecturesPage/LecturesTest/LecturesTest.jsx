import styles from "./LecturesTest.module.scss";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function LecturesTest() {
  const location = useLocation();
  const [lecture, setLecture] = useState({});
  const [test, setTest] = useState({});

  useEffect(() => {
    setLecture(location.state.lecture);
    setTest(location.state.test);
  }, [location.state]);

  return (
    <>
      <div className={styles.content}>
        <div className={styles.contentTitle}>
          <p>{test.title}</p>
          <p>{lecture.title}</p>
        </div>
        <div className={styles.contentInner}>
          {test.questions &&
            test.questions.map((question, index) => (
              <div key={index}>
                <input type="radio" name="question" />
                <span>{question.title}</span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default LecturesTest;
