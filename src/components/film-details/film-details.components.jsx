import './film-details.styles.scss';
import HeroImg from '../heroimg/heroimg.components';
import FilmMain from '../film-main-img/film-main.component';
import MovieDetails from '../film-movie-details/movie-details.component';

const FilmDetails = ({film}) => {
    const details = () => {
        const {id, title, original_title, image, release_date, rt_score, running_time, producer, description, director, movie_banner} = film;
        return(
            <div key = {id} className="detail-container">
                <div className="banner-container">
                    <HeroImg banner = {movie_banner} title = {title} originalTitle = {original_title}/>
                </div>
                <div className='titles-container'>
                    <h1>Original Title: {original_title}</h1>
                    <h2>English Title: {title}</h2>
                </div>
                <div className='info-container'>
                    <FilmMain image  = {image} title = {title}/>
                    <MovieDetails date = {release_date} rating = {rt_score} runtime = {running_time} producer = {producer} director = {director} desc = {description}/>
                </div>
            </div>
        )
    }

    return film ? details() : <h1>Loading</h1>
}

export default FilmDetails;