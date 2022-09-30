import { Outlet } from "react-router-dom";
import Film from "../../components/film-directory/film-directory.component";
import './home.styles.scss';


const Home = ({film}) => {
    return(
        <>
            <Outlet/>
            <h1 className="home-title">Studio Ghibli Films</h1>
            <Film film = {film}/>
        </>
    )
}

export default Home;