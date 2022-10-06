import './movie-details.styles.scss';

const MovieDetails = ({date, rating, runtime, producer, director, desc}) =>{
    return(
        <div className='details-container'>
            <h3>Release Date: {date}</h3>
            <h3>Rating: {rating}</h3>
            <h3>Run Time: {runtime}</h3>
            <h3>Producer: {producer}</h3>
            <h3>Directed By: {director} </h3>
            <div className='description'>
                <h1>Description</h1>
                <h2>{desc}</h2>
            </div>
        </div>
    )
}
export default MovieDetails;