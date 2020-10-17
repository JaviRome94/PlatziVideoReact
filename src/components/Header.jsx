import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import Logo from '../assets/static/LogoPlatziVideo.png';
import userIcon from '../assets/static/icon-user.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={Logo} alt='esto es un logo' />
      </Link>

      <div className='header__menu'>
        <div className='header__menu--perfil'>

          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt='icono del usuario' />}
          <p>perfil</p>
        </div>
        <ul>

          {hasUser ?
            <li><a href='/'>{user.name}</a></li> :
            null}

          {hasUser ?
            <li><a href='#logout' onClick={handleLogout}>Cerrar sesion</a></li> :

            <li><Link to='/login'>Iniciar sesion</Link></li>}

        </ul>
      </div>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
