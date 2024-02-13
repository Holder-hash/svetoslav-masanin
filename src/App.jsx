import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./screens/HomePage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/svetoslav-masanin" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
