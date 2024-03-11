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
  const [activeNavBtn, setActiveNavBtn] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    setLecture(location.state.lecture);
    setTest(location.state.test);
    setSlides(location.state.test.questions.length);
  }, [location.state]);

  // useEffect(() => {}, [test.questions]);

  const handleSelectOption = (inp) => {
    console.log(inp);

    const newSelectedOptions = [...selectedOptions];
    const newAnswerArr = [...answer];
    newSelectedOptions[inp.questionIndex] = inp.option.right;
    newAnswerArr[inp.questionIndex] = inp.optionIndex;
    setSelectedOptions(newSelectedOptions);
    setAnswer(newAnswerArr);
  };

  const handleSaveSelectedOptions = () => {
    // Здесь вы можете использовать массив selectedOptions для нужных действий или отправки на сервер

    console.log(selectedOptions);
    console.log(answer);
  };

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
              test.questions.map((question, questionIndex) => (
                <div key={questionIndex} className={styles.questionBody}>
                  <p className={styles.questionTitle}>{question.title}</p>
                  <div className={styles.optionsBody}>
                    {/* options */}
                    {question.options.map((option, optionIndex) => (
                      <div key={optionIndex}>
                        <TestOption
                          text={option.title}
                          name={"question" + questionIndex}
                          defaultChecked={optionIndex == answer[questionIndex]}
                          onInput={() =>
                            handleSelectOption({
                              option,
                              questionIndex,
                              optionIndex,
                            })
                          }
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
                      style={{
                        backgroundColor:
                          activeNavBtn == index ? "#a5a5a5b4" : "#b9b9b9b4",
                      }}
                      onClick={() => {
                        setSliderIndex(0 - index * 100);
                        setActiveNavBtn(index);
                      }}
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
            <button
              className={styles.doneBtn}
              onClick={handleSaveSelectedOptions}
            >
              Завершить
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LecturesTest;
