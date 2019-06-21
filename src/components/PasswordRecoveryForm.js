import React, { Component } from 'react';

class PasswordRecoveryForm extends Component {

  render(){
    return(
      <form>
        <div className="form-group">
          <p>
            Para recuperar tu contraseña debes digitar tu nombre de usuario 
            o correo electrónico en el siguiente campo:
          </p>
          <label htmlFor="username">Nombre de usuario</label>
          <input 
            id="username" 
            className="form-control" 
            type="text" 
            placeholder="Ingrese su nombre de usuario"
            autoComplete="username" 
            required />
        </div>
        <button type="submit" className="btn btn-primary btn-block border-0">Recuperar contraseña</button>
      </form>
    )
  }

}

export default PasswordRecoveryForm;