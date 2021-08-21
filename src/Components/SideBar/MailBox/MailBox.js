import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { send } from "../../../redux/action/send";

import classes from "./MailBox.module.css";
function MailBox({ cross }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [textBox, setTextBox] = useState("");
  const sendersHandler = (e) => {
    setEmail(e.target.value);
  };
  const subjectHandler = (e) => {
    setSubject(e.target.value);
  };
  const textBoxHandler = (e) => {
    setTextBox(e.target.value);
  };
  let url = "http://localhost:5001/g-mailapi/us-central1/sendEmail";

  const submitHandler = (e) => {
    e.preventDefault();
    let id = Date.now();
    let time = new Date().toLocaleDateString();
    dispatch(send(id, email, subject, textBox, time));
    const data = {
      email,
      subject,
      message: textBox,
    };
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    setEmail("");
    setTextBox("");
    setSubject("");
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.headerForm}>
        <h5>New Message</h5>
        <h5 className={classes.cross} onClick={cross}>
          X
        </h5>
      </div>
      <input
        onChange={sendersHandler}
        type="text"
        value={email}
        placeholder="To :"
      />
      <input
        onChange={subjectHandler}
        type="text"
        placeholder="Subject "
        value={subject}
      />
      <textarea
        onChange={textBoxHandler}
        className={classes.description}
        type="textbox"
        placeholder="Description "
        value={textBox}
      />
      <button onClick={submitHandler}>Send</button>
    </form>
  );
}

export default MailBox;
