import React from "react";

const QuestionItem = props => {  
    const rows = props.questions.map((row, index) => {
      return (
        <div key={index} className="box-shadow mb-4">
          <div className="col-12 bg-white py-4 topics">
            <div className="row">
              <div className="col-2 no-guttesr text-center">
                <div className="col-9 mx-auto mb-2 px-0 px-sm-0 px-md-0 px-lg-0 px-xl-3 px-0 px-sm-0 px-md-0 px-lg-0 px-xl-3">
                  <img
                    className="rounded-circle img-fluid"
                    alt="Jamshid"
                    src={"img/avatar/nH0ACPHVUQJXR.jpg"}
                  />
                </div>
                <p>
                  <a href="#">Azizbek</a>
                  <small className="text-topics">
                    &nbsp;<span className="badge badge-danger">off</span>
                  </small>
                  <br />
                  <span className="ft-th">
                    <span className="badge badge-primary">moderator</span>
                  </span>
                </p>
              </div>
              <div className="col-8">
                <span className="text-secondary h6">
                  <span className="fa fa-check-square"></span>
                </span>
                &nbsp;
                <a href="/forum_in" className="h6 text-topics">
                  10 Kids Unaware of Their Halloween Costume
                </a>
                <p className="text-secondary">
                  It's one thing to subject yourself to a Halloween costume mishap
                  because, hey, that's your prerogative.
                </p>
                <p className="text-secondary">
                  <span className="ft-th">
                    <span className="fa fa-user"></span>&nbsp;Qo'shdi:{" "}
                    <a href="#">Azizbek Eshonaliyev</a>
                    &nbsp;|&nbsp;
                    <span className="fa fa-clock-o"></span>&nbsp;Qo'shilgan:
                    2017-09-07 10:05 &nbsp;|&nbsp;
                    <span className="fa fa-bars"></span>&nbsp;Bo'lim:{" "}
                    <a href="#">Laravel</a>
                  </span>
                </p>
              </div>
              <div className="col-2">
              <h6>
                <span className="badge badge-primary">
                  <span className="fa fa-comments"></span> 54
                </span>
                <span className="badge badge-primary">
                  <span className="fa fa-eye"></span> 158
                </span>
              </h6>
            </div>
          </div>
          </div>
        </div>
      );
  });
  return rows;  
}

export default QuestionItem;
