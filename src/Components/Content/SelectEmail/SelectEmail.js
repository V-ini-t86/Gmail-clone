import React from "react";
import { BiLabel } from "react-icons/bi";
import classes from "./SelectEmail.module.css";
import { useSelector } from "react-redux";
import MultipleIcons from "./MultipleIcons/MultipleIcons";

function SelectEmail() {
  const sendEmail = useSelector((state) => state.seeMailReducer);
  return (
    <div>
      <MultipleIcons />
      {/* <AccessTime /> */}
      <hr />
      <div className={classes.heading}>
        <div className={classes.head}>
          <h3 className={classes.h3}>{sendEmail.description}</h3>
          <BiLabel className={classes.label} />
        </div>
        <p>{sendEmail.time}</p>
      </div>
      <p className={classes.p}>{sendEmail.subject}</p>
    </div>
  );
}

export default SelectEmail;
