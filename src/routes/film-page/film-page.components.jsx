import './film-page.styles.scss';
import { useParams } from 'react-router-dom';
import FilmDetails from '../../components/film-details/film-details.components';

const Filmpage = ({film}) =>{
    let { id } = useParams();
    let thisFilm = film[id];
    return(
        <section className='film-details-container'>
            <FilmDetails film = {thisFilm} />
        </section>
    )
}

export default Filmpage