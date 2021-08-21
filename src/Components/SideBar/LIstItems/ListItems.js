import React from "react";
import classes from "./ListItem.module.css";
import { GrStar } from "react-icons/gr";
import { BiAlarmSnooze, BiSend } from "react-icons/bi";
import { RiDraftLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
function ListItems() {
  const [colorRed, setColorRed] = useState(false);
  const inboxHandler = () => {
    setColorRed(true);
  };

  return (
    <div className={classes.listItem}>
      <ul className={classes.ul}>
        <Link
          className={classes.link}
          to="/"
          style={{
            color: colorRed && "red",
          }}
          onClick={inboxHandler}
        >
          <li>
            {" "}
            <HiOutlineMail className={classes.svg} /> Inbox
          </li>
        </Link>
        <Link
          onClick={() => setColorRed(false)}
          className={classes.link}
          to="/starred"
        >
          <li>
            {" "}
            <GrStar className={classes.svg} /> Starred
          </li>
        </Link>
        <Link
          onClick={() => setColorRed(false)}
          className={classes.link}
          to="/snoozed"
        >
          <li>
            {" "}
            <BiAlarmSnooze className={classes.svg} /> Snoozed
          </li>
        </Link>
        <Link
          onClick={() => setColorRed(false)}
          className={classes.link}
          to="/sent"
        >
          <li>
            {" "}
            <BiSend className={classes.svg} /> Sent
          </li>
        </Link>
        <Link
          onClick={() => setColorRed(false)}
          className={classes.link}
          to="/drafts"
        >
          <li>
            {" "}
            <RiDraftLine className={classes.svg} /> Drafts
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default ListItems;
