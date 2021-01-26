import React from "react";
import { Link, useLocation } from "react-router-dom";

import { CREATE, HOME } from "constants/routes";

const NotFound = ({ heading }) => {
  const { pathname } = useLocation();

  let goTo = {
    path: HOME,
    text: "Home",
  };

  const isFromCreate = pathname.includes(CREATE.INDEX);

  if (isFromCreate) {
    goTo.path = CREATE.INDEX;
    goTo.text = "create a beautiful resume";
  }

  return (
    <>
      <h1>{heading}</h1>
      <p className="not-found-message">
        Go back to <Link to={goTo.path}> {goTo.text} </Link>
      </p>
    </>
  );
};

export default NotFound;
