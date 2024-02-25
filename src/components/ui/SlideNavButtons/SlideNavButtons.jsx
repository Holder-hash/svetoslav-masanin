import styles from "./SlideNavButtons.module.scss";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";

function SlideNavButtons({ children, arrow }) {
  const [arrowSide, setArrowSide] = useState();

  useEffect(() => {
    arrow == "left" && setArrowSide(<FaChevronLeft />);
    arrow == "right" && setArrowSide(<FaChevronRight />);
  }, [arrow]);

  console.log(arrow);
  return (
    <div className={styles.btnBody}>{arrowSide ? arrowSide : children}</div>
  );
}

export default SlideNavButtons;
