import './heroimg.styles.scss';

const HeroImg = ({title, banner, originalTitle}) => {
    return(
        <div className='hero-img-container'>
            <img src = {banner} alt = {title}/> 
            <div className='original-title'>
                <h2>{originalTitle}</h2>
            </div>
        </div>
    )
}

export default HeroImg;