import React from "react";
import "./collection.scss";
import logo from "../../../assets/images/Screenshot_2023-10-04_183337-removebg-preview1111.png";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/rightphoto.png";

function Collection() {

 

  return (
    <div className="collection-container" id="collection">
      <div className="collection-wrapper">
        <h2>OUR COLLECTION</h2>
        <div className="wrappers">
          <div className="wrapper1">
            <div className="wrapwrap">
              <div className="text1">
                <p>
                  BLACK FRIDAY <span>SALES</span>
                </p>
                <h1>
                  UPTO <br />
                  <span>55% OFF</span>
                </h1>
                <Link to="/shop">
                  <button>BUY NOW</button>
                </Link>
              </div>
              <div className="img1">
                <img src={logo} alt="logo" />
              </div>
            </div>
          </div>
          <div className="wrapper2">
            <div className="wrap-1">
              <div className="card2">
                <div className="text1">
                  <h2>PUMA SHOES</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur dicta asperiores
                    dolor laudantium corporis
                  </p>
                  <Link to="/shop">
                    <button>SHOP NOW</button>
                  </Link>
                </div>
                <div className="img1">
                  <img src={img1} alt="img1" />
                </div>
              </div>
            </div>
            <div className="wrap-2">
              <div className="wrap2-1">
                <div className="card3">
                  <h2>CAT SHOES</h2>
                  <img src={img1} alt="img1" />
                </div>
                <Link to="/shop">
                  <button>SHOP NOW</button>
                </Link>
              </div>
              <div className="wrap2-2">
                <div className="card4">
                  <h2>BRAND SHOES</h2>
                  <img src={img1} alt="img1" />
                </div>
                <Link to="/shop">
                  <button>SHOP NOW</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
