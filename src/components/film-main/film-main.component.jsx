import './film-main.styles.scss';

const FilmMain = ({image,title}) =>{
    return(
        <img className='film-main-img' src = {image} alt = {title}/>
    )
}

export default FilmMain;