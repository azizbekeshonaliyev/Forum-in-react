import React from "react";

const Navbar = () => {
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
              <div className="dropdown">
                <a
                  className="nav-link"
                  data-toggle="dropdown"
                  id="Preview"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Kirish <span className="fa fa-angle-down"></span>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right ft-sc px-3"
                  aria-labelledby="Preview"
                >
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Login:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Login"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Parol:</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Parol"
                      />
                      <p className="mt-1">
                        <a href="#">Parol esdan chiqdimi?</a>
                      </p>
                    </div>
                    <div className="form-group text-right">
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description">
                          Eslab qolish
                        </span>
                      </label>
                      <button type="submit" className="btn btn-primary btn-sm">
                        Kirish
                      </button>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="text-center py-1">
                      <a href="#">Ro'yhatdan o'tish</a>
                    </div>
                  </form>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ro'yhatdan o'tish
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
