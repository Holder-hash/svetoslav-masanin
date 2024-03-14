import styles from "./LecturesTest.module.scss";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import SlideNavButtons from "../../../components/ui/SlideNavButtons/SlideNavButtons";
import TestOption from "../../../components/ui/TestOption/TestOption";
import getCurrentDate from "../../../components/hooks/getCurrentDate";
import CustomModal from "../../../components/ui/CustomModal/CustomModal";
import axios from "axios";

function LecturesTest() {
  const location = useLocation();
  const [lecture, setLecture] = useState({});
  const [test, setTest] = useState({});
  const [sliderIndex, setSliderIndex] = useState(0);
  const [slides, setSlides] = useState(0);
  const [activeNavBtn, setActiveNavBtn] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [answer, setAnswer] = useState([]);

  const [testDone, setTestDone] = useState(false);
  const testScores = JSON.parse(localStorage.getItem("testScores")) || [];

  const [modalRegIsOpen, setModalRegIsOpen] = useState(false);
  const [modalAuthIsOpen, setModalAuthIsOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const [message, setMessage] = useState("");
  const [messageAuth, setMessageAuth] = useState("");

  const studentNameRef = useRef();
  const studentPasswordRef = useRef();

  const studentAuthNameRef = useRef();
  const studentAuthPasswordRef = useRef();

  useEffect(() => {
    setLecture(location.state.lecture);
    setTest(location.state.test);
    setSlides(location.state.test.questions.length);
    setTestDone(false);
  }, [location.state]);

  const radios = document.querySelectorAll("input[type='radio']");
  if (testScores.some((item) => item.id === test.id)) {
    radios.forEach((radio) => {
      radio.disabled = true;
    });
  } else {
    radios.forEach((radio) => {
      radio.disabled = false;
    });
  }

  const handleSelectOption = (inp) => {
    if (!testScores.some((item) => item.id === test.id)) {
      const newSelectedOptions = [...selectedOptions];
      const newAnswerArr = [...answer];

      newSelectedOptions[inp.questionIndex] = inp.option.right;
      newAnswerArr[inp.questionIndex] = inp.optionIndex;

      setSelectedOptions(newSelectedOptions);
      setAnswer(newAnswerArr);

      if (inp.option.right == "true") {
        return { ...inp, correctAnswer: true };
      } else {
        return { ...inp, correctAnswer: false };
      }
    }
  };

  const handleSaveSelectedOptions = () => {
    if (isAuth == false) {
      setModalRegIsOpen(true);
    } else {
      setTestDone(true);

      const correctAnswers = selectedOptions.filter(
        (value) => value === "true"
      ).length;
      const totalScore = (correctAnswers * 5) / test.questions.length;
      const score = Math.round(2 + (totalScore / 5) * (5 - 2));

      saveTestScoreToLocalStorage(test.id, test.title, score);

      axios
        .post(
          "http://localhost/setGrades.php",
          {
            studentname: localStorage.getItem("studentName"),
            grades: localStorage.getItem("testScores"),
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((response) => {
          console.log(response.data.message);
        })
        .catch((error) => {
          console.error("Ошибка при обновлении данных:", error);
        });
    }
  };

  // score storage
  const saveTestScoreToLocalStorage = (testId, title, score) => {
    const newScore = { id: testId, title, score, time: getCurrentDate() };

    testScores.push(newScore);

    localStorage.setItem("testScores", JSON.stringify(testScores));
  };

  // student reg
  useEffect(() => {
    if (localStorage.getItem("studentName") == null) {
      setIsAuth(false);
    } else {
      setIsAuth(true);
    }
    studentReg();
  }, []);

  function studentReg() {
    setModalRegIsOpen(true);
  }

  function studentNameSubmitHanlder(event) {
    event.preventDefault();

    if (
      studentNameRef.current.value != "" &&
      studentPasswordRef.current.value != ""
    ) {
      createUser();
    }
  }

  // student red db

  const createUser = () => {
    axios
      .post(
        "http://localhost/studentReg.php",
        {
          studentname: studentNameRef.current.value,
          studentPassword: studentPasswordRef.current.value,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        setMessage(response.data.message);
        if (response.data.message.includes("успешно")) {
          setIsAuth(true);
          localStorage.setItem("studentName", studentNameRef.current.value);
        }
      })
      .catch((error) => {
        console.error("Ошибка при создании пользователя:", error);
      });
  };

  // auth
  function authHandler(event) {
    event.preventDefault();

    axios
      .post(
        "http://localhost/getGrades.php",
        {
          studentname: studentAuthNameRef.current.value,
          studentPassword: studentAuthPasswordRef.current.value,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        if (response.data.grades) {
          localStorage.setItem("testScores", response.data.grades);
          localStorage.setItem(
            "studentName",
            studentAuthPasswordRef.current.value
          );
          setIsAuth(true);
          setModalAuthIsOpen(false);
        } else {
          setMessageAuth(response.data.message);
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.error("Ошибка при запросе данных студента:", error);
      });
  }

  return (
    <>
      {isAuth == false && (
        <CustomModal
          isOpen={modalRegIsOpen}
          onClose={() => setModalRegIsOpen(false)}
        >
          <form className={styles.regForm} onSubmit={studentNameSubmitHanlder}>
            <h3>Регистрация</h3>
            <div className={styles.inpBox}>
              <label>Введите фио:</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Иванов Иван Иванович"
                ref={studentNameRef}
              />
            </div>
            <div>
              <label>Придумайте пароль:</label>
              <input
                className={styles.input}
                type="password"
                placeholder="**********"
                ref={studentPasswordRef}
              />
            </div>
            {localStorage.getItem("studentName") == null ? (
              <input type="submit" className={styles.submit} />
            ) : (
              ""
            )}
            <p
              className={styles.haveAcc}
              onClick={() => {
                setModalRegIsOpen(false);
                setModalAuthIsOpen(true);
              }}
            >
              Есть аккаунт?
            </p>
            {message != "" && (
              <span className={styles.regFormMessage}>{message}</span>
            )}
          </form>
        </CustomModal>
      )}

      <CustomModal
        isOpen={modalAuthIsOpen}
        onClose={() => setModalAuthIsOpen(false)}
      >
        <form className={styles.regForm} onSubmit={authHandler}>
          <h3>Вход</h3>
          <div className={styles.inpBox}>
            <label>Введите фио:</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Иванов Иван Иванович"
              ref={studentAuthNameRef}
            />
          </div>
          <div>
            <label>Введите пароль:</label>
            <input
              className={styles.input}
              type="password"
              placeholder="**********"
              ref={studentAuthPasswordRef}
            />
          </div>
          {localStorage.getItem("studentName") == null ? (
            <input type="submit" className={styles.submit} />
          ) : (
            ""
          )}
          <p
            className={styles.haveAcc}
            onClick={() => {
              setModalRegIsOpen(true);
              setModalAuthIsOpen(false);
            }}
          >
            Нет аккаунта?
          </p>
          {messageAuth != "" && (
            <span className={styles.regFormMessage}>{messageAuth}</span>
          )}
        </form>
      </CustomModal>

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
                    {question.options.map((option, optionIndex) => {
                      const selectedOption = selectedOptions[questionIndex];
                      let backgroundColor = "white";

                      if (testDone) {
                        if (
                          selectedOption === "true" &&
                          option.right === "true"
                        ) {
                          backgroundColor = "green";
                        } else if (
                          selectedOption === "false" &&
                          optionIndex == answer[questionIndex]
                        )
                          backgroundColor = "red";
                      }

                      return (
                        <div
                          key={optionIndex}
                          style={{
                            background: backgroundColor,
                            borderRadius: "15px",
                          }}
                        >
                          <TestOption
                            text={option.title}
                            name={"question" + questionIndex}
                            defaultChecked={
                              optionIndex == answer[questionIndex]
                            }
                            onInput={() =>
                              handleSelectOption({
                                option,
                                questionIndex,
                                optionIndex,
                              })
                            }
                          />
                        </div>
                      );
                    })}
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
            {testScores.some((item) => item.id === test.id) ? (
              <p
                style={{
                  position: "absolute",
                  alignSelf: "center",
                  bottom: "2rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                {`Тест завершен с оценкой ${
                  testScores.find((score) => score.id === test.id).score
                }`}
              </p>
            ) : (
              <button
                className={styles.doneBtn}
                onClick={handleSaveSelectedOptions}
              >
                Завершить
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LecturesTest;
