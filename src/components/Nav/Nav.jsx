import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { navLinks, navRight } from "../../Data/Data";
import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

export default function Nav() {
  const [isNavLinksShowing, setIsNavLinksShowing] = useState(false);
  if (innerWidth < 1024) {
    window.addEventListener("scroll", () => {
      document.querySelector(".nav-links").classList.add("navLinksHide");
      setIsNavLinksShowing(false);
    });
  } else {
    window.addEventListener("scroll", () => {
      document
        .querySelector("nav")
        .classList.toggle("navShadow", window.scrollY > 0);
    });
  }

  return (
    <nav>
      <div className="container nav-container">
        {/* ......... logo ........ */}
        <Link to={"/"} className="logo">
          <img src={Logo} alt="Logo" />
        </Link>
        {/* ......... nav links ........ */}
        <ul
          className={`nav-links ${
            isNavLinksShowing ? "navLinksShow" : "navLinksHide"
          }`}
        >
          {navLinks.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        {/* ......... nav right ........ */}
        <div className="nav-right">
          {navRight.managements.map((item, index) => {
            return (
              <Link
                key={index}
                // target="_blank"
                className="management-icons"
                to={item.link}
              >
                <item.icon />
              </Link>
            );
          })}
          <button
            className="menu-button"
            onClick={() => setIsNavLinksShowing(!isNavLinksShowing)}
          >
            {!isNavLinksShowing ? <VscMenu /> : <GrClose />}
          </button>
        </div>
      </div>
    </nav>
  );
}
