import React from "react";
import "./styles.css";

const NavAbout = () => {
  return (
    <div className="about-container">
      <ul className="dropdown-about">
        <li>
          <a style={{ textDecoration: "none" }} href="#">
            Our History
          </a>
        </li>
        <li>
          <a style={{ textDecoration: "none" }} href="#">
            Our Community
          </a>
        </li>
        <li>
          <a style={{ textDecoration: "none" }} href="#">
            Our Impact
          </a>
        </li>
      </ul>
      {/* )} */}
    </div>
  );
};
export default NavAbout;
