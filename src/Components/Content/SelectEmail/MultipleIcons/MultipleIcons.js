import React from "react";
import {
  AiFillDelete,
  AiOutlineArrowLeft,
  AiOutlineMore,
} from "react-icons/ai";
import { BiAlarmSnooze, BiTask } from "react-icons/bi";
import { IoMdMailUnread } from "react-icons/io";
import { RiInboxUnarchiveFill } from "react-icons/ri";
import { MdMoveToInbox, MdLabel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import classes from "../SelectEmail.module.css";
import { deleteMultiple } from "../../../../redux/action/search";
import { removeAll } from "../../../../redux/action/delete";
function MultipleIcons() {
  // const sendEmail = useSelector((state) => state.seeMailReducer);
  const deleteIds = useSelector((state) => state.deleteReducer);
  const dispatch = useDispatch();

  const history = useHistory();
  // console.log(sendEmail);

  const arrowBack = () => {
    history.push("/");
  };

  const multiDeleteHandler = () => {
    dispatch(deleteMultiple(deleteIds));
    dispatch(removeAll());
  };
  return (
    <div className={classes.icons}>
      <div>
        <button className={classes.button} onClick={arrowBack}>
          <AiOutlineArrowLeft className={classes.icon} />
        </button>
        <button className={classes.button}>
          <RiInboxUnarchiveFill className={classes.icon} />
        </button>
        <button className={classes.button} onClick={multiDeleteHandler}>
          <AiFillDelete className={classes.icon} />
        </button>
      </div>
      <div>
        <button className={classes.button}>
          <IoMdMailUnread className={classes.icon} />
        </button>
        <button className={classes.button}>
          <BiAlarmSnooze className={classes.icon} />
        </button>
        <button className={classes.button}>
          <BiTask className={classes.icon} />
        </button>
      </div>

      <div>
        <button className={classes.button}>
          <MdMoveToInbox className={classes.icon} />
        </button>
        <button className={classes.button}>
          <MdLabel className={classes.icon} />
        </button>
        <button className={classes.button}>
          <AiOutlineMore className={classes.icon} />
        </button>
      </div>
    </div>
  );
}

export default MultipleIcons;
