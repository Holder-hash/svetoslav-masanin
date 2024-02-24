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
          {/* {chapter.video && (
            <iframe
              src={chapter.video}
              title="Максим Кивачук - Рентгенолаборант"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          )} */}
          {/* <p>{chapter.body}</p> */}
        </div>
      </div>
    </>
  );
}

export default LecturesTest;
