import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./screens/HomePage/HomePage.jsx";
import LecturesPage from "./screens/LecturesPage/LecturesPage.jsx";
import LecturesSingle from "./screens/LecturesPage/LecturesSingle/LecturesSingle.jsx";

function App() {
  return (
    <Routes>
      <Route path="/svetoslav-masanin" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="lectures" element={<LecturesPage />} />
        <Route path="lectures/:id/:id" element={<LecturesSingle />} />
      </Route>
    </Routes>
  );
}

export default App;
