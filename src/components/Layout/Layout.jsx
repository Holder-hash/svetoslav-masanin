import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "./Header/Header";
import LecturesAside from "../../screens/LecturesPage/LecturesAside/LecturesAside";
import { useState, useEffect } from "react";

function Layout({ totalUniqueVisitors }) {
  const [isLectures, setIsLectures] = useState(false);
  const location = useLocation();

  useEffect(() => {
    location.pathname.includes("lectures")
      ? setIsLectures(true)
      : setIsLectures(false);
  }, [location.pathname]);

  return (
    <>
      <Header totalUniqueVisitors={totalUniqueVisitors} />

      <main>
        <div className={`wrapper ${isLectures && "wrapper--lectures"}`}>
          {isLectures && <LecturesAside />}
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Layout;
