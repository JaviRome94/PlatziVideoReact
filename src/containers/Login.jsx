/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <section className='login'>
      <section className='login__contenedor'>
        <h2>Inicio de sesión</h2>
        <form className='login__contenedor--form' onSubmit={handleSubmit}>
          <input
            name='email'
            aria-label='correo'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            aria-label='Contraseña'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button className='button'> iniciar sesión </button>
          <div className='login__contenedor--recuerdame'>
            <label>
              <input type='checkbox' id='cbox1' value='checkbos' />
              {' '}
              Recuerdame
            </label>
            <a href='/'>Olvidé mi Contraseña</a>
          </div>
        </form>
        <section className='login__contenedor--social-media'>
          <div>
            <img src={googleIcon} alt='Google' />
            {' '}
            Inicia sesión con Google
          </div>
          <div>
            <img src={twitterIcon} alt='Twitter' />
            {' '}
            Inicia sesión con Twitter
          </div>
        </section>
        <p className='login__contenedor--registro'>
          No tienes ninguna cuenta
          <Link to='/register'>Registrate</Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(login);

