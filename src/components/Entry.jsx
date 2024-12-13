import locIcon from '../assets/marker.png'
export default function Entry(props){
    return(
        <article>
            <div className="img-container">
                <img src={props.img.src} className="city-img" />
            </div>
            <div className="trip-info">
                <div className="city-title">
                    <img src={locIcon} />
                    <span>{props.country}</span>
                    <a href={props.googleMapsLink}> Visit on Google Maps </a>
                </div>
                
                <h2>{props.title}</h2>
                <p className="trip-date">{props.dates}</p>
                <p className="trip-details">{props.details}</p>
            </div>
        </article>
    )
}