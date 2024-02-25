import styles from "./LecturesTest.module.scss";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import SlideNavButtons from "../../../components/ui/SlideNavButtons/SlideNavButtons";

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
          <div className={styles.testSliderBody}>
            {test.questions &&
              test.questions.map((question, index) => (
                <div key={index} className={styles.questionBody}>
                  <p>{question.title}</p>
                  <div className={styles.optionsBody}>
                    {question.options.map((option, index) => (
                      <div key={index}>
                        <input type="radio" name="question" />
                        <span>{option.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
          <div className={styles.sliderNavWrapper}>
            <SlideNavButtons arrow="left" />
            <SlideNavButtons arrow="right" />
            <SlideNavButtons>1 </SlideNavButtons>
          </div>
        </div>
      </div>
    </>
  );
}

export default LecturesTest;
