import './film-details.styles.scss';
const FilmDetails = ({film}) => {
    console.log(film)
    const details = () => {
        const {id, title, original_title, image, release_date, rt_score, running_time, producer, description, director, movie_banner} = film;
        return(
            <div key = {id} className="detail-container">
                <div className="banner">
                    <img src = {movie_banner} alt ={title}/>
                </div>
                <h1>Original Title: {original_title}</h1>
                <h2>English Title: {title}</h2>
                <img src = {image} alt = {title}/>
                <h2>{release_date}</h2>
                <h2>{rt_score}</h2>
                <p>{running_time}</p>
                <p>{producer}</p>
                <p>{director}</p>
                <p>{description}</p>
            </div>
        )
    }

    return film ? details() : <h1>Loading</h1>
}

export default FilmDetails;