import React, { Component } from "react";

export default class Tags extends Component {
  render() {
    return (
      <div className="box-shadow">
        <div className="col-12 bg-topics py-3">
          <span className="h6 text-topics">Tags</span>
        </div>
        <div className="col-12 bg-white py-3">
          <h6 className="text-center">
            <span className="badge badge-secondary mb-2 ml-1">php</span>
            <span className="badge badge-secondary mb-2 ml-1">laravel</span>
            <span className="badge badge-secondary mb-2 ml-1">java</span>
            <span className="badge badge-secondary mb-2 ml-1">c++</span>
            <span className="badge badge-secondary mb-2 ml-1">vuejs</span>
          </h6>
        </div>
      </div>
    );
  }
}
