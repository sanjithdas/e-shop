import React from "react";

import { Link } from "react-router-dom";

import * as Icon from "react-bootstrap-icons";

import PropTypes from "prop-types";

const Header = (props) => {
  const { title, icon } = props;
  return (
    <React.Fragment>
      <header className="header container-fluid pt-2 pr-2 pl-2 bg-dark text-white">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-dark">
            <Link className="navbar-brand text-light" to="/">
              {icon} {title}
            </Link>
            {/* Hamburger */}
            <button
              className="navbar-toggler border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* Navbar Items */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav">
                <Link className="nav-link" to="/launches">
                  xxxx
                </Link>
                <Link className="nav-link" to="/starship">
                  bbbbb
                </Link>
                <Link className="nav-link" to="/news">
                  nnnnnn
                </Link>
              </div>
            </div>
            {/* END Navbar Items */}
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
};

Header.defaultProps = {
  title: "E-shop",
  icon: <Icon.Bullseye className="icon sm-icon-l1" />,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default Header;
