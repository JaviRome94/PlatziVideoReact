
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categorias from '../components/Categorias';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/Carousel-item';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';


const Home = () => {
 const InitialState = useInitialState(API);
  return (
    <div className='App'>
      <Header />
      <Search />
      {InitialState.mylist.length > 0 && ( 
        <Categorias title='Mi lista'>
          <Carousel>
            {InitialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categorias>
      )}

      <Categorias title='Tendencias'>
        <Carousel>
          {InitialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categorias>

      <Categorias title='Estrenos'>
        <Carousel>
          {InitialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categorias>

      <Footer />
    </div>
  );
};
export default Home;
