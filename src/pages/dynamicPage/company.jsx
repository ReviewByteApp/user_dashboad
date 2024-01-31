import { useParams } from "react-router-dom";
import { Comdata } from "../../constants/will_remove";
import TextRating from "../../comp/rating";
import PromoSwiper from "../../comp/promoswiper";
import MapDis from "../../comp/map";
import { useEffect, useState } from "react";
import CustomizedProgressBars from "../../comp/progress";
import HoverRating from "../../comp/userRating";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const company = () => {
  const companyId = useParams();
  const [addReview, setAddReview] = useState({
    rating: 0,
    review: "",
    reviewtitle: "",
    dateofexperience: "",
  });
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const [totalrating, setTotalrating] = useState(0);
  useEffect(() => {
    const totalCount = Comdata.reviewdata.reduce(
      (acc, item) => acc + item.count,
      0
    );
    setTotalrating(totalCount);
  }, []);
  useEffect;
  return (
    <div className={"bg-[#FBFBFB] w-full overflow-hidden"}>
      {Comdata ? (
        <div>
          <div
            className={
              "bg-[#008CFF] pb-5 h-[240px] px-20 pr-10 text-white font-ubuntu py-5 flex flex-col gap-5"
            }
          >
            <div className={"flex flex-row gap-2"}>
              {" "}
              <p>{Comdata.mancat}</p>
              <p className={"h-[15px] mt-1 w-[2px] bg-slate-100"}></p>
              <p>{Comdata.subcat}</p>
              <p className={"h-[15px] mt-1 w-[2px] bg-slate-100"}></p>
              <p>{Comdata.name}</p>
            </div>
            <div className={"flex flex-row gap-10"}>
              <div className={"w-[150px] h-[150px] rounded-sm overflow-hidden"}>
                <img src={Comdata.logo} alt={Comdata.name} />
              </div>
              <div className={"w-[400px] flex flex-col gap-2"}>
                <div>{Comdata.name}</div>
                <p>{Comdata.reviews.length} reviews</p>
                <div className={"flex flex-row gap-3"}>
                  <TextRating rating={Comdata.rating} />
                  <p>{Comdata.rating}</p>
                </div>
                <div>{Comdata.location}</div>
              </div>
              <div className={"w-[500px] text-center"}>
                {Comdata.description}
              </div>
            </div>
          </div>
          <div
            className={
              "flex flex-row gap-3 w-full pl-20 mt-10 pr-10 py-10 pt-0 h-[450px]"
            }
          >
            <div className={"overflow-hidden w-[50%] mb-10"}>
              <PromoSwiper data={Comdata.promoimage} />
            </div>
            <div className={"overflow-hidden w-[50%]"}>
              <video src={Comdata?.video} controls />
            </div>
          </div>
          <div
            className={"flex flex-row gap-3 w-full justify-between pl-20 pr-10"}
          >
            <div className={"w-[50%] h-[full] rounded-md border-2 shadow-sm"}>
              <MapDis link={Comdata.maplink} />
            </div>
            <div
              className={
                "w-[50%] shadow-sm p-5 flex flex-row justify-between h-[400px] rounded-md border-2 "
              }
            >
              <div>
                <p className={"text-xl font-ubuntu font-semibold"}>
                  What this place offers
                </p>
                <div
                  className={"flex flex-col py-5 gap-3 pl-2 flex-wrap h-full "}
                >
                  {Comdata.offer?.map((item, index) => (
                    <div key={index} className={"flex gap-3 flex-row mr-10"}>
                      <div
                        className={"w-[20px] my-auto h-[20px] bg-slate-400"}
                      ></div>
                      <div>{item}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className={"text-xl font-ubuntu font-semibold"}>Contacts</p>
                <div className={"flex flex-col py-5 gap-3"}>
                  {Comdata.contacts?.map((item, index) => (
                    <div key={index} className={"flex gap-3 flex-row"}>
                      <div className={"w-[20px] h-[20px] bg-slate-400"}></div>
                      <div>{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              "flex flex-row mt-10 pb-20 justify-between w-full ml-20 pr-28"
            }
          >
            <div className={"w-[40%] flex flex-col gap-5  p-5 "}>
              <div
                className={
                  "rounded-md shadow-sm flex flex-col bg-white border p-6 w-full gap-3"
                }
              >
                <div>
                  <p className={"text-xl font-ubuntu font-semibold "}>
                    Reviews
                  </p>
                  <p>{totalrating} total</p>
                </div>
                <div className={"w-full flex flex-col gap-3"}>
                  {Comdata.reviewdata?.map((item, index) => (
                    <div
                      key={index}
                      className={"flex flex-row justify-left gap-4"}
                    >
                      <div
                        className={"w-[30px]  h-[30px] bg-slate-200 rounded-md"}
                      ></div>
                      <p>{item.name}</p>
                      <div className={" flex flex-row gap-3"}>
                        <div className={"w-[250px] overflow-hidden my-auto"}>
                          <CustomizedProgressBars
                            starcount={item.count / totalrating}
                          />
                        </div>
                        <p>{item.count}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={
                  "rounded-md shadow-sm flex flex-col bg-white border p-6 w-full gap-3"
                }
              >
                <form>
                  <div
                    className={
                      "flex flex-row justify-between border-b-2 pb-3 w-full"
                    }
                  >
                    <div
                      className={
                        "w-[50px] h-[50px] rounded-full overflow-hidden"
                      }
                    >
                      <img
                        src={Comdata.reviews[0].profile}
                        alt="user_profile"
                      />
                    </div>
                    <div className={"my-auto"}>
                      <HoverRating />
                    </div>
                  </div>
                  <div className={"flex flex-col gap-3 my-5"}>
                    <p className={"font-roboto"}>
                      Tell us more about your experience
                    </p>
                    <textarea
                      className={"w-full p-3 border rounded-md"}
                    ></textarea>
                    <p className={"font-roboto"}>Give your review title</p>
                    <input
                      type="text"
                      className={"border p-2 rounded-md h-fit"}
                      name="reviewtitle"
                    />
                    <p className={"font-roboto"}>Date of experience</p>
                    <input
                      type="datetime-local"
                      className={"rounded-md border p-1"}
                      name="dateofexperience"
                    />
                  </div>
                  <button
                    type="submit"
                    className={
                      "text-white bg-[#008CFF] p-2 rounded-sm ml-[35%] mt-5 "
                    }
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
            <div className={"w-[60%]"}>
              <div className={"flex flex-row justify-between pt-5 pr-10"}>
                <p>1-20 of 134 results</p>
                <div className={"flex flex-row gap-2 "}>
                  <p className={"my-auto font-ubuntu"}> Sort by፡</p>
                  <select name="sort" className={"border-2 p-1 rounded-md"}>
                    <option value="relevant">Most Relevant</option>
                    <option value="Highrate">high rate</option>
                  </select>
                </div>
              </div>
              <div className={"flex flex-col gap-3 mr-5 mt-5 "}>
                {Comdata.reviews?.map((item, index) => (
                  <div className={"bg-white rounded-md p-5 shadow-lg"}>
                    <div
                      className={
                        "flex flex-row justify-between border-b-2 pb-3"
                      }
                    >
                      <div className={"flex flex-row gap-3"}>
                        <div
                          className={
                            "w-[70px] rounded-full overflow-hidden h-[70px]"
                          }
                        >
                          <img src={item.profile} alt={item.name} />
                        </div>
                        <div className={"my-auto font-ubuntu"}>
                          <p>{item.name}</p>
                          <p>{item.date}</p>
                        </div>
                      </div>
                      <div className={"text-right flex flex-col gap-5"}>
                        <p>{item.date}</p>
                        <div className={"flex flex-row gap-2"}>
                          <div>
                            <TextRating rating={item.rating} />
                          </div>
                          <div
                            className={
                              "w-[20px] h-[20px] bg-slate-300 rounded-sm my-auto"
                            }
                          ></div>
                          <p>{item.location}</p>
                        </div>
                      </div>
                    </div>
                    <div className={"pt-3 pb-2 border-b-2 flex flex-col gap-1"}>
                      <p className={"font-semibold"}>{item.reviewtitle}</p>
                      <div className={"text-sm"}>{item.review}</div>
                      <div className={"text-sm"}>
                        Date of experience:{" "}
                        <span className={"font-thin italic"}>
                          {item.dateofexperience}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={"my-10 ml-[20%]"}>
                <Stack spacing={2}>
                  <Pagination
                    page={page}
                    count={10}
                    onChange={handleChange}
                    variant="outlined"
                    shape="rounded"
                  />
                </Stack>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default company;
