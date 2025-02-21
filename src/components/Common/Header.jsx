import React from "react";
import { useWindowScroll } from "@uidotdev/usehooks";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [{ x, y }, scrollTo] = useWindowScroll();
  const location = useLocation();

  const isTransparent = (_) => {
    if (y > 20) {
      return `fixed opacity-90 transition duration-300 z-20`;
    } else {
      return `fixed opacity-90 transition duration-300 z-20`;
    }
  };

  isTransparent();

  return (
    <div
      className={`h-14 flex items-center ${
        location.pathname === "/" ? isTransparent() : "sticky"
      } top-0 w-full z-20 bg-light shadow-md`}
    >
      <div className=" w-[95%] md:w-[65%] mx-auto flex justify-between items-center ">
        <Link to={"/"}>
          <div className=" flex items-center gap-1 cursor-pointer ">
            <span className=" text-xl font-semibold ">
              <span className=" text-primary text-xl ">APS</span>.Dev
            </span>
          </div>
        </Link>
        <div>
          {location.pathname === "/" ? (
            <ul className=" flex gap-5  ">
              <li>
                <a
                  href="#home"
                  className={`hidden md:block ${
                    location.hash === "#home"
                      ? "underline decoration-wavy underline-offset-1 decoration-primary"
                      : ""
                  }`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href={"#skills"}
                  className={`hidden md:block ${
                    location.hash === "#skills"
                      ? "underline decoration-wavy underline-offset-1 decoration-primary"
                      : ""
                  }`}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href={"#projects"}
                  className={`hidden md:block ${
                    location.hash === "#projects"
                      ? "underline decoration-wavy underline-offset-1 decoration-primary"
                      : ""
                  }`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href={"#blogs"}
                  className={`hidden md:block ${
                    location.hash === "#blogs"
                      ? "underline decoration-wavy underline-offset-1 decoration-primary"
                      : ""
                  }`}
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href={"#contact"}
                  className={`hidden md:block ${
                    location.hash === "#contact"
                      ? "underline decoration-wavy underline-offset-1 decoration-primary"
                      : ""
                  }`}
                >
                  Contact
                </a>
              </li>
              <li>
                <NavLink
                  to={"/blogs"}
                  className=" underline decoration-wavy underline-offset-1 decoration-primary md:hidden "
                >
                  Blog List
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <NavLink
                  to={"/"}
                  className=" underline decoration-wavy underline-offset-1 decoration-primary md:block "
                >
                  Portfolio
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
