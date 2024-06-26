import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Layout from "./components/Layout/Layout";
import HomePage from "./screens/HomePage/HomePage.jsx";
import LecturesPage from "./screens/LecturesPage/LecturesPage.jsx";
import LecturesSingle from "./screens/LecturesPage/LecturesSingle/LecturesSingle.jsx";
import LecturesTest from "./screens/LecturesPage/LecturesTest/LecturesTest.jsx";
import AdminPage from "./screens/AdminPage/AdminPage.jsx";

import { useState, useEffect } from "react";

function App() {
  const [totalUniqueVisitors, setTotalUniqueVisitors] = useState(0);

  useEffect(() => {
    const fetchUniqueVisitors = () => {
      axios
        .get("http://supergi2.beget.tech/php/VisitorsCount.php")
        .then((response) => {
          setTotalUniqueVisitors(response.data.total_unique_visitors);
        })
        .catch((error) => {
          console.error("Ошибка при получении данных о посетителях:", error);
        });
    };
    fetchUniqueVisitors();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout totalUniqueVisitors={totalUniqueVisitors} />}
      >
        <Route index element={<HomePage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="lectures" element={<LecturesPage />} />
        <Route path="lectures/:id/:id" element={<LecturesSingle />} />
        <Route path="lectures/:id/test" element={<LecturesTest />} />
      </Route>
    </Routes>
  );
}

export default App;
