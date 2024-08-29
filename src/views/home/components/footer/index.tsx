import { useDispatch } from 'react-redux';
import './style.scss';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useAppSelector } from '../../../../store';
import { useEffect, useState } from 'react';
import { getMoviesData } from '../../../../store/methods/movies.method';
const Footer = () => {
  const movies = useAppSelector(state => state.movies.movies)
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const [pages, setPages] = useState<number[]>([])

  useEffect(() => {
    if (movies.totalResults && movies.totalResults > 10) {
      const total =Math.ceil(movies.totalResults / 10);
      const pgs = []
      for (let i = 1; i <= total; i++) {
        pgs.push(i)
      }
      setPages([...pgs])
    } else {
      setPages([1])
    }
  }, [movies.totalResults])

  const onPage = (pg: number) => {
    dispatch(getMoviesData({page: pg, s: movies.s, type: movies.type, y: movies.y}))
  }


  return (
    <div className='footer-wrapper' onClick={() => console.log(movies)}>
      <div className='pagination'>
        <span className={`paginator  ${movies.page === 1 ? 'passive' : ''}`} onClick={() => movies.page !== 1 && onPage(1)}>❮❮</span>
        <span className={`paginator  ${movies.page === 1 ? 'passive' : ''}`} onClick={() => movies.page !== 1 && onPage(movies.page - 1)}>❮</span>
        {pages.length > 0 && pages.slice(0, 2).map((page, index) => 
         <span className={`paginator  ${movies.page === page ? 'active' : ''}`} onClick={() => onPage(page)}>{page}</span> 
        )}
        {pages.length === 5 && 
         <span className={`paginator  ${movies.page === 5 ? 'active' : ''}`} onClick={() => onPage(5)}>5</span> 
        }
        {pages.length > 5 &&  
         <span className='paginator no-cursor'>...</span> 
        }
        {pages.length > 3 && pages.slice(pages.length - 2, pages.length).map((page, index) => 
         <span className={`paginator  ${movies.page === page ? 'active' : ''}`} onClick={() => onPage(page)}>{page}</span> 
        )}
        <span className={`paginator  ${movies.page === pages[pages.length - 1] ? 'passive' : ''}`} onClick={() => movies.page !== pages[pages.length - 1] && onPage(movies.page + 1)}>❯</span>
        <span className={`paginator  ${movies.page === pages[pages.length - 1] ? 'passive' : ''}`} onClick={() => movies.page !== pages[pages.length - 1] && onPage(pages[pages.length - 1])}>❯❯</span>
      </div>
    </div>
  );
}
export default Footer