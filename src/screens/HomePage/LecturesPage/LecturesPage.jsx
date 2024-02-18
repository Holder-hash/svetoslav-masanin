import styles from "./LecturesPage.module.scss";

function LecturesPage() {
  return (
    <>
      <div className={styles.wrapper}>
        <aside className={styles.aside}>
          <h3>Навигация</h3>

          <details>
            <summary>Легенда</summary>
            <p>Раскрывающийся текст</p>
          </details>
        </aside>

        <div className={styles.content}></div>
      </div>
    </>
  );
}

export default LecturesPage;
