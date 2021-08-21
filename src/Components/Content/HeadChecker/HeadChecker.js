import React from "react";
import refresh from "../Images/refresh.png";
import more from "../Images/more.png";
import left from "../Images/left-arrow.png";
import right from "../Images/right-arrow.png";
import classes from "./HeadChecker.module.css";
import { usePageContext } from "../Content";
import { useState } from "react";
import MultipleIcons from "../SelectEmail/MultipleIcons/MultipleIcons";
import { useDispatch, useSelector } from "react-redux";
import { allSelect } from "../../../redux/action/search";

function HeadChecker() {
  const [checkBoxTick, unCheckBox] = useState(false);
  const delMul = useSelector((state) => state.deleteReducer);
  const emailData = useSelector((state) => state.searchReducer);
  const dispatch = useDispatch();

  // emailData.forEach((element) => {
  //   element.checked = checkBoxTick;
  // });
  const obj = usePageContext();

  // {delMul.length >0 ?  unCheckBox(true): unCheckBox(false)}

  const checkHandler = (e) => {
    if (e.target.checked === true) {
      unCheckBox(true);
      console.log(emailData);
      dispatch(allSelect());
    } else {
      unCheckBox(false);
      console.log(emailData);
    }
  };
  const trueCondition = () => {
    console.log(true);
    return true;
  };
  return (
    <div className={classes.head}>
      <div className={classes.headchecker}>
        <input
          className={classes.checbox}
          type="checkbox"
          checked={checkBoxTick}
          onClick={checkHandler}
        />
        {checkBoxTick ? (
          <MultipleIcons />
        ) : (
          <React.Fragment>
            <div className={classes.leftRight1}>
              <button>
                <img src={refresh} alt="refresh" />
              </button>
              <button>
                <img src={more} alt="more" />
              </button>
            </div>

            <div className={classes.leftRight}>
              <button onClick={obj.goToPreviousPage}>
                <img src={left} alt="left" />
              </button>
              <button onClick={obj.goToNextPage}>
                {" "}
                <img src={right} alt="right" />
              </button>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default HeadChecker;
