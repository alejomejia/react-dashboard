import React, { Component } from 'react';

import './style/LoginForm.sass';

class LoginForm extends Component {

  render(){
    return(
        <form>
          <div className="form-group">
            <label htmlFor="username">Nombre de usuario</label>
            <input type="text" className="form-control" id="username" autoComplete="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" className="form-control" id="password" autoComplete="current-password" required />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label className="form-check-label" htmlFor="remember">Recuérdame</label>
          </div>
          <button type="submit" className="btn btn-primary btn-block border-0">Ingresar</button>
        </form>
    )
  }

}

export default LoginForm;