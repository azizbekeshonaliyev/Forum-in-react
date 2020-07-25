import React from "react";
import { Link } from "react-router-dom";

const TheHeader = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark bg-primary sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          Forum
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Developers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQ
              </a>
            </li>
            <li className="nav-item">
                <Link
                    to="/login"
                    className="nav-link"
                    data-toggle="dropdown"
                    id="Preview"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    Kirish
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/register" className="nav-link">
                    Ro'yhatdan o'tish
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TheHeader;
