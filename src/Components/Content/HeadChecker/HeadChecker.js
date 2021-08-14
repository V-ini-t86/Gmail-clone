import React from "react";
import refresh from "../Images/refresh.png";
import more from "../Images/more.png";
import left from "../Images/left-arrow.png";
import right from "../Images/right-arrow.png";
import classes from "./HeadChecker.module.css";
import { usePageContext } from "../Content";

function HeadChecker() {
  const obj = usePageContext();
  return (
    <div className={classes.head}>
      <div className={classes.headchecker}>
        <input className={classes.checbox} type="checkbox" />
        <button>
          <img src={refresh} alt="refresh" />
        </button>
        <button>
          <img src={more} alt="more" />
        </button>
      </div>
      <div className={classes.headchecker}>
        <button onClick={obj.goToPreviousPage}>
          <img src={left} alt="left" />
        </button>
        <button onClick={obj.goToNextPage}>
          {" "}
          <img src={right} alt="right" />
        </button>
      </div>
    </div>
  );
}

export default HeadChecker;
