/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/Carousel-item.scss';
import Play from '../assets/static/play.png';
import Plus from '../assets/static/plus.png';
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, islist } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, year, contentRating, duration,
    });
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className='carrusel-item'>
      <img className='carrusel-item__img' src={cover} alt={title} />
      <div className='carrusel-item__detalles'>
        <div>

          <Link to={`/player/${id}`}>
            <img
              className='player'
              src={Play}
              alt='play'
            />
          </Link>

          {islist ? (
            <img
              src={removeIcon}
              alt='remover-icono'
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <img
              src={Plus}
              alt='plus'
              onClick={handleSetFavorite}
            />
          )}

        </div>
        <p className='carrusel-item__detalles--titulo'>{title}</p>
        <p className='carrusel-item__detalles--subtitulo'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
