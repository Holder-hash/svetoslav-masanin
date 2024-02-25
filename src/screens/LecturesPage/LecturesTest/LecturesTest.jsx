import styles from "./LecturesTest.module.scss";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import SlideNavButtons from "../../../components/ui/SlideNavButtons/SlideNavButtons";

function LecturesTest() {
  const location = useLocation();
  const [lecture, setLecture] = useState({});
  const [test, setTest] = useState({});
  const [sliderIndex, setSliderIndex] = useState(0);
  const [slides, setSlides] = useState(0);

  useEffect(() => {
    setLecture(location.state.lecture);
    setTest(location.state.test);
  }, [location.state]);

  useEffect(() => {
    test.questions && setSlides(test.questions.length);
  });

  return (
    <>
      <div className={styles.content}>
        <div className={styles.contentTitle}>
          <p>{test.title}</p>
          <p>{lecture.title}</p>
        </div>
        <div className={styles.contentInner}>
          <div
            className={styles.testSliderBody}
            style={{
              transform: `translateX(${sliderIndex}%)`,
            }}
          >
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
            <SlideNavButtons
              arrow="left"
              onClick={() =>
                sliderIndex >= 0
                  ? setSliderIndex(0)
                  : setSliderIndex(sliderIndex + 100)
              }
            />
            <div className={styles.sliderNavIndexWrapper}>
              {test.questions &&
                test.questions.map((question, index) => (
                  <>
                    <SlideNavButtons key={index}>{index + 1}</SlideNavButtons>
                  </>
                ))}
            </div>
            <SlideNavButtons
              arrow="right"
              onClick={() =>
                sliderIndex <= 0 - slides * 100 + 100
                  ? setSliderIndex(0 - slides * 100 + 100)
                  : setSliderIndex(sliderIndex - 100)
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LecturesTest;
