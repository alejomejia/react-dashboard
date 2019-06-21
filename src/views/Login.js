import React, { Component } from 'react';

import './style/Login.sass';
import LoginForm from '../components/LoginForm';

const LOGO_URL = 'https://www.insightcrime.org/wp-content/uploads/2017/07/logo.png';

class Login extends Component{
  
  render(){
    return(
      <div className="dark-theme">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-md-5 col-9">
            <div className="mb-5">
              <img className="logo mx-auto d-block" src={LOGO_URL} alt="logo" />
            </div>
            <div className="card mb-4">
              <div className="card-body">
                <LoginForm />
              </div>
            </div>
            <div className="off-text">
              <p className="mb-0">
                <a className="text-secondary" href="/password-recovery.html">¿Olvidaste tu contraseña?</a>
              </p> 
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}

export default Login;