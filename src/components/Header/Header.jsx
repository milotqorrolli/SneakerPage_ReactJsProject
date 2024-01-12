import React, { useContext, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Context } from "../../Context/Products";
import Basket from "../Basket"

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [state, dispatch] = useContext(Context);
  const [menuVisible, setMenuVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const toggleBtn = () => {
    setToggleMenu(!toggleMenu);
  };

  const redirectTo = () => {
    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
  };

  const redirectToMen = () => {
    document.getElementById("men").scrollIntoView({ behavior: "smooth" });
  };

  const redirectToWomen = () => {
    document.getElementById("women").scrollIntoView({ behavior: "smooth" });
  };

  const redirectToCollection = () => {
    document
      .getElementById("collection")
      .scrollIntoView({ behavior: "smooth" });
  };

  const redirectToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="header-container">
      <div className="header-wrapper">
        <h3>
          <NavLink onClick={() => redirectTo()} to="/">
            SNEAK<span>PEAK</span>
          </NavLink>
        </h3>
        <ul>
          <li>
            <NavLink onClick={() => redirectTo()} to="/">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => redirectToCollection()} to="/#collection">
              COLLECTION
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => redirectToMen()} to="/#men">
              MEN
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => redirectToWomen()} to="/#women">
              WOMEN
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>

          {/* <li>
            <NavLink onClick={() => redirectToAbout()} to="/#about">ABOUT</NavLink>
          </li> */}
          <li>
            <NavLink onClick={() => redirectTo()} to="/#contact">
              CONTACT US
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop">
              <BsFillCartFill />
            </NavLink>
          </li>
          <li>
            <span></span>
          </li>
          <li className="shopallicon">
            <span
              onClick={() => setModalVisible(true)}
              className="shopall-icon-circle"
            >
              <span>{state.basket.length}</span>
              <BsFillCartFill />
            </span>
          </li>
          <li>
            <NavLink to="/profile">
              <CgProfile />
            </NavLink>
          </li>
        </ul>
        <button onClick={() => toggleBtn()} className="btn-menu">
          Menu
        </button>
      </div>
      <Basket open={modalVisible} handleClose={() => setModalVisible(false)} />
    </div>
  );
}

export default Header;
