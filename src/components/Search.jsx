import React from 'react';
import '../assets/styles/components/Search.scss';

const Main = '¿Que quieres ver hoy?';
const MainInputPlaceholder = 'Buscar...';

const Search = () => (
  <section className='main'>
    <h2>{Main}</h2>
    <input className='main__input' type='text' placeholder={MainInputPlaceholder} />
  </section>
);

export default Search;
