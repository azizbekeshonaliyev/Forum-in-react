import React, { Component } from "react";

export default class Categories extends Component {
  render() {
    return (
      <div class="box-shadow mb-4">
        <div class="col-12 bg-topics py-3">
          <span class="h6 text-topics">Bo'limlar</span>
        </div>
        <div class="col-12 bg-white py-3">
          <ul class="list-unstyled text-secondary">
            <li class="list-item">
              <span class="fa fa-caret-right"></span>&nbsp;&nbsp;
              <a href="#" class="text-secondary">
                Umumiy bo'lim
              </a>
            </li>
            <li class="list-item">
              <span class="fa fa-caret-right"></span>&nbsp;&nbsp;
              <a href="#" class="text-secondary">
                Jamiyat va inson
              </a>
            </li>
            <li class="list-item">
              <span class="fa fa-caret-right"></span>&nbsp;&nbsp;
              <a href="#" class="text-secondary">
                Umumiy savol va javoblar
              </a>
            </li>
            <li class="list-item">
              <span class="fa fa-caret-right"></span>&nbsp;&nbsp;
              <a href="#" class="text-secondary">
                Sug'urta turlari haqida
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
