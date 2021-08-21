import React, { useState } from "react";
import MailBox from "../MailBox/MailBox";
import classes from "./ComposeButton.module.css";
function ComposeButton() {
  const [showMail, setShowMail] = useState(false);
  const composeHandler = (e) => {
    setShowMail((prev) => !prev);
  };
  return (
    <React.Fragment>
      <button onClick={composeHandler} className={classes.compose}>
        <span>+</span>
        <h4>Compose</h4>
      </button>
      {showMail && <MailBox cross={composeHandler} />}
    </React.Fragment>
  );
}

export default ComposeButton;
