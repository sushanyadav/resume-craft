import React from "react";
import { useLocation, withRouter } from "react-router-dom";

import { CREATE, HOME } from "constants/routes";

const CloseButton = ({ history }) => {
  const handleClose = () => {
    history.push(HOME);
  };

  return (
    <div className="close-button-wrapper" onClick={handleClose}>
      <span className="close-button">&#10006;</span>
    </div>
  );
};

const Layout = ({ children, history }) => {
  const { pathname } = useLocation();

  const isFromForm = pathname.includes(CREATE.INDEX);

  const classNames = ["__layout", "container"];

  if (isFromForm) {
    classNames.push("form-container");
  }

  return (
    <div className={classNames.join(" ")}>
      <div className="card">
        {isFromForm && <CloseButton history={history} />}
        {children}
      </div>
    </div>
  );
};

export default withRouter(Layout);
