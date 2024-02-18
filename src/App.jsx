import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./screens/HomePage/HomePage.jsx";
import LecturesPage from "./screens/HomePage/LecturesPage/LecturesPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/svetoslav-masanin" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="lectures" element={<LecturesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
