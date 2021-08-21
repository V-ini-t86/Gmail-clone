import React from "react";
import ComposeButton from "./ComposeButton/ComposeButton";
import ListItems from "./LIstItems/ListItems";
import classes from "./SideBar.module.css";
import { FaVideo, FaKeyboard } from "react-icons/fa";
import Man from "./Images/man.png";

function SideBar() {
  return (
    <div className={classes.sidebar}>
      <ComposeButton />
      <ListItems />
      <hr />
      <div className={classes.meet}>
        <h5>Meet</h5>
        <p>
          <span>
            <FaVideo />
          </span>
          <span> New Meeting</span>
        </p>
        <p>
          <span>
            <FaKeyboard />
          </span>{" "}
          <span> Join a meeting</span>
        </p>
      </div>
      <hr />
      <div className={classes.hangout}>
        <h5>Hangout</h5>
        <p>
          <div className={classes.name}>
            <img src={Man} alt="man" /> <span>John doe</span>{" "}
          </div>
          <span className={classes.plus}>+</span>
        </p>
      </div>
    </div>
  );
}

export default SideBar;
