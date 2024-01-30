import React from "react";

const Page_number = ({
  inital_page_number,
  total_number,
  active_number,
  onPageNumberChange,
}) => {
  const Paging = [];
  for (let index = inital_page_number; index < total_number; index++) {
    if (index + 1 === active_number) {
      Paging.push(
        <button
          className="join-item btn p-2 hover:bg-slate-200 bg-slate-300"
          onClick={() => onPageNumberChange(index + 1)}
        >
          {index + 1}
        </button>
      );
    } else {
      Paging.push(
        <button
          className="join-item btn p-2 hover:bg-slate-200"
          onClick={() => onPageNumberChange(index + 1)}
        >
          {index + 1}
        </button>
      );
    }
  }

  return <div>{...Paging}</div>;
};

export default Page_number;
