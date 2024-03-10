import styles from "./LecturesSingle.module.scss";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function LecturesSingle() {
  const location = useLocation();
  const [lecture, setLecture] = useState({});
  const [chapter, setChapter] = useState({});

  useEffect(() => {
    setLecture(location.state.lecture);
    setChapter(location.state.chapter);
  }, [location.state]);

  return (
    <>
      <div className={styles.content}>
        <div className={styles.contentTitle}>
          <p>{chapter.title}</p>
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
          <div dangerouslySetInnerHTML={{ __html: chapter.body }} />
        </div>
      </div>
    </>
  );
}

export default LecturesSingle;
