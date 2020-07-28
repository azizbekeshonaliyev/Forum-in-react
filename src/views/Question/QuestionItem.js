
import React from 'react'
import { Link, useRouteMatch } from "react-router-dom";

const QuestionItem = (props) => {
    let { url } = useRouteMatch();
    // console.log(this.props);
    return (
      <div className="box-shadow mb-4">
          <div className="col-12 bg-white py-4 topics">
            <div className="row">
              <div className="col-2 no-guttesr text-center">
                <div className="col-9 mx-auto mb-2 px-0 px-sm-0 px-md-0 px-lg-0 px-xl-3 px-0 px-sm-0 px-md-0 px-lg-0 px-xl-3">
                  <img
                    className="rounded-circle img-fluid"
                    alt="Jamshid"
                    src={"/img/avatar/nH0ACPHVUQJXR.jpg"}
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
                <Link to={`${url}/${props.question.id}`} className="h6 text-topics">
                  { props.question.title }
                </Link>
                <p className="text-secondary" dangerouslySetInnerHTML={{__html: props.question.desc}}>
                </p>
                <p className="text-secondary">
                  <span className="ft-th">
                    <span className="fa fa-user"></span>&nbsp;Qo'shdi:{" "}
                    <a href="#">Azizbek Eshonaliyev</a>
                    &nbsp;|&nbsp;
                    <span className="fa fa-clock-o"></span>&nbsp;Qo'shilgan:
                    2017-09-07 10:05 &nbsp;|&nbsp;
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
    )
}

export default QuestionItem;