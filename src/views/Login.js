import React, { Component } from 'react';

import LOGO from '../images/logo.png';
import './style/Login.sass';
import LoginForm from '../components/LoginForm';
import PasswordRecoveryForm from '../components/PasswordRecoveryForm';

class Login extends Component{

  constructor(props){
    super(props);
    this.state  = {
      showRestore: false
    }
  }

  handleToggle = () => {
    this.setState({ 
      showRestore : !this.state.showRestore
    });
  }

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
                { this.state.showRestore ? <PasswordRecoveryForm /> : <LoginForm /> }        
              </div>
            </div>
            <div className="off-text">
              <p className="mb-0">
                <button className="text-secondary" onClick={this.handleToggle} >
                { this.state.showRestore ? 'Regresar a Inicio de Sesión' : '¿Olvidaste tu contraseña?' }
                </button>
              </p> 
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Login;