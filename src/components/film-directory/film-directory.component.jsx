import './film-directory.styles.scss'

const Film = ({film}) =>{
    // const {id , title , movie_banner } = film;
    return(
        <div className="film-directory-container">
            {film.map((film,idx)=>(
                <div key={idx} className='film-directory-items'>
                    <h1 className='film-title'>{film.title}</h1>
                    <img className='movie-banner' src ={film.movie_banner} alt ={film.title}/>
                </div>
            ))}
        </div>
    )
}

export default Film