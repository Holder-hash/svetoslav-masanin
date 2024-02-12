import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/svetoslav-masanin" element={<Layout />}></Route>
    </Routes>
  );
}

export default App;
