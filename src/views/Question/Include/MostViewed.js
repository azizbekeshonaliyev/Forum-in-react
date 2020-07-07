import React, { Component } from "react";

export default class MostViewed extends Component {
  render() {
    return (
      <div className="box-shadow mb-4">
        <div className="col-12 bg-topics py-3">
          <span className="h6 text-topics">Most viewed</span>
        </div>
        <div className="col-12 bg-white py-3">
          <ul className="list-unstyled text-secondary">
            <li className="list-item">
              <span className="badge badge-secondary">
                <span className="fa fa-eye"></span> 158
              </span>
              <a href="#" className="text-secondary">
                10 Kids Unaware of Their Halloween Costume
              </a>
            </li>
            <li className="list-item">
              <span className="badge badge-secondary">
                <span className="fa fa-eye"></span> 113
              </span>
              <a href="#" className="text-secondary">
                What Instagram Ads Will Look Like
              </a>
            </li>
            <li className="list-item">
              <span className="badge badge-secondary">
                <span className="fa fa-eye"></span> 102
              </span>
              <a href="#" className="text-secondary">
                The Future of Magazines Is on Tablets
              </a>
            </li>
            <li className="list-item">
              <span className="badge badge-secondary">
                <span className="fa fa-eye"></span> 100
              </span>
              <a href="#" className="text-secondary">
                Pinterest Now Worth $3.8 Billion
              </a>
            </li>
            <li className="list-item">
              <span className="badge badge-secondary">
                <span className="fa fa-eye"></span> 91
              </span>
              <a href="#" className="text-secondary">
                Forum with long description and subforums
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
