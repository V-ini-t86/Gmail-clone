import React from "react";
import Email from "../Emails/Email";

function Pagination({ data, dataLimit, currentPage }) {
  // const page = Math.round(data.length / dataLimit);

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    const newData = Object.values(data);
    return newData.slice(startIndex, endIndex);
  };
  //   const obj = [goToNextPage, goToPreviousPage];
  return (
    <div>
      {getPaginatedData().map((d, i) => {
        return (
          <Email
            key={d.id}
            id={d.id}
            company={d.company_Name}
            description={d.description}
            time={d.time}
          />
        );
      })}
    </div>
  );
}

export default Pagination;
