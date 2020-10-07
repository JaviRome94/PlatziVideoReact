import React from 'react';
import '../assets/styles/components/Categorias.scss';

const Categorias = ({ children, title }) => (
  <div className='categorias'>
    <h2 className='categorias__titulo'>{title}</h2>
    {children}
  </div>
);

export default Categorias;
