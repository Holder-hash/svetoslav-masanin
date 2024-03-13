import styles from "./LecturesPage.module.scss";
import lectures from "../../data/lectures.json";
import { useEffect, useState } from "react";

function LecturesPage() {
  // const [studentGrades, setStudentGrades] = useState([]);
  // let studentGradesStorage = JSON.parse(localStorage.getItem("studentGrades"));

  // if (localStorage.getItem("studentGrades") == null) {
  //   localStorage.setItem(
  //     "studentGrades",
  //     JSON.stringify([{ id: 0, studentGrade: "" }])
  //   );
  // }

  // useEffect(() => {
  //   setStudentGrades(studentGradesStorage);

  //   if (localStorage.getItem("studentGrades")) {
  //     lectures[0].tests.map((test, testIndex) => {
  //       if (testIndex > studentGrades.length) {
  //         if (studentGrades.id == studentGradesStorage.id) return;
  //         else {
  //           studentGrades.push({ id: testIndex, studentGrade: "" });
  //           localStorage.setItem(
  //             "studentGrades",
  //             JSON.stringify(studentGrades)
  //           );
  //         }
  //       }
  //       console.log(studentGrades);
  //     });
  //   }
  // }, []);

  // console.log(studentGrades);

  return (
    <>
      <div className={styles.content}>
        <h2>Выберите материал для изучения</h2>
        <img
          src="https://russtimes.ru/wp-content/uploads/2023/02/45657364.jpg"
          className={styles.img}
        />
        <p>
          Курс лекций написан в соответствии с рабочей программой и составлен в
          соответствии с Федеральным государственным образовательным стандартом
          по специальности 34.02.01 Сестринское дело и Приказа Министерства
          здравоохранения и социального развития Российской Федерации от
          23.07.2010 №541н. В учебный материал включены лекции по предмету:
          «Хирургия и хирургические болезни», «Асептика и антисептика»,
          «Кровотечение и кровопотеря», «Основы трансфузиологии».
          Предназначается для самостоятельной подготовки студентов к занятиям и
          экзамену по хирургии. Разработанный учебный материал направлен на
          унификацию и оптимизацию учебного процесса специалистов среднего
          звена.
        </p>

        <p className={styles.copy}>
          Автором предоставленных материалов является Светосла Масанин.
        </p>
      </div>
    </>
  );
}

export default LecturesPage;
