import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LOGO from '../images/logo.png';
import './style/Login.sass';
import LoginForm from '../components/LoginForm';

class Login extends Component{

  render(){
    return(
      <div className="dark-theme">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-md-5 col-9">
            <div className="mb-5">
              <img className="logo mx-auto d-block" src={LOGO} alt="logo" />
            </div>
            <div className="card mb-4">
              <div className="card-body">
                <LoginForm />       
              </div>
            </div>
            <div className="off-text">
              <p className="mb-0">
                <Link className="text-secondary" to='/password-recovery' >
                  ¿Olvidaste tu contraseña?
                </Link>
              </p> 
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Login;