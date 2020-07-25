import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div class="container pt-5">
        <div class="col-12 col-sm-9 col-md-6 col-lg-5 box-admin py-3 mx-auto my-auto">
          <div class="col-12 pb-3 mb-4 text-center">
            <div class="text-center">
              <span class="text-topics h5">Ro'yhatdan o'tish</span>
            </div>
          </div>
          <div class="col-12">
            <div class="alert alert-danger ft-sc" role="alert">
              Telefon raqami ko'rsatilmadi
            </div>
            <form>
              <div class="form-group">
              <label for="exampleInputPassword1">Telefon raqam:</label>
              <div class="row">
                <div class="col-lg-4">
                  <select class="custom-select mb-2 btn-block" id="inlineFormCustomSelectPref">
                    <option selected></option>
                    <option value="1">+99890</option>
                    <option value="2">+99891</option>
                    <option value="3">+99893</option>
                    <option value="1">+99894</option>
                    <option value="2">+99895</option>
                    <option value="3">+99897</option>
                    <option value="3">+99898</option>
                    <option value="3">+99899</option>
                  </select>
                </div>
                <div class="col-lg-8">
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="xxx-xx-xx"/>
                  <div class="invalid-feedback">
                    Please provide a valid city.
                  </div>
              </div>
            </div>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Parol:</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Parol"/>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Parolni tasdiqlash:</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Parol"/>
            </div>
            <a class="btn btn-primary btn-block btn-circle" href="index.html">R'yhatdan o'tish</a>
            <br/>
            <span class="text-secondary text-center d-block ft-th">yoki ijtimoiy tarmoqlar orqali ro'yhatdan o'tish:</span>
            <div class="text-center mt-3">
            <a class="btn btn-primary btn-circle btn-sm" href="index.html">facebook</a>
            <a class="btn btn-danger btn-circle btn-sm" href="index.html">google</a>
            <a class="btn btn-primary btn-circle btn-sm" href="index.html"><span class="fa fa-info"></span> id.gov.uz</a>
            <a class="btn btn-primary btn-circle btn-sm" href="index.html">IRA</a>
          </div>
          </form>
          <div class="text-center mt-3">
            <span class="text-topics ft-th">Akkauntingiz bormi? </span> <a class="ft-th" href="/login">Kiring</a>
          </div>
          </div>
        </div>
    </div>
    )
}

export default Register