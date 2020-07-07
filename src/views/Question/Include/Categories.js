import React, { Component } from "react";

export default class Categories extends Component {
  render() {
    return (
      <div className="box-shadow mb-4">
        <div className="col-12 bg-topics py-3">
          <span className="h6 text-topics">Categories</span>
        </div>
        <div className="col-12 bg-white py-3">
          <ul className="list-unstyled text-secondary">
            <li className="list-item">
              <span className="fa fa-caret-right"></span>&nbsp;&nbsp;
              <a href="#" className="text-secondary">
                C++
              </a>
            </li>
            <li className="list-item">
              <span className="fa fa-caret-right"></span>&nbsp;&nbsp;
              <a href="#" className="text-secondary">
                Python
              </a>
            </li>
            <li className="list-item">
              <span className="fa fa-caret-right"></span>&nbsp;&nbsp;
              <a href="#" className="text-secondary">
                Laravel
              </a>
            </li>
            <li className="list-item">
              <span className="fa fa-caret-right"></span>&nbsp;&nbsp;
              <a href="#" className="text-secondary">
                Django
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
