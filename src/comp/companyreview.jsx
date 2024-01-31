import TextRating from "./rating";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const Companyreview = (reviewData) => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div className={""}>
      <div className={" flex flex-row pl-10 text-sm justify-between mr-7"}>
        <div>1-20 of 134 results</div>
        <div className={"flex flex-row gap-2"}>
          <div> Sort by:</div>
          <div>
            {" "}
            <select className={"border"}>
              <option value="1">Most Relevant</option>
              <option value="2"> high rate</option>
              <option value="3"> low rate</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <div className={"flex flex-col gap-3 p-5"}>
          {reviewData?.reviewData.map((item, index) => (
            <div
              key={index}
              className={
                "mr-0 p-4 shadow-xl font-roboto text-sm border rounded-md"
              }
            >
              <div
                className={
                  "w-full flex pb-2 flex-row justify-between relative pt-10 border-b-2 border-slate-200 bg-white"
                }
              >
                <div className={"flex flex-row gap-3"}>
                  <div
                    className={
                      "w-[40px] my-auto h-[40px] rounded-full bg-slate-500"
                    }
                  ></div>
                  <div>
                    <div>{item.name}</div>
                    <div>{item.review_number} review</div>
                  </div>
                </div>
                <div className={"flex flex-row gap-2 justify-start w-[250px]"}>
                  <div className={"my-auto"}>
                    <TextRating rating={item.rating} />
                  </div>
                  <div
                    className={
                      "w-[20px] my-auto h-[20px] bg-slate-400 rounded-sm"
                    }
                  ></div>
                  <p className={"my-auto"}>{item.location}</p>
                </div>
                <p className={"absolute top-0 right-4"}>{item.date}</p>
              </div>
              <div className={"flex flex-col py-5 px-3"}>
                <p className={"py-3"}>{item.review_title}</p>
                <div className={"font-normal font-open-sans"}>
                  {item.review}
                </div>
                <div className={"font-normal font-open-sans"}>
                  Date of experience: <i> {item.date}</i>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={"my-2 py-2 ml-40"}>
          <Stack spacing={2}>
            <Pagination count={10} page={page} onChange={handleChange} />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Companyreview;
