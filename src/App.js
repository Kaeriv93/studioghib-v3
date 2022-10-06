import { Routes, Route } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Filmpage from './routes/film-page/film-page.components';


const App = () => {
  const[film, setFilm] = useState([]);

  useEffect(() => {
      fetch('https://ghibliapi.herokuapp.com/films')
      .then(response => response.json())
      .then(data => setFilm(data))
  },[])

  return (
    <Routes>
      <Route path ='/' element = {<Navigation/>}>
        <Route index element = {<Home film={film}/>}/>
        <Route path = 'auth' element = {<Authentication/>}/>
        <Route path ='/:id' element = {<Filmpage film = {film}/>}/>
      </Route>
    </Routes>
  )
}

export default App;
