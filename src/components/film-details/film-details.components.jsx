const FilmDetails = ({film}) => {
    console.log(film)
    const details = () => {
        const {id, title, original_title, image, release_date, rt_score, running_time, producer, description, director, movie_banner} = film;
        return(
            <div key = {id} className="detail-container">
                <h1>{title}</h1>
            </div>
        )
    }

    return film ? details() : <h1>Loading</h1>
}

export default FilmDetails;