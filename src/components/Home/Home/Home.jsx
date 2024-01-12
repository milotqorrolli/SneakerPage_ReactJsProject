import React from "react";
import "./home.scss";
import logo from "../../../assets/images/third-removebg-preview1.png";
import img2 from "../../../assets/images/rightphoto.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    
      <div className="hero-container" id="hero">
        <div className="hero-wrapper">
          <div className="hero1">
            <p className="p-title">SNEAKPEAK</p>
            <h2>
              THE ULTIMATE <span>SNEAK</span> SHOE PARADISE
            </h2>
            <p>
              FEEL FREE TO ADAPT THESE SUGGESTIONS ACCORDING TO YOUR CONTEXT{" "}
            </p>
            <Link to="/shop">
              <button>BUY NOW</button>
            </Link>
          </div>
          <div className="hero2">
            <img src={logo} alt="third" />
          </div>
          <div className="hero3">
            <div className="img1">
              <img src={img2} alt="img2" />
            </div>
            <div className="img2">
              <img src={img2} alt="img2" />
            </div>
            <div className="img3">
              <img src={img2} alt="img2" />
            </div>
            <div className="img4">
              <img src={img2} alt="img2" />
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Home;
