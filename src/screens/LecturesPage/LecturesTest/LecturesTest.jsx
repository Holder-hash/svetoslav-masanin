import styles from "./LecturesTest.module.scss";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import SlideNavButtons from "../../../components/ui/SlideNavButtons/SlideNavButtons";
import TestOption from "../../../components/ui/TestOption/TestOption";

function LecturesTest() {
  const location = useLocation();
  const [lecture, setLecture] = useState({});
  const [test, setTest] = useState({});
  const [sliderIndex, setSliderIndex] = useState(0);
  const [slides, setSlides] = useState(0);
  let [Answers, setAnswers] = useState([]);

  useEffect(() => {
    setLecture(location.state.lecture);
    setTest(location.state.test);
  }, [location.state]);

  useEffect(() => {
    test.questions && setSlides(test.questions.length);
  });

  function onOptionSelected(oprion) {
    setAnswers([...Answers, oprion.right]);
    console.log(Answers);
  }

  return (
    <>
      <div className={styles.content}>
        <div className={styles.contentTitle}>
          <p>{test.title}</p>
          <p>{lecture.title}</p>
        </div>
        <div className={styles.contentInner}>
          <img
            src="https://avatars.dzeninfra.ru/get-zen_doc/3938527/pub_5f4a024a2e211011a80d7dfe_5f4a04bc3df0035d9ef955b8/scale_1200"
            alt=""
          />
          <div
            className={styles.testSliderBody}
            style={{
              transform: `translateX(${sliderIndex}%)`,
            }}
          >
            {test.questions &&
              test.questions.map((question, index) => (
                <div key={index} className={styles.questionBody}>
                  <p className={styles.questionTitle}>{question.title}</p>
                  <div className={styles.optionsBody}>
                    {/* options */}
                    {question.options.map((option, index) => (
                      <div key={index}>
                        <TestOption
                          text={option.title}
                          name={"question"}
                          onInput={() => onOptionSelected(option)}
                        />
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
                  <div key={index}>
                    <SlideNavButtons
                      onClick={() => setSliderIndex(0 - index * 100)}
                    >
                      {index + 1}
                    </SlideNavButtons>
                  </div>
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
            <button className={styles.doneBtn}>Завершить</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LecturesTest;
