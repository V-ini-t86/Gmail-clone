import React, { useState } from "react";
import { AiOutlineStar, AiFillDelete } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import { IoMdMailUnread } from "react-icons/io";
import { BiAlarmSnooze } from "react-icons/bi";

import classes from "./Emails.module.css";
import {
  addIdIntoStarred,
  removeIdIntoStarred,
} from "../../../redux/action/starred";
import { useDispatch } from "react-redux";
import { addInToSnooze, removeIntoSnooze } from "../../../redux/action/snooze";
import { mailClicks } from "../../../redux/action/mailclick";
import { useHistory } from "react-router-dom";
import { deleteSingle } from "../../../redux/action/search";
import {
  multipleDelete,
  removeFromMultiSelect,
} from "../../../redux/action/delete";

function Email({ id, company, description, subject, time, star, checked }) {
  const [showOnHover, setShowOnHover] = useState(false);
  const [starColorShow, setStarColorShow] = useState(false);
  const [addSnooze, setAddSnooze] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handlingShowOnOver = (e) => {
    e.stopPropagation();
    setShowOnHover((prev) => (prev = true));
  };

  const handlingShowOnOut = (e) => {
    e.stopPropagation();
    setShowOnHover((prev) => (prev = false));
  };

  const starClick = (e) => {
    e.preventDefault();
    setStarColorShow((prev) => !prev);
    if (!starColorShow) {
      // star = !starColorShow;
      dispatch(addIdIntoStarred(id));
    } else if (starColorShow) {
      // star = starColorShow;
      dispatch(removeIdIntoStarred(id));
    }
  };

  const snoozeHandler = (e) => {
    setAddSnooze(!addSnooze);
    if (!addSnooze) {
      console.log("run");
      dispatch(addInToSnooze(id));
    } else if (addSnooze) {
      console.log("run1");
      dispatch(removeIntoSnooze(id));
    }
  };
  const displayMail = (e) => {
    e.stopPropagation();
    dispatch(mailClicks(id, company, description, subject, time));
    history.push("/mail");
  };

  const clickCheckBox = (e) => {
    if (e.target.checked === true) {
      console.log(id);
      dispatch(multipleDelete(id));
    } else if (e.target.checked === false) {
      dispatch(removeFromMultiSelect(id));
    }
  };

  const deleteHandler = () => {
    dispatch(deleteSingle(id));
  };
  return (
    <React.Fragment>
      <div
        onMouseOver={handlingShowOnOver}
        onMouseOut={handlingShowOnOut}
        className={classes.list}
      >
        <div className={classes.check}>
          <input type="checkbox" onClick={clickCheckBox} checked={checked} />
          <button type="button" className={classes.button} onClick={starClick}>
            <AiOutlineStar
              className={starColorShow ? classes.svgStar : classes.svg}
            />
          </button>
          <button className={classes.button}>
            <BiMailSend className={classes.svg} />
          </button>
        </div>

        <div className={classes.company}>
          <div className={classes.info} onClick={displayMail}>
            <h3>{company}</h3>
            <h4>{description}</h4>
          </div>

          {showOnHover ? (
            <div className={classes.hideIcons}>
              <button>
                <IoMdMailUnread />
              </button>
              <button onClick={snoozeHandler}>
                <BiAlarmSnooze />
              </button>
              <button onClick={deleteHandler}>
                <AiFillDelete />
              </button>
            </div>
          ) : (
            <p>{time}</p>
          )}
        </div>
      </div>
      <hr className={classes.hr} />
    </React.Fragment>
  );
}

export default Email;
