import React, { useState } from "react";
import DropdownAbout from "./nav-about";
import DropdownGI from "./nav-gi";
import DropdownNews from "./nav-news";
import DropdownResources from "./nav-resources";
import "./styles.css";

function Home() {
  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isGIDropdownOpen, setGIDropdownOpen] = useState(false);
  const [isNewsDropdownOpen, setNewsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const handleAboutMouseEnter = () => {
    setAboutDropdownOpen(true);
  };
  const handleAboutMouseLeave = () => {
    setAboutDropdownOpen(false);
  };

  const handleGIMouseEnter = () => {
    setGIDropdownOpen(true);
  };
  const handleGIMouseLeave = () => {
    setGIDropdownOpen(false);
  };

  const handleNewsMouseEnter = () => {
    setNewsDropdownOpen(true);
  };
  const handleNewsMouseLeave = () => {
    setNewsDropdownOpen(false);
  };

  const handleResourcesMouseEnter = () => {
    setResourcesDropdownOpen(true);
  };
  const handleResourcesMouseLeave = () => {
    setResourcesDropdownOpen(false);
  };

  return (
    <div>
      {/* Header Section */}
      <header className="fixed-header">
        <img
          src="../Box Project Logo Blue No Background copy.png"
          className="tbp-logo"
        />
        <nav className="navbar sticky-top navbar-light bg-white">
          <ul className="ribbon">
            <div
              className="about-container"
              onMouseEnter={handleAboutMouseEnter}
              onMouseLeave={handleAboutMouseLeave}
            >
              <button className="ribbon-about">About</button>
              {isAboutDropdownOpen && <DropdownAbout />}
            </div>
            <div
              className="gi-container"
              onMouseEnter={handleGIMouseEnter}
              onMouseLeave={handleGIMouseLeave}
            >
              <button className="ribbon-gi">Get Involved</button>
              {isGIDropdownOpen && <DropdownGI />}
            </div>
            <div
              className="news-container"
              onMouseEnter={handleNewsMouseEnter}
              onMouseLeave={handleNewsMouseLeave}
            >
              <button className="ribbon-news">News</button>
              {isNewsDropdownOpen && <DropdownNews />}
            </div>
            <div
              className="resources-container"
              onMouseEnter={handleResourcesMouseEnter}
              onMouseLeave={handleResourcesMouseLeave}
            >
              <button className="ribbon-resources">Resources</button>
              {isResourcesDropdownOpen && <DropdownResources />}
            </div>
            <li>
              <a style={{ textDecoration: "none" }} href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <section className="main-content">
        <h1>Create a better tomorrow; make a difference today!</h1>
        <p>
          Our mission is to encourage and enrich the lives of families and
          individuals living in rural poverty <br></br>by establishing
          meaningful relationships, promoting education, and offering material
          aid.
        </p>
      </section>
      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-in">
          <h2>Contact Information</h2>
          <p>Email: example@email.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
