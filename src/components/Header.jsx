import React from 'react';
import '../assets/styles/components/Header.scss';
import Logo from '../assets/static/LogoPlatziVideo.png';
import userIcon from '../assets/static/icon-user.png';

const Header = () => (
  <header className='header'>
    <img className='header__img' src={Logo} alt='esto es un logo' />
    <div className='header__menu'>
      <div className='header__menu--perfil'>
        <img src={userIcon} alt='icono del usuario' />
        <p>perfil</p>
      </div>
      <ul>
        <li>
          <a href='/'> cuenta  </a>
        </li>
        <li>
          <a href='/'> cerrar sesion</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
