
import './App.scss';
import { Routes, Route, Link } from "react-router-dom";
import Layout from './views/layout';
import Home from './views/home';
import Detail from './views/detail';
function App() {


  return (
    <div className='app-wrapper'>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}