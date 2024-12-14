import locIcon from '/assets/marker.png'
export default function Entry(props){
    return(
        <article className="journal-entry">
            <div className="city-img-container">
                <img src={props.image} className="city-img" />
            </div>
            <div className="trip-info">
                <div className="city-title">
                    <img src={locIcon} className="marker" />
                    <span className="country">{props.country}</span>
                    <a href={props.googleMapsLink}> Visit on Google Maps </a>
                </div>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-date">{props.dates}</p>
                <p className="trip-details">{props.details}</p>
            </div>
        </article>
    )
}