import styles from "./AdminPage.module.scss";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

function AdminPage() {
  const [adminAuth, setAdminAuth] = useState(false);
  const [showErrAuthMessage, setShowErrAuthMessage] = useState(false);
  const [remember, setRemember] = useState(false);
  const [allStudentsData, setAllStudentsData] = useState([]);
  const [filterText, setFilterText] = useState("");

  const loginRef = useRef();
  const PasswordRef = useRef();

  const adminLogin = "svetoslavMasanin#940672";
  const admiPassword = "r6esDkWBV+qz2j!";

  useEffect(() => {
    localStorage.getItem("adminAuth") == "true" && setAdminAuth(true);
  }, []);

  useEffect(() => {
    getStudentsInfo();
  }, [adminAuth]);

  function loginBtnHandler() {
    if (
      loginRef.current.value == adminLogin &&
      PasswordRef.current.value == admiPassword
    ) {
      setAdminAuth(true);
      remember == true && localStorage.setItem("adminAuth", true);
    } else {
      setShowErrAuthMessage(true);
    }
  }

  function getStudentsInfo() {
    axios
      .get("http://localhost/getAllStudents.php")
      .then((response) => {
        const studentsData = response.data;
        setAllStudentsData(studentsData);
      })
      .catch((error) => {
        console.error("Ошибка при запросе данных о студентах:", error);
      });
  }

  console.log(allStudentsData);

  return (
    <>
      {!adminAuth ? (
        <div className={styles.authWrapper}>
          <div className={styles.inpWrapper}>
            <input type="text" placeholder="login" ref={loginRef} />
            <input type="password" placeholder="password" ref={PasswordRef} />
          </div>
          <div className={styles.rememberWrapper}>
            <input type="checkbox" onInput={() => setRemember(!remember)} />
            <p>Remember</p>
          </div>
          <button onClick={() => loginBtnHandler()}>Login</button>
          {showErrAuthMessage && (
            <p className={styles.message}>Неправильный логин или пароль!</p>
          )}
        </div>
      ) : (
        <div className={styles.table}>
          <input
            type="text"
            placeholder="Введите ФИО студента"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />

          {allStudentsData
            .filter((student) =>
              student.studentname
                .toLowerCase()
                .includes(filterText.toLowerCase())
            )
            .map((studentsData) => {
              return (
                <div key={studentsData.id}>
                  <br />
                  <hr />
                  <br />
                  <h4>ФИО: {studentsData.studentname}</h4>
                  <br />
                  <div>
                    {JSON.parse(studentsData.grades).map((grade) => {
                      return (
                        <p key={grade.id}>
                          {grade.title} - {grade.score} ({grade.time})
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
}

export default AdminPage;
