import React from "react";
import "../styles/global.css";
import { IoMdSearch } from "react-icons/io";
import { FaPaypal } from "react-icons/fa";
import { SlSocialDropbox } from "react-icons/sl";
import { IoIosStar } from "react-icons/io";
import { FaCrown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="header-hero-container">
      <div className="background-shape"></div>
      <nav className="navbar">
        <div className="navbar-logo">
          <span>
            <FaCrown />
          </span>
          <span>Landguru</span>
        </div>
        <div className="navbar-links">
          <a href="#">Home</a>
          <a href="#">
            Advertise
            <IoIosArrowDown />
          </a>
          <a href="#">
            Supports
            <IoIosArrowDown />
          </a>
          <a href="#">Contact</a>
        </div>
        <button className="navbar-button">Try for free</button>
      </nav>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-rating">
            {[...Array(5)].map((_, index) => (
              <span key={index}>
                <IoIosStar />
              </span>
            ))}

            <p>Trusted by over 4,232 students</p>
          </div>
          <h1>Learn Design with Nia Matos</h1>
          <p className="hero-description">
            Get your blood tests delivered at let home collect sample from the
            victory of the managements that supplies best design system
            guidelines ever.
          </p>
          <div className="hero-search">
            <input type="text" placeholder="Search Course Name" />
            <button className="search-icon">
              <IoMdSearch color="black" />
            </button>
          </div>
          <div className="hero-sponsors">
            <span>Sponsored by:</span>
            <span>
              <FaPaypal />
              PayPal
            </span>
            <span>Google</span>
            <span>
              <SlSocialDropbox /> Dropbox
            </span>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-overlay"></div>
          <div className="hero-image-placeholder">
            {/* <img src="./image3.jpeg" alt="Image" className="card-image" /> */}
            <video
              id="heroVideo"
              src="/vedioplayback.mp4"
              className="card-video"
              muted
              loop
              playsInline
            ></video>
          </div>
          <button className="hero-play-button">
            <span>▶</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
