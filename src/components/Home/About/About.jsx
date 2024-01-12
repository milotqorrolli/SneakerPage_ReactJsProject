import React from "react";
import logo from "../../../assets/images/third-removebg-preview1.png";
import img2 from "../../../assets/images/rightphoto.png";
import { Link } from "react-router-dom";
import "./about.scss";

function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-wrapper">
        {/* <h1>About us</h1> */}

        <div className="about-wrappers">
          <div className="hero1">
            <div className="hero1-wrapper">
            <p className="p-title">About us</p>
            <h2>
              Elevate your look with <span>shoes</span>
            </h2>
            <p>
              *from sneakers to stilets to your shoe destination experience
              comfort and style with our shoes
            </p>
            <div className="about-buttons">
              <Link>
                <button>BUY NOW</button>
              </Link>
              <Link>
                <button className="second-button">Learn more</button>
              </Link>
            </div>
            </div>
          </div>
          <div className="hero2">
            <img src={logo} alt="third" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
