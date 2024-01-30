import {Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import NavbarTop from "./comp/navbartop";
import Footer from "./pages/footer";
import Catagories from "./pages/catagories";
import MainCat from "./pages/dynamicPage/mainCat";
import PageNotFound from "./pages/pagenotfound";
import Company from "./pages/dynamicPage/company";

function App() {
  const { pathname } = useLocation();
  const showNavbar = ["/", "/catagory", "/category", "/company"]; // Include "/company"
  const showFooter = ["/", "/catagory", "/category", "/company"]; // Include "/company"
  const shouldShowNavbar = showNavbar.some((route) => pathname.includes(route));
  const shouldShowFooter = showFooter.some((route) => pathname.includes(route));

  return (
    <>
      {shouldShowNavbar && <NavbarTop />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catagory" element={<Catagories />} />
        <Route path="/company/:companyId" element={<Company />} />
        <Route path="/category/:catagoryID" element={<MainCat />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {shouldShowFooter && <Footer />}
    </>
  );
}

export default App;
