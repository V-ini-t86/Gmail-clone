import React from "react";
import classes from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { dataReset, searchResult } from "../../../redux/action/search";
import { BsSearch } from "react-icons/bs";

function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [searchBarWhite, setSearchBarWhite] = useState(false);
  const dispatch = useDispatch();
  const gatherSearchData = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };
  const handlingSearch = (e) => {
    e.preventDefault();
    if (searchText.length === 0) {
      console.log("lkdl");
      dispatch(dataReset());
    } else {
      dispatch(searchResult(searchText));
    }
  };
  const searchBarHandler = (e) => {
    setSearchBarWhite(true);
  };
  // console.log(searchText);
  return (
    <form
      onSubmit={handlingSearch}
      onClick={searchBarHandler}
      className={classes.form}
    >
      <div className={classes.search}>
        {/* <img className={classes.searchIcon} src={search} alt="search" /> */}
        <BsSearch className={classes.searchIcon} />
        <input
          value={searchText}
          onChange={gatherSearchData}
          className={classes.input}
          type="text"
          placeholder="Search mail"
        />
      </div>
    </form>
  );
}

export default SearchBar;
