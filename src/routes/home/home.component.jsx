import { Outlet } from "react-router-dom";
import Film from "../../components/film-directory/film-directory.component";


const Home = ({film}) => {
    return(
        <>
            <Outlet/>
            <Film film = {film}/>
        </>
    )
}

export default Home;