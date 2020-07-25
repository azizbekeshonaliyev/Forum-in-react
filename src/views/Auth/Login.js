import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
       <div className="container pt-5">
        <div className="col-12 col-sm-9 col-md-6 col-lg-5 box-admin py-3 mx-auto my-auto">
          <div className="col-12 pb-3 mb-4 text-center">
            <div className="text-center">
              <span className="text-topics h5">Kirish</span>
            </div>
          </div>
          <div className="col-12">
            <div className="alert alert-danger ft-sc" role="alert">
              Login yoki parol xato kiritildi
            </div>
            <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Telefon raqami:</label>
              <input type="input" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="9989xxxxxxxx"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Parol:</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Parol"/>
            </div>
            <div className="form-group">
              <div className="form-check">
                <label className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input"/>
                  <span className="custom-control-indicator"></span>
                  <span className="custom-control-description">Meni eslab qolish</span>
                </label>
              </div>
            </div>
            <a className="btn btn-primary btn-block btn-circle" href="/admin">Kirish</a>
            <br/>
            <span className="text-secondary text-center d-block ft-th">yoki ijtimoiy tarmoqlar orqali kirish:</span>
            <div className="text-center mt-3">
            <a className="btn btn-primary btn-circle btn-sm" href="index.html">facebook</a>
            <a className="btn btn-danger btn-circle btn-sm" href="index.html">google</a>
            <a className="btn btn-primary btn-circle btn-sm" href="index.html">id.gov.uz</a>
            <a className="btn btn-primary btn-circle btn-sm" href="index.html">IRA</a>
          </div>
          </form>
          <div className="text-center mt-3">
            <a className="d-block ft-sc mb-1" href="#pass_reco" data-toggle="modal">Login yoki parolingizni unutdingizmi?</a>
            <span className="text-topics ft-th">Akkauntingiz yo'qmi? </span> <a className="ft-th" href="/registr">Ro'yhatdan o'ting</a>
          </div>
          </div>
        </div>
    </div>
    )
}

export default Login