import React from "react";
import { Link } from "react-router-dom";

import logo from "assets/images/logo.svg";
import document from "assets/images/document.svg";

import { CREATE } from "constants/routes";

const Home = () => {
  return (
    <>
      <div className="center-content vertical logo-img-wrapper">
        <img effect="blur" src={logo} alt="logo" className="logo-img" />
      </div>

      <div className="center-content vertical horizontal heading-img-wrapper">
        <img
          effect="blur"
          src={document}
          alt="heading"
          className="heading-img"
        />
      </div>

      <div className="center-content vertical horizontal">
        <p className="info">
          This is a tool that helps you to create a resume that you can download
          in PDF format, you can get started by clicking the button below.
        </p>
      </div>
      <div className="center-content vertical horizontal">
        <div className="create-wrapper">
          <Link to={CREATE.INDEX} className="create">
            +
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
