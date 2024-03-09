import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import closee from "../assets/images/icon-close.svg";
import { useState } from "react";
import arrow from "../assets/images/icon-arrow-dark.svg";

const Header = () => {
  const [openNav, setopenNav] = useState(false);
  const [openNavsection, setopenNavsection] = useState({ one: false, two: false, three: false });

  return (
    <header
      className={
        "flex realative z-10 md:z-30 md:gap-5 md:justify-between justify-between items-center  w-5/6 mx-auto " +
        (openNav ? "!z-30" : "")
      }
    >
      <img src={logo} alt="" />
      {!openNav && (
        <img
          className="cursor-pointer md:hidden"
          onClick={() => setopenNav(!openNav)}
          src={hamburger}
          alt=""
        />
      )}
      {openNav && (
        <img
          className="cursor-pointer md:hidden"
          onClick={() => setopenNav(!openNav)}
          src={closee}
          alt=""
        />
      )}
      <div
        className={
          " shadow-2xl md:shadow-none absolute md:static grow px-5 md:justify-between  top-28 py-5 transition-all left-1/2 translate-x-[-50%] md:translate-x-0 text-heading font-semibold  w-5/6 rounded-xl bg-white md:bg-transparent  flex flex-col md:flex-row items-center gap-10 opacity-0 md:opacity-100 md:z-30 -z-30 " +
          (openNav ? "opacity-100 z-30" : "")
        }
      >
        <div className="flex gap-5 flex-col  w-full md:flex-row">
          <div
            onClick={() =>
              setopenNavsection({ one: !openNavsection.one, two: false, three: false })
            }
            className={
              " headnav h-[50px] overflow-hidden md:overflow-visible " +
              (openNavsection.one ? " !h-[260px]" : "")
            }
          >
            <div className="heading ">
              <button>Product</button>
              <img className={openNavsection.one ? "rotate-180" : ""} src={arrow} alt="" />
            </div>
            <div className={openNavsection.one ? "md:h-[200px]" : " md:h-0"}>
              <p>Overview</p>
              <p>Pricing</p>
              <p>Marketplace</p>
              <p>Features</p>
              <p>Integrations</p>
            </div>
          </div>
          <div
            onClick={() =>
              setopenNavsection({ one: false, two: !openNavsection.two, three: false })
            }
            className={
              " headnav h-[50px] overflow-hidden md:overflow-visible" +
              (openNavsection.two ? " !h-[260px]" : "")
            }
          >
            <div className="heading ">
              <button>Company</button>
              <img className={openNavsection.two ? "rotate-180" : ""} src={arrow} alt="" />
            </div>
            <div className={openNavsection.two ? "md:h-[150px]" : " md:h-0"}>
              <p>About</p>
              <p>Team</p>
              <p>Blog</p>
              <p>Careers</p>
            </div>
          </div>
          <div
            onClick={() =>
              setopenNavsection({ one: false, two: false, three: !openNavsection.three })
            }
            className={
              " headnav h-[50px] overflow-hidden md:overflow-visible " +
              (openNavsection.three ? " !h-[200px] " : "")
            }
          >
            <div className="heading ">
              <button> Connect</button>
              <img className={openNavsection.three ? "rotate-180" : ""} src={arrow} alt="" />
            </div>
            <div className={openNavsection.three ? "md:h-[120px]" : " md:h-0"}>
              <p>Contact</p>
              <p>Newsletter</p>
              <p>LinkedIn</p>
            </div>
          </div>
        </div>
        <div className="nav flex flex-col md:justify-end items-center md:flex-row md:border-none py-5 gap-3 border-t w-full ">
          <button className="text-xl md:text-white">Login</button>{" "}
          <button className="text-xl bg-introMoblie md:bg-white md:bg-none md:hover:bg-CTAhoverbackground md:hover:text-white md:text-CTAtext w-[160px] text-white py-4 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
