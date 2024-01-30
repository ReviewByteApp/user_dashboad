import React, { useEffect, useState } from "react";
import { catagoryData } from "../api/acceptApi";
import { Colors } from "../utils/dataReterive";
import { Icons } from "../utils/sample";
import { useDispatch } from "react-redux";
import { changeActive } from "../hooks/feature/activeSlice";
import { Loadingfile } from "../constants/loadingfile";
import { Loading } from "../comp/loading";

const Catagories = () => {
  const [topChatagories, setTopChatagories] = useState([]);
  const [seeMore, setSeeMore] = useState([]);
  const [subcatValue, setSubcatValue] = useState([]);
  const dispatch = useDispatch();

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

  return (
    <div>
      <div className={"bg-[#008cff] w-screen px-auto  pt-[80px] h-[280px]"}>
        <div className="text-white mx-auto w-fit">
          <p className={"text-3xl font-semibold m-2"}>
            What are you looking for?
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
                "text-white font-semibold bg-[#008cff]px-3 py-2 rounded-[10px]"
              }
            >
              Search
            </button>
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
                  className="list-none relative pb-10 w-[280px] mt-3 border-2 h-fit shadow-md rounded-lg bg-white p-5"
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
