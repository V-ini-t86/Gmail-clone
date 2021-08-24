import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";

function Starred() {
  //   const obj = {
  //     goToNextPage,
  //     goToPreviousPage,
  //   };
  const email = useSelector((state) => state.searchReducer);
  const starredId = useSelector((state) => state.starredReducer);
  let starredData = email.filter((val) => starredId.includes(val.id));
  for (let i = 0; i < starredData.length; i++) {
    starredData[i].starred = !starredData[i].starred;
  }
  // starredData = starredData.forEach((val) => {
  //   return (val.starred = true);
  // });

  // let starredData = [];
  // starredId.forEach((element) => {
  //   starredData.push(
  //     email.filter((val) => {
  //       return val.id === element;
  //     })[0]
  //   );
  // });

  console.log(starredData);
  return (
    <div>
      <Pagination
        data={starredData}
        dataLimit={10}
        currentPage={1}
        path="/starred"
      />
    </div>
  );
}

export default Starred;
