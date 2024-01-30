import Logo from "../assets/review_logo.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../style/style.css";
import { useState } from "react";
const NavbarTop = () => {
  const [catHover, setCathover] = useState(false);
  const [bloghover, setBloghover] = useState(false);
  const activePage = useSelector((state) => state.active.value);
  return (
    <div
      className={
        " h-[80px] px-10 flex flex-row justify-between items-center"
      }
    >
      <Link to="/">
        <img src={Logo} alt="logo" className={"h-[50px] "} />
      </Link>
      <div className={"flex flex-row gap-10 font-semibold text-[#008cff]"}>
        <Link
          to="/catagory"
          onMouseEnter={() => setCathover(true)}
          onMouseLeave={() => setCathover(false)}
          className={"list-none hover:scale-105 relative"}
        >
          Catagories
          <div
            className={
              catHover || activePage === "catagory"
                ? "home_underline -mt-[2px] w-[125px] h-[2px] bg-[#008cff]"
                : "hidden "
            }
          ></div>
        </Link>
        <li
          onMouseEnter={() => setBloghover(true)}
          onMouseLeave={() => setBloghover(false)}
          className={"list-none relative"}
        >
          Blog
          <div
            className={
              bloghover || activePage === "blog"
                ? "home_underline -mt-[2px] w-[125px] h-[2px] bg-[#008cff]"
                : "hidden "
            }
          ></div>
        </li>
        <li className={"list-none"}>Sign In</li>
      </div>
    </div>
  );
};

export default NavbarTop;
