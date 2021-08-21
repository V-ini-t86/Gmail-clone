import React, { createContext, useContext, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./Content.module.css";
import HeadChecker from "./HeadChecker/HeadChecker";
import HeadIcons from "./HeadIcons/HeadIcons";
import Pagination from "./Pagination/Pagination";
import { Switch, Route } from "react-router-dom";
import Starred from "./Starred/Starred";
import Snooze from "./Snooze/Snooze";
import MailBox from "../SideBar/MailBox/MailBox";
import SendMail from "./SendMail/SendMail";
import SelectEmail from "./SelectEmail/SelectEmail";
export const PageContext = createContext();

function Content() {
  const email = useSelector((state) => state.searchReducer);
  const [currentPage, setCurrentPage] = useState(1);
  const tickBox = [];
  const goToNextPage = () => {
    return setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    return setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage);
  };
  const obj = {
    tickBox,
    goToNextPage,
    goToPreviousPage,
  };
  return (
    <PageContext.Provider value={obj}>
      <div className={classes.container}>
        <Switch>
          <Route path="/mail">
            <SelectEmail />
          </Route>
          <Route path="/starred">
            <HeadChecker />
            <hr />
            <Starred />
          </Route>
          <Route path="/drafts">
            <h1>Drafts</h1>
          </Route>
          <Route path="/snoozed">
            <HeadChecker />
            <hr />
            <Snooze />
          </Route>
          <Route path="/sent">
            <HeadChecker />
            <hr />
            <SendMail />
          </Route>
          <Route path="/">
            <HeadChecker />
            <hr />
            <HeadIcons />
            <hr />
            <div>
              <Pagination
                data={email}
                dataLimit={16}
                currentPage={currentPage}
              />
            </div>
          </Route>
        </Switch>
      </div>
    </PageContext.Provider>
  );
}

export default Content;
export const usePageContext = () => useContext(PageContext);
