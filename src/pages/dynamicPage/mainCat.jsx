import React, { useState } from "react";
import { useParams } from "react-router-dom";
import locations from "../../JsonFIles/reviewbyte.json";
import Rating from "../../comp/rating";
import { MdOutlineEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Page_number from "../../comp/page_number";

const MainCat = () => {
  const { catagoryID } = useParams();
  const catagory = catagoryID;
  const totalPage = 20;
  const [inital_page_number, setInitial_page_number] = useState(0);
  const [viewPages, setViewPage] = useState(5);
  const [activePage, setActivePage] = useState(0);
  const [lastPage, setLastPage] = useState(false);
  const onPageNumberChange = (actve_page) => {
    setLastPage(false);
    if (actve_page <= 0) {
      setActivePage(1);
    } else if (actve_page > totalPage) {
      setLastPage(true);
      setActivePage(totalPage);
    } else {
      setActivePage(actve_page);
      if (actve_page >= 3) {
        setInitial_page_number(actve_page - 3);
        setViewPage(actve_page + 2);
      } else if (
        actve_page >= totalPage - 3 &&
        totalPage > 5 &&
        actve_page < totalPage
      ) {
        setInitial_page_number(totalPage - 5);
        setViewPage(totalPage);
      } else {
        setInitial_page_number(0);
        setViewPage(5);
      }
    }
  };
  const listOfCountry = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "Brazil",
    "India",
    "South Africa",
  ];

  const subcategories = [
    "Dentists",
    "Hospitals",
    "Pharmacies",
    "Fitness Centers",
    "Spas",
    "Clinics",
    "Health Clubs",
    "Medical Specialists",
    "Wellness Centers",
    "Nursing Homes",
  ];
  return (
    <div className={"min-h-screen overflow-x-hidden "}>
      <div className={"bg-[#008cff] w-screen px-auto  pt-[80px] h-[280px]"}>
        <div className="text-white mx-auto w-fit">
          <p className={"text-3xl text-center font-semibold m-2"}>
            {catagoryID}
          </p>
          <div
            className={
              "text-black bg-white flex flex-row justify-between px-2 w-[570px] py-2 rounded-md"
            }
          >
            <input
              type="text"
              name="input_value"
              className={"w-[90%] border-0 outline-none focus:border-0 px-5 "}
            />
            <button
              type="button"
              className={
                "text-white font-semibold bg-[#008cff] px-3 py-2 rounded-[10px]"
              }
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className={"flex flex-row gap-5 p-10"}>
        <div
          className={
            "w-[30%] border-2 pb-10 mt-10 shadow-md  rounded-lg px-10 py-3"
          }
        >
          <div>
            <p className={"text-base font-bold"}>Rating</p>
            <div className={"flex flex-row my-3"}>
              <li
                className={
                  "list-none px-2 border rounded-l-md border-slate-500  py-1"
                }
              >
                Any
              </li>
              <li
                className={
                  "list-none px-2 border-r border-y border-slate-500  py-1"
                }
              >
                3.0+
              </li>
              <li
                className={
                  "list-none px-2 border-r border-y border-slate-500  py-1"
                }
              >
                4.0+
              </li>
              <li
                className={
                  "list-none px-2 border-r border-y border-slate-500  py-1 rounded-r-md"
                }
              >
                4.5+
              </li>
            </div>
          </div>
          <div className={"my-10"}>
            <p className={"text-base font-bold"}>Location</p>
            <select
              defaultValue={""}
              className="select select-bordered w-full max-w-xs px-2 py-2 active:outline focus:outline-2 rounde-md border-2"
            >
              <option disabled selected>
                location
              </option>
              {listOfCountry.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div>
            <div>Sub category</div>
            <div className={"flex pt-4 flex-row flex-wrap gap-2"}>
              {subcategories.map((subcategory, index) => (
                <li
                  key={index}
                  className={
                    "list-none px-2 w-[90px] text-sm border-2 rounded-md py-1"
                  }
                >
                  {subcategory}
                </li>
              ))}
            </div>
          </div>
        </div>
        <div className={"w-[70%]"}>
          <div className={"flex flex-row justify-between gap-1 px-10"}>
            <div>1-20 of 123 results</div>
            <div className={"flex flex-row w-[250px] justify-end"}>
              <p className={"py-1 mr-2"}>Sort by</p>
              <select
                defaultValue={""}
                className={
                  "border active:outline-none focus:outline-none px-1 py-1 rounded-md select-sm"
                }
              >
                <option disabled selected>
                  location
                </option>
                {listOfCountry.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={"flex flex-col gap-5 mt-5"}>
            {locations.map((location, index) => (
              <li
                key={index}
                className={
                  "list-none flex flex-col gap-5 p-3 border shadow-md mx-3 rounded-2xl"
                }
              >
                <div className={"flex flex-row h-[130px] gap-5 justify-start"}>
                  <div
                    className={"bg-slate-300 mt-1 mb-5 w-[130px] mr-0 m-3"}
                  ></div>
                  <div>
                    <h1 className={"text-xl font-bold"}>{location.name}</h1>
                    <div className={"flex flex-row gap-1 mt-2 font-semibold"}>
                      <div className={"flex flex-row gap-5 "}>
                        <div className={"text-yellow-500 -mt-5"}>
                          <Rating rating={location.reviewScore.toFixed(0)} />
                        </div>
                        <p
                          className={
                            "border-r-2 -ml-5 border-slate-500 py-0 px-2"
                          }
                        >
                          {" "}
                          Score {location.reviewScore}
                        </p>
                      </div>
                      <div>{location.reviewCount} reviews</div>
                    </div>
                    <p className={"font-semibold"}>
                      {location.city} , {location.country}
                    </p>
                  </div>
                </div>
                <div
                  className={
                    "flex flex-row justify-between px-10 pl-3 pt-0 -mt-7 "
                  }
                >
                  <div className={"flex flex-row gap-3 px-2"}>
                    <a href="mailto:" className={"bg-slate-300 p-1 rounded-md"}>
                      <MdOutlineEmail className={"text-2xl"} />
                    </a>
                    <a className={"bg-slate-300 p-1 rounded-md"}>
                      <CgWebsite className={"text-2xl"} />{" "}
                    </a>
                    <a className={"bg-slate-300 p-1 rounded-md"}>
                      <HiOutlineLocationMarker className={"text-2xl"} />
                    </a>
                  </div>
                  <div>latest reviews</div>
                </div>
              </li>
            ))}
            <div className={"join mx-auto flex flex-row gap-4 mt-4"}>
              <button
                onClick={() => onPageNumberChange(activePage - 1)}
                className="join-item btn hover:bg-slate-200 border rounded-sm p-2"
              >
                Previous
              </button>
              <Page_number
                onPageNumberChange={onPageNumberChange}
                inital_page_number={inital_page_number}
                total_number={viewPages}
                active_number={activePage}
              />

              <button className="join-item btn p-2 hover:bg-slate-200">
                ...
              </button>
              <button
                onClick={() => onPageNumberChange(activePage + 1)}
                className={
                  "join-item btn hover:bg-slate-200 border rounded-sm p-2" +
                  (lastPage ? "hidden" : "")
                }
              >
                Next
              </button>
              <button
                onClick={() => onPageNumberChange(totalPage)}
                className="join-item btn hover:bg-slate-200 border rounded-sm p-2 px-3"
              >
                Last
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCat;
