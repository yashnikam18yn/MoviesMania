import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Header/Header"
import Homepage from './pages/home/Home';
import MovieListPage from "./MovieList/Movielist"
import MovieDetail from './pages/movieDetails/MovieDetail';
import FooterPage from './Footer/Footer';


function App() {
  return (
    <div className="App">
     
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='movie/:id' element={<MovieDetail/>}></Route>
          <Route path='movies/:type' element={<MovieListPage/>}></Route>
          <Route path='/*' element={<h2>Error Page</h2>}></Route>
        </Routes>
       {/* <FooterPage/> */}
      </Router>
    </div>
  );
}

export default App;
