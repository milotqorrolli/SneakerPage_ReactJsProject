import React from 'react';
import "./modal.scss"

const Modal = (props) => {
  const {
    title, cuisine, brand, releaseDate, price, image, closeModal
  } = props;

  return (
    <div className="modal">
      <div className='content-modal'>
        <button className='close' onClick={() => closeModal()}>X</button>
        <img src={image} alt="image" />
        <h2>Title: {title}</h2>
        <h2>Cuisine: {cuisine}</h2>
        <h2>Brand: {brand}</h2>
        <h2>Release Date: {releaseDate}</h2>
        <h2>Price: {price}$</h2>
        <button>Add to cart</button>

      </div>
    </div>
  );
}

export default Modal;