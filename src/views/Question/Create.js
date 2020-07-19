import React, { Component } from "react";

export default class Create extends Component {
  render() {
    const {title,desc,submit,handleTitleChange,handleDescChange} = this.props;
    return (
        <div className="col-12 col-sm-12 p-0">
          <div className="box-shadow mb-4">
            <div className="col-12 bg-topics py-3">
              <span className="h6 text-topics">
                <span className="fa fa-plus"></span> Forumga yangi savol
                qo'shish
              </span>
            </div>
            <div className="col-12 bg-white py-4 topics">
              <div className="row">
                <dir className="col-10 col-sm-10 col-md-12 col-lg-10 mx-auto">
                  <form onSubmit={submit}>
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-3 col-form-label"
                      >
                        Savol mavzusi:
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="input"
                          className="form-control"
                          id="inputEmail3"
                          value={title}
                          onChange={handleTitleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-3 col-form-label"
                      >
                        Savol matni:
                      </label>
                      <div className="col-sm-9">
                        <textarea
                          className="form-control"
                          rows="5"
                          value={desc}
                          onChange={handleDescChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-12 text-right">
                        <button
                          type="submit"
                          className="btn btn-primary btn-sm"
                        >
                          Qo'shish
                        </button>
                      </div>
                    </div>
                  </form>
                </dir>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
