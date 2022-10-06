import './film-directory.styles.scss'
import { Link } from 'react-router-dom';

const Film = ({film}) =>{
    return(
        <div className="film-directory-container">
            {film.map((film,idx)=>(
                <div key={idx} className='film-directory-items'>
                    <Link to = {`/${idx}`}>
                        <h1 className='film-title'>{film.title}</h1>
                        <img className='movie-banner' src ={film.movie_banner} alt ={film.title}/>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Film