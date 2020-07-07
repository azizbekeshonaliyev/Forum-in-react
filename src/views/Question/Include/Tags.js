import React, { Component } from "react";

export default class Tags extends Component {
  render() {
    return (
      <div className="box-shadow">
        <div className="col-12 bg-topics py-3">
          <span className="h6 text-topics">Teglar buluti</span>
        </div>
        <div className="col-12 bg-white py-3">
          <h6 className="text-center">
            <span className="badge badge-secondary mb-2 ml-1">savol</span>
            <span className="badge badge-secondary mb-2 ml-1">kofalot</span>
            <span className="badge badge-secondary mb-2 ml-1">yangi sug'urta</span>
            <span className="badge badge-secondary mb-2 ml-1">nima uchun</span>
            <span className="badge badge-secondary mb-2 ml-1">uy-joy sug'urtasi</span>
          </h6>
        </div>
      </div>
    );
  }
}
