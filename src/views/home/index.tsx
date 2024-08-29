import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import { useDispatch } from 'react-redux';
import { getMoviesData } from '../../store/methods/movies.method';
import { ThunkDispatch } from '@reduxjs/toolkit';
import './style.scss';
import { useEffect } from 'react';
const Home = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  useEffect(() => {
    console.log('11')
     dispatch(getMoviesData({page: 1, s: 'Pokemon', type: '', y: ''}))
  }, [])
  return (
    <div className='home-wrapper'>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}
export default Home