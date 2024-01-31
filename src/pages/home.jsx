import React, { useEffect, useState } from "react";
import { subCatagories } from "../utils/dataReterive";
import Rating from "../comp/rating";
import { Icons, ProfielImage } from "../utils/sample";
import { catagoryData, searchPreview, recentReviews } from "../api/acceptApi";
import Logo from "../assets/review_logo.png";
import { Loadingfile } from "../constants/loadingfile";
import { Loading, Loading2 } from "../comp/loading";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [topChatagories, setTopChatagories] = React.useState(subCatagories);
  const [recentReview, setRecentReview] = useState([]);
  const [serachValue, setSerachValue] = useState("");
  const [topSearchedData, setTopSearchedData] = useState([]);
  const [subSearchedData, setSubSearchedData] = useState([]);
  const [displaySearch, setDisplaySearch] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await catagoryData();
        const Recent_review = await recentReviews();
        setTopChatagories(response);
        setRecentReview(Recent_review);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

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
    <div className={"min-h-screen bg-[#F9F9F9]"}>
      <div
        className={
          "relative flex flex-row justify-between h-[280px] pl-10 pt-20 p-10 bg-[#008cff]"
        }
      >
        <div className={"flex flex-col gap-4 z-10"}>
          <p className={"text-white font-bold text-2xl "}>where to?</p>
          <div
            onMouseEnter={() => setDisplaySearch(true)}
            onMouseLeave={() => setDisplaySearch(false)}
          >
            <div className="z-50 bg-white relative w-[500px] rounded-xl p-5 py-3">
              <input
                type="text"
                name="searchQuery"
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
                  ? "py-3 pt-12 shadow-2xl left-0 -mt-10 z-50 bg-white w-full h-fit rounded-b-xl"
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
        <div className={" absolute right-10  top-3 flex flex-col gap-3"}>
          <div className={"flex flex-row gap-2 justify-end "}>
            <div className="bg-white w-[75px] mt-2 h-[75px] rounded-full"></div>
            <img
              src={Logo}
              className={
                "w-[200px] text-center py-3 px-3 text-3xl font-semibold bg-white rounded-l-[50px]"
              }
            />
          </div>
          <div
            className={
              " text-center py-5 w-[400px] h-[145px] bg-white rounded-l-[100px]"
            }
          >
            <h1 className={"text-xl font-serif font-semibold"}>
              Your first choose
            </h1>
            <h1 className={"px-5 py-3 pt-3 text-base italic font-semibold"}>
              Review websites: the voice of the people, the compass of consumer
              choice.
            </h1>
          </div>
        </div>
      </div>
      <div className={"flex flex-col gap-3 px-10 mt-6 py-5"}>
        <div className={"flex flex-row pl-[0px] justify-between "}>
          <div className={"font-semibold text-2xl"}>
            Discover your new favourite Place
          </div>
          <div
            className={
              "bg-[#008cff] cursor-pointer p-2 px-5 hover:opacity-80 font-mono text-md  rounded-full text-white font-semibold"
            }
          >
            see all
          </div>
        </div>
        <div>
          {topChatagories && topChatagories.length >= 0 ? (
            <div className={" pl-[0px] py-5 grid grid-cols-4 gap-5 "}>
              {topChatagories.map((item, index) => (
                <li
                  key={index}
                  className={
                    "list-none flex py-4 pl-5 flex-row gap-3 border bg-white rounded-xl"
                  }
                >
                  <div
                    className={"p-2 w-fit h-fit my-auto bg-black rounded-md"}
                  >
                    {Icons[index]}
                  </div>
                  <div className={"font-semibold text-left py-2 px-3"}>
                    {item.name}
                  </div>
                </li>
              ))}
            </div>
          ) : (
            <div className={" pl-[0px] py-5 grid grid-cols-4 gap-5 "}>
              {Loadingfile.map((item, index) => (
                <Loading2 key={index} />
              ))}
            </div>
          )}
        </div>
        <div>
          {recentReview && recentReview.length >= 0 ? (
            <div className={"list-none grid grid-cols-4 gap-5 pr-0 pl-0 "}>
              {recentReview.map((item, index) => (
                <li
                  key={index}
                  className={"bg-white  p-[10px] rounded-[10px] border"}
                >
                  <div className="flex flex-row gap-2">
                    <img
                      className="rounded-full w-[60px] h-[60px] bg-contain"
                      src={ProfielImage[index]}
                      alt="profile_image"
                    />

                    <div className={"z-0"}>
                      <Rating className={""} rating={item.rate} />
                    </div>
                  </div>
                  <div className={"text-sm font-semibold my-3"}>
                    {item.customerName} reviwed{" "}
                    <a href="" className={"text-blue-700"}>
                      {" "}
                      {item.businessName}
                    </a>
                  </div>
                  <div className={"line-clamp-5 text-xs font-mono"}>
                    {item.description}
                  </div>
                </li>
              ))}
            </div>
          ) : (
            <div className={"list-none grid grid-cols-4 gap-5 pr-0 pl-0 "}>
              {Loadingfile.map((item, index) => (
                <Loading key={index} />
              ))}
            </div>
          )}
        </div>
        <div className={"bg-blue-400 h-[400px]"}></div>
      </div>
    </div>
  );
};

export default HomePage;
