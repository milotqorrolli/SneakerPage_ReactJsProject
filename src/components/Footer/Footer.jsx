import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const redirectTo = () => {
    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
  }
  
  const redirectToMen = () => {
    document.getElementById("men").scrollIntoView({ behavior: "smooth" });
  }
  
  const redirectToWomen = () => {
    document.getElementById("women").scrollIntoView({ behavior: "smooth" });
  }
  
  const redirectToCollection = () => {
    document.getElementById("collection").scrollIntoView({ behavior: "smooth" });
  }
  
  const redirectToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
      <h3>
          <NavLink onClick={() => redirectTo()} to="/">SNEAK<span>PEAK</span></NavLink>
        </h3>

        {/* className={`${toggleMenu ? "mobile-menu" : ""} menu`}
                onClick={() => toggleBtn()} */}
        <ul>
          <li>
            <NavLink onClick={() => redirectTo()} to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink onClick={() => redirectToCollection()} to="/#collection">COLLECTION</NavLink>
          </li>
          <li>
            <NavLink onClick={() => redirectToMen()} to="/#men">MEN</NavLink>
          </li>
          <li>
            <NavLink onClick={() => redirectToWomen()} to="/#women">WOMEN</NavLink>
          </li>
          
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink onClick={() => redirectTo()} to="/#contact">CONTACT US</NavLink>
          </li>
        </ul>

        <ul>
          <NavLink
            to="https://www.facebook.com"
            target="_blank"

            
            style={{ textDecoration: "none", color: "white" }}
          >
            <FacebookIcon sx={{ fontSize: "23px", padding: "0 5px" }} />
          </NavLink>
          <NavLink
            to="https://www.instagram.com/"
            target="_blank"

            style={{ textDecoration: "none", color: "white" }}
          >
            <InstagramIcon sx={{ fontSize: "23px", padding: "0 5px" }} />
          </NavLink>

          <NavLink
            to="https://twitter.com/home"
            target="_blank"

            style={{ textDecoration: "none", color: "white" }}
          >
            <TwitterIcon sx={{ fontSize: "23px", padding: "0 5px" }} />
          </NavLink>
        </ul>
      </div>
      <p>Copyrights © 2023. All rights reserved.</p>
    </div>
  );
};

export default Footer;
