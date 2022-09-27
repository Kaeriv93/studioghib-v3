import { Outlet } from "react-router-dom";
import {useState, useEffect} from 'react';
import Film from "../../components/film-directory/film-directory.component";

const Home = () => {
    const[film, setFilm] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(data => setFilm(data))
    },[])
    console.log(film);



    return(
        <>
            <Outlet/>
            <Film film = {film}/>
        </>
    )
}

export default Home;