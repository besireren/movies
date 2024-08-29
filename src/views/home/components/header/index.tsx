import { useEffect, useState } from 'react';
import './style.scss';
import { getMoviesData } from '../../../../store/methods/movies.method';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';

const Header = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const [selectedType, setSelectedType] = useState('')
  const [search, setSearch] = useState('Pokemon')
  const [year, setYear] = useState('')
  const [years, setYears] = useState<any[]>([])

  useEffect(() => {
    setYears([])
    const max = new Date().getFullYear()
    const min = max - 50
    const year = []
    for (let i = max; i >= min; i--) {
      year.push(i)
    }
    setYears([...year])
  }, [])

  const searchMovie = () => {
    dispatch(getMoviesData({ page: 1, s: search, type: selectedType, y: year }))
  }
  return (
    <div className='header-wrapper'>
      <div className='select-box'>
        <p>Year :</p>
        <input type="text" value={search} className='input-search'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          } placeholder="Search" />
      </div>

      <div className='select-box'>
        <p>Type :</p>
        <select name="select" className='select' onChange={(e) => {e.target.value === 'all' ? setSelectedType('') : setSelectedType(e.target.value)}}>
          <option value="all">All</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>

      </div>
      <div className='select-box'>
        <p>Year :</p>
        <select name="selectYear" className='select'
          onChange={(e) => setYear(e.target.value)}>
          <option value={''}>Select</option>
          {years && years.map((year, index) =>
            <option value={year}>{year}</option>
          )}
        </select>

      </div>
      <button onClick={searchMovie} className='search btn'>Search</button>
    </div>
  );
}
export default Header