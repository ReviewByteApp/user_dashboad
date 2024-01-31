import React, { useEffect, useState } from "react";
import { Colors } from "../utils/dataReterive";
import { Icons } from "../utils/sample";
import { useDispatch } from "react-redux";
import { changeActive } from "../hooks/feature/activeSlice";
import { Loading } from "../comp/loading";
import { catagoryData, searchPreview } from "../api/acceptApi";
import { Loadingfile } from "../constants/loadingfile";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

const Catagories = () => {
  const [topChatagories, setTopChatagories] = useState([]);
  const [seeMore, setSeeMore] = useState([]);
  const [subcatValue, setSubcatValue] = useState([]);
  const dispatch = useDispatch();
  const [serachValue, setSerachValue] = useState("");
  const [topSearchedData, setTopSearchedData] = useState([]);
  const [subSearchedData, setSubSearchedData] = useState([]);
  const [displaySearch, setDisplaySearch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await catagoryData();
        setTopChatagories(response);
        const initialSeeMore = Array(response.length).fill(false);
        const initialSubcatValue = Array(response.length).fill(5);
        setSeeMore(initialSeeMore);
        setSubcatValue(initialSubcatValue);

        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    dispatch(changeActive("catagory"));
  }, []);

  const handleSeeMore = (index) => {
    const updatedSeeMore = [...seeMore];
    updatedSeeMore[index] = !updatedSeeMore[index];

    const updatedSubcatValue = [...subcatValue];
    if (updatedSeeMore[index]) {
      updatedSubcatValue[index] += 3;
    } else {
      updatedSubcatValue[index] -= 3;
    }

    setSeeMore(updatedSeeMore);
    setSubcatValue(updatedSubcatValue);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const serachvalue = await searchPreview({
          searchvalue: `${serachValue}`,
        });
        setTopSearchedData(serachvalue.businessData);
        setSubSearchedData(serachvalue.subCategories);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [serachValue]);

  return (
    <div>
      <div className={"bg-[#008cff] w-screen px-auto  pt-[80px] h-[280px]"}>
        <div className={"flex flex-col gap-4 mx-auto w-fit z-50"}>
          <p className={"text-white font-bold text-2xl "}>
            What are you looking for?
          </p>
          <div
            onMouseEnter={() => setDisplaySearch(true)}
            onMouseLeave={() => setDisplaySearch(false)}
          >
            <div className=" bg-white relative w-[500px] rounded-xl p-5 py-3">
              <input
                type="text"
                className={"w-full outline-none"}
                onChange={(e) => {
                  setSerachValue(e.target.value || "");
                }}
              />
              <div
                className={
                  "absolute right-3 hover:opacity-90 curso bg-[#008cff] px-3 text-white font-semibold py-1 text top-2 rounded-md"
                }
              >
                search
              </div>
            </div>
            <div
              className={
                displaySearch
                  ? "py-3 pt-12 shadow-2xl left-0 -mt-10 -z-50 bg-white w-full h-fit rounded-b-xl"
                  : "hidden"
              }
            >
              <h1
                className={
                  "font-semibold px-5 border-t-[1px] border-slate-300 pt-3"
                }
              >
                Companies
              </h1>
              <div className={"pb-3"}>
                {topSearchedData.length > 0 ? (
                  <div>
                    {topSearchedData.slice(0, 5)?.map((item, index) => (
                      <Link
                        to={`/company/${item._id}`}
                        key={index}
                        className={
                          "hover:bg-blue-200 cursor-pointer px-5 flex justify-between text-sm py-[3px] mt-2 flex-row"
                        }
                      >
                        <div className={"flex flex-col gap-[1px]"}>
                          <div className={"font-semibold"}>{item.name}</div>
                          <div className={"flex flex-row gap-2"}>
                            <div>{item.city}</div>,{" "}
                            <div className={" flex flex-row gap-2"}>
                              {item.country}
                              <p
                                className={
                                  " bottom-0 mt-1  w-[2px] h-[60%] bg-slate-400"
                                }
                              ></p>
                            </div>{" "}
                            <div>{item.reviewCount} reviews</div>
                          </div>
                        </div>
                        <div className={"flex flex-row gap-2 py-2"}>
                          <div
                            className={
                              "bg-blue-500 h-fit mt-[4px] rounded-sm p-[1px]"
                            }
                          >
                            <StarIcon
                              style={{ color: "white" }}
                              className={"text-xs"}
                            />
                          </div>
                          <p className={"py-1 text-base font-sans"}>
                            {item.reviewCount}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className={"px-5 text-center"}>
                    <p
                      className={
                        "text-xs font-ubuntu text-blue-500 font-semibold"
                      }
                    >
                      -- no data found --
                    </p>
                  </div>
                )}
              </div>
              <h1
                className={
                  "font-semibold px-5 border-t-[1px] border-slate-300 pt-3"
                }
              >
                Catagories
              </h1>
              <div className={"py-3 pt-0"}>
                {subSearchedData.length > 0 ? (
                  <div>
                    {subSearchedData?.map((item, index) => (
                      <div
                        key={index}
                        className={
                          "hover:bg-blue-200 cursor-pointer px-5 flex justify-between text-sm py-[3px] mt-2 flex-row"
                        }
                      >
                        <div className={"flex flex-col gap-[1px]"}>
                          <div className={"font-semibold"}>{item.name}</div>
                          <div className={"flex flex-row gap-2"}>
                            <p className={"line-clamp-1 w-[450px]"}>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Commodi a perferendis facilis
                              illum aliquam repellendus iste, quaerat autem
                              neque amet ratione magnam quisquam, qui similique
                              sunt harum! Quidem, qui quasi?
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={"px-5 text-center"}>
                    <p
                      className={
                        "text-xs font-ubuntu text-blue-500 font-semibold"
                      }
                    >
                      -- no data found --
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"pl-10 pr-10 py-3"}>
        <h1 className="text-2xl font-semibold">
          Explore companies by categories
        </h1>
        <div>
          {topChatagories && topChatagories.length > 0 ? (
            <div className="flex flex-row flex-wrap px-10 my-5 py-5 justify-left gap-5  mt-10  w-full">
              {topChatagories?.map((category, index) => (
                <li
                  className="list-none  -z-10 relative pb-10 w-[280px] mt-3 border-2 h-fit shadow-md rounded-lg bg-white p-5"
                  key={category.catId}
                >
                  <div
                    className={`rounded-t-xl py-7`}
                    style={{ backgroundColor: `${Colors[index]}` }}
                  >
                    <div className="flex flex-col justify-center">
                      <div className="bg-black rounded-sm mx-auto w-12 p-2 h-12">
                        {Icons[index]}
                      </div>
                      <a
                        href={`/category/${category.name}`}
                        className="mx-auto font-semibold text-base my-2 cursor-pointer"
                      >
                        {category.name}
                      </a>
                    </div>
                  </div>
                  <div>
                    {category.subcategory
                      .slice(0, subcatValue[index])
                      .map((listItem, subIndex) => (
                        <li
                          className="list-none cursor-pointer hover:text-blue-500 text-sm px-1 py-2 border-b-2 border-slate-300"
                          key={subIndex}
                        >
                          {listItem.name}
                        </li>
                      ))}
                    <div className={"absolute bottom-2 right-5"}>
                      {category.subcategory.length > 5 &&
                        (seeMore[index] ? (
                          <div
                            className={"text-sm hover:opacity-80 font-semibold"}
                            onClick={() => handleSeeMore(index)}
                            style={{ color: "#008cff", cursor: "pointer" }}
                          >
                            See Less
                          </div>
                        ) : (
                          <div
                            className={"text-sm font-semibold"}
                            onClick={() => handleSeeMore(index)}
                            style={{ color: "#008cff", cursor: "pointer" }}
                          >
                            See More
                          </div>
                        ))}
                    </div>
                  </div>
                </li>
              ))}
            </div>
          ) : (
            <div className="flex flex-row flex-wrap px-10 my-5 py-5 justify-left gap-5  mt-10  w-full">
              {Loadingfile.map((item, index) => (
                <Loading key={index} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={"bg-blue-400 h-[400px]"}></div>
    </div>
  );
};

export default Catagories;
