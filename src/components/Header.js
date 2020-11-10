import React from "react";
import Logo from "../img/deliv.png";

const Header = ({ data, isLoading }) => {
  return isLoading ? (
    <span>en cours de chargement</span>
  ) : (
    <>
      <header className="Header">
        <div className="topBar">
          <div className="topBar--center">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="section1">
          <div className="section11">
            <div className="section111">
              <h1>{data.restaurant.name}</h1>
              <p className="descri">{data.restaurant.description}</p>
            </div>
            <img
              className="img-cov"
              src={data.restaurant.picture}
              alt="img-cober"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
