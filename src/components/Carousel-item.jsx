import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Carousel-item.scss';
import Play from '../assets/static/play.png';
import Plus from '../assets/static/plus.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carrusel-item'>
    <img className='carrusel-item__img' src={cover} alt={title} />
    <div className='carrusel-item__detalles'>
      <div>
        <img className='player' src={Play} alt='play' />
        <img src={Plus} alt='plus' />
      </div>
      <p className='carrusel-item__detalles--titulo'>{title}</p>
      <p className='carrusel-item__detalles--subtitulo'>
        {`${year} ${contentRating} ${duration}`}
      </p>
    </div>
  </div>
);

CarouselItem.propTypes = {
  cover:PropTypes.string,
  title:PropTypes.string,
  year:PropTypes.number,
  contentRating:PropTypes.string,
  duration:PropTypes.number,
};


export default CarouselItem;
