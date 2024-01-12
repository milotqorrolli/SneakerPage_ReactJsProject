import React from "react";
import "./women.scss";
import { data } from "../../../assets/data/dummyData";
import img1 from "../../../assets/images/rightphoto.png";
import { Link } from "react-router-dom";
import {BsFillCartFill } from 'react-icons/bs';


function Men() {
  return (
    <div className="women-container" id="women">
      <div className="women-wrapper">
        <h1>FOR WOMEN</h1>
        <div className="cards">
          {data.map((sneaker) => (
            <div className="card1" key={sneaker.id}>
              <ul>
                <li>{sneaker.brand}</li>
                <li className="title">{sneaker.title}</li>
                <li>{sneaker.retailPrice}$</li>
                <li>
                  <img src={sneaker.image} alt={sneaker.title} />
                </li>
              </ul>
              <Link to="/shop">
                <button>
                  <BsFillCartFill />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Men;
