import React from "react";
import { Link } from "react-router-dom";

import * as Icon from "react-bootstrap-icons";

import PropTypes from "prop-types";

const Footer = (props) => {
  const { icon, title } = props;
  return (
    <footer className="container-fluid py-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-4">
            {" "}
            <Link className="navbar-brand text-light" to="/">
              {icon} {title}
            </Link>
          </div>
          <div className="col-8"></div>
        </div>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  title: "E-shop",
  icon: <Icon.Bullseye className="icon sm-icon-l1" />,
};

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default Footer;
