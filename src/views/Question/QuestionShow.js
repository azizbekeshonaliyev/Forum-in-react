
import React from 'react'
import CreateQuestionButton from './../Buttons/CreateQuestionButton';

const QuestionShow = (props) => {
  
  const { params } = props.match;

  if (params.questionId != null) {
    console.log(params);
    const question  = props.question(params.questionId);
    if (question != null) {
      return (
        <div className="box-shadow mb-4">
          <div className="row my-1">
              <div className="col-8">
                  <h4>{question.title}</h4>
              </div>
              <div className="col-4 text-right">
                  <CreateQuestionButton></CreateQuestionButton>
              </div>
          </div>
        <div className="col-12 bg-white py-4 topics">
          <div className="row">
            <div className="col-2 no-guttesr text-center">
              <div className="col-9 mx-auto mb-2 px-0 px-sm-0 px-md-0 px-lg-0 px-xl-3">
                <img className="rounded-circle img-fluid" src={"/img/avatar/nH0ACPHVUQJXR.jpg"}/>
              </div>
              <p>
                <a href="#">Jamshid</a>
                <small className="text-topics">
                  <span className="badge badge-success">on</span>
                  <span className="badge badge-primary">moderator</span>
                </small>
              </p>
              <p>
                <a href="#"><span className="badge badge-pill badge-primary"><span className="fa fa-thumbs-up"></span> 6</span></a>&nbsp;
                <a href="#"><span className="badge badge-pill badge-danger"><span className="fa fa-thumbs-down"></span> 1</span></a>
              </p>
              <p>
                <a href="#"><span className="badge badge-secondary"><span className="fa fa-quote-right"></span> 54</span></a>
                <a href="#"><span className="badge badge-secondary"><span className="fa fa-comment"></span> 593</span></a>
              </p>
            </div>
            <div className="col-10">
              <a href="#" className="h6 text-topics">Jamshid Eshnazarov</a>
              <small className="text-secondary"> - savol berdi</small>
              <small className="text-danger">(moderatsiyada)</small>
              <span className="text-secondary h6 mr-2 reply float-right">
                <a href="#" data-toggle="tooltip" data-placement="top" title="O'chirish" className="text-secondary">
                  <span className="fa fa-trash"></span>
                </a>
              </span>
              <span className="text-secondary h6 mr-2 reply float-right">
                <a href="#" data-toggle="tooltip" data-placement="top" title="Qabul qilish" className="text-secondary">
                  <span className="fa fa-check"></span>
                </a>
              </span>
              <p className="text-secondary">
                <span className="ft-th">
                  Vaqt: 2017-09-07 10:05
                  &nbsp;|&nbsp;
                  Bo'lim: <a href="#">Umumiy bo'lim</a>
                  &nbsp;|&nbsp;
                  Teglar: <a href="#"><span className="badge badge-secondary">sug'urta</span></a> <a href="#"><span className="badge badge-secondary">omonat</span></a>
                </span>
              </p>
              <span className="text-topics"  dangerouslySetInnerHTML={{__html: question.desc}}></span>
            </div>
          </div>
        </div>
        <div className="col-12 bg-white py-3 text-center topics">
          <span className="h6">Javoblar:</span>
        </div>
        <div className="col-12 bg-white py-4 topics">
          <div className="row">
            <div className="col-2 no-guttesr text-center">
              <div className="col-9 mx-auto mb-2 px-0 px-sm-0 px-md-0 px-lg-0 px-xl-3">
                <img className="rounded-circle img-fluid"  src={"/img/avatar/nH0ACPHVUQJXR.jpg"}/>
              </div>
              <p>
                <small className="text-topics">
                  <span className="badge badge-success">on</span>
                </small>
              </p>
              <p className="carma">
                <a href="#"><span className="badge badge-pill badge-primary"><span className="fa fa-thumbs-up"></span> 6</span></a>&nbsp;
                <a href="#"><span className="badge badge-pill badge-danger"><span className="fa fa-thumbs-down"></span> 1</span></a>
              </p>
                <p>
                <a href="#"><span className="badge badge-secondary"><span className="fa fa-quote-right"></span> 54</span></a>
                <a href="#"><span className="badge badge-secondary"><span className="fa fa-comment"></span> 593</span></a>
              </p>
            </div>
            <div className="col-10">
              <span className="text-success h6"><span className="fa fa-check-square"></span></span>&nbsp;
              <a href="#" className="h6 text-topics">Ninuwa</a>
              <small className="text-success"> - to'g'ri javob berdi</small>
              <span className="text-secondary h6 mr-2 reply float-right">
                <a href="#" data-toggle="tooltip" data-placement="top" title="Javob qaytarish" className="text-secondary">
                  <span className="fa fa-reply"></span>
                </a>
              </span>
              <span className="text-secondary h6 mr-2 reply float-right">
                <a href="#" data-toggle="tooltip" data-placement="top" title="Javob noto'g'ri" className="text-success">
                  <span className="fa fa-check-square"></span>
                </a>
              </span>
              <span className="text-secondary h6 mr-2 reply float-right">
                <a href="#" data-toggle="tooltip" data-placement="top" title="O'chirish" className="text-secondary">
                  <span className="fa fa-trash"></span>
                </a>
              </span>
              <p className="text-secondary">
                <span className="ft-th">
                  Vaqt: 2017-09-07 10:05
                </span>
              </p>
              <span className="text-topics">
                <p>
                  This is the Most Pretty and the Most Easy forum I've ever seen!<br/>
                  Well done. ;)
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 bg-white py-4 topics">
          <div className="row">
            <div className="col-2 no-guttesr text-center">
              <div className="col-9 mx-auto mb-2 px-0 px-sm-0 px-md-0 px-lg-0 px-xl-3">
                <img className="rounded-circle img-fluid"  src={"/img/avatar/nH0ACPHVUQJXR.jpg"}/>
              </div>
              <p>
                <small className="text-topics">
                  <span className="badge badge-danger">off</span>
                </small>
              </p>
              <p className="carma">
                <a href="#"><span className="badge badge-pill badge-primary"><span className="fa fa-thumbs-up"></span> 6</span></a>&nbsp;
                <a href="#"><span className="badge badge-pill badge-danger"><span className="fa fa-thumbs-down"></span> 1</span></a>
              </p>
            </div>
            <div className="col-10">
              <a href="#" className="h6 text-topics">Boris</a>
              <small className="text-secondary"> - javob berdi</small>
              <small className="text-danger">(moderatsiyada)</small>
              <span className="text-secondary h6 mr-2 reply float-right">
                <a href="#" data-toggle="tooltip" data-placement="top" title="Javob qaytarish" className="text-secondary">
                  <span className="fa fa-reply"></span>
                </a>
              </span>
              <span className="text-secondary h6 mr-2 reply float-right">
                <a href="#" data-toggle="tooltip" data-placement="top" title="Javob to'g'ri" className="text-secondary">
                  <span className="fa fa-check-square"></span>
                </a>
              </span>
              <span className="text-secondary h6 mr-2 reply float-right">
                <a href="#" data-toggle="tooltip" data-placement="top" title="O'chirish" className="text-secondary">
                  <span className="fa fa-trash"></span>
                </a>
              </span>
              <span className="text-secondary h6 mr-2 reply float-right">
                <a href="#" data-toggle="tooltip" data-placement="top" title="Qabul qilish" className="text-secondary">
                  <span className="fa fa-check"></span>
                </a>
              </span>
              <p className="text-secondary">
                <span className="ft-th">
                  Vaqt: 2017-09-07 10:05
                </span>
              </p>
              <span className="text-topics">
                <p>
                  Wow, this forum is AMAZING!!!<br/>
                  Congrats!!!
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 bg-white py-4 topics">
          <div className="row">
            <div className="col-2 no-guttesr text-center">
              <div className="col-9 mx-auto mb-2 px-0 px-sm-0 px-md-0 px-lg-0 px-xl-3">
                <img className="rounded-circle img-fluid"  src={"/img/avatar/nYAYDDFF66I1J.jpg"}/>
              </div>
              <p>
                <small className="text-topics">
                  <span className="badge badge-danger">off</span>
                </small>
              </p>
              <p className="carma">
                <a href="#"><span className="badge badge-pill badge-primary"><span className="fa fa-thumbs-up"></span> 6</span></a>&nbsp;
                <a href="#"><span className="badge badge-pill badge-danger"><span className="fa fa-thumbs-down"></span> 1</span></a>
              </p>
              <p>
                <a href="#"><span className="badge badge-secondary"><span className="fa fa-quote-right"></span> 54</span></a>
                <a href="#"><span className="badge badge-secondary"><span className="fa fa-comment"></span> 593</span></a>
              </p>
            </div>
            <div className="col-10">
              <a href="#" className="h6 text-topics">Boris</a>
              <small className="text-secondary"> - javob berdi</small>
              <span className="text-secondary h6 mr-2 reply float-right">
                <a href="#" data-toggle="tooltip" data-placement="top" title="Javob qaytarish" className="text-secondary">
                  <span className="fa fa-reply"></span>
                </a>
              </span>
              <span className="text-secondary h6 mr-2 reply float-right">
                <a href="#" data-toggle="tooltip" data-placement="top" title="Javob to'g'ri" className="text-secondary">
                  <span className="fa fa-check-square"></span>
                </a>
              </span>
              <span className="text-secondary h6 mr-2 reply float-right">
                <a href="#" data-toggle="tooltip" data-placement="top" title="O'chirish" className="text-secondary">
                  <span className="fa fa-trash"></span>
                </a>
              </span>
              <p className="text-secondary">
                <span className="ft-th">
                  Vaqt: 2017-09-07 10:05
                </span>
              </p>
              <span className="text-topics">
                <p>
                  It looks real good!<br/><br/>

                  All elements are well organized, just like a forum needs to be.<br/>

                  I realy love this.<br/>

                  Good work. ;)
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 bg-white py-4 topics">
          <div className="row">
            <div className="col-2 no-guttesr text-center">
              <div className="col-9 mx-auto mb-2 px-0 px-sm-0 px-md-0 px-lg-0 px-xl-3">
                <img className="rounded-circle img-fluid" src={"/img/avatar/nH0ACPHVUQJXR.jpg"}/>
              </div>
              <p>
                <small className="text-topics">
                  <span className="badge badge-success">on</span>
                </small>
              </p>
            </div>
            <div className="col-10 pr-5">
              <div className="form-group px-3 py-3 javob">
                <label htmlFor="exampleFormControlTextarea1" className="text-secondary ft-th">Javob berish</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Javobingizni yozing..." rows="3"></textarea>
              </div>
              <div className="text-right">
                <a className="btn btn-secondary btn-sm" href="#" role="button"><span className="fa fa-smile-o"></span></a>
                <a className="btn btn-primary btn-sm" href="#" role="button">Yuborish</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }    
  }

  return (
    <h4>Question not found!</h4>
  )
}

export default QuestionShow;
