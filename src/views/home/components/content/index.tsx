import './style.scss';
import Moive from './movie';
import { useAppSelector } from '../../../../store';
const Content = () => {
  const movies = useAppSelector(state => state.movies.movies)
  return (
    <div className='content-wrapper'>
      {!movies.loading && movies.response === 'True' && movies.data &&
        movies.data.map((item, index) => (
          <Moive item={item} key={index}></Moive>
        ))}
      {!movies.loading && movies.response === 'False' &&
        <h3>{movies.error} <br /> Try again please!</h3>
      }
      {movies.loading &&
        <h3>Loading!</h3>
      }
    </div>
  );
}
export default Content