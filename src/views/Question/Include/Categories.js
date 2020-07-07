import React, { Component } from "react";

export default class Categories extends Component {
  render() {
    return (
      <div className="box-shadow mb-4">
        <div className="col-12 bg-topics py-3">
          <span className="h6 text-topics">Bo'limlar</span>
        </div>
        <div className="col-12 bg-white py-3">
          <ul className="list-unstyled text-secondary">
            <li className="list-item">
              <span className="fa fa-caret-right"></span>&nbsp;&nbsp;
              <a href="#" className="text-secondary">
                Umumiy bo'lim
              </a>
            </li>
            <li className="list-item">
              <span className="fa fa-caret-right"></span>&nbsp;&nbsp;
              <a href="#" className="text-secondary">
                Jamiyat va inson
              </a>
            </li>
            <li className="list-item">
              <span className="fa fa-caret-right"></span>&nbsp;&nbsp;
              <a href="#" className="text-secondary">
                Umumiy savol va javoblar
              </a>
            </li>
            <li className="list-item">
              <span className="fa fa-caret-right"></span>&nbsp;&nbsp;
              <a href="#" className="text-secondary">
                Sug'urta turlari haqida
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
