import React, { Component } from "react";

export default class Tags extends Component {
  render() {
    return (
      <div class="box-shadow">
        <div class="col-12 bg-topics py-3">
          <span class="h6 text-topics">Teglar buluti</span>
        </div>
        <div class="col-12 bg-white py-3">
          <h6 class="text-center">
            <span class="badge badge-secondary mb-2 ml-1">savol</span>
            <span class="badge badge-secondary mb-2 ml-1">kofalot</span>
            <span class="badge badge-secondary mb-2 ml-1">yangi sug'urta</span>
            <span class="badge badge-secondary mb-2 ml-1">nima uchun</span>
            <span class="badge badge-secondary mb-2 ml-1">uy-joy sug'urtasi</span>
          </h6>
        </div>
      </div>
    );
  }
}
