import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./shop.scss";
import Modal from "../Modal/Modal";

function SneakerList() {
  const [data, setData] = useState([]);
  const [single, setSingle] = useState(null);
  
  const getSingleEl = (el) => {
    setSingle(el);
  };


  useEffect(() => {
    axios
      .get("https://example-data.draftbit.com/sneakers?_limit=10")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="shop-container">
      <div className="shop-wrapper">
        <h1>Sneaker List</h1>
        <div className="box-container">
          <ul>
            {data.map((sneaker) => (
              <li key={sneaker.id}>
                <div className="list-container">
                  <img src={sneaker.media.imageUrl} alt={sneaker.title} />
                  <div className="desclist">
                    <h2>{sneaker.title}</h2>
                    <p>Brand: {sneaker.brand}</p>
                    <p>Cuisine: {sneaker.colorway}</p>
                    {/* <p>Release Date: {sneaker.releaseDate}</p> */}
                    <p>Price: {sneaker.retailPrice}$</p>

                  </div>
                </div>
                <Link>
                <button onClick={() => getSingleEl(sneaker)}>Shop Now</button>

                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {single && (
        <Modal
          title={single.title}
          brand={single.brand}
          cuisine={single.colorway}
          image={single.media.imageUrl}
          price={single.retailPrice}
          releaseDate={single.releaseDate}
          closeModal={() => setSingle(null)}
        />
      )}
    </div>
  );
}

export default SneakerList;
