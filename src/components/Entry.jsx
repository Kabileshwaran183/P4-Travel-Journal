import locIcon from '/src/assets/marker.png'
export default function Entry(props){
    return(
        <article>
            <div className="img-container">
                <img src={props.img} className="city-img" />
            </div>
            <div className="trip-info">
                <div className="city-title">
                    <img src={locIcon} />
                    <span>{props.city}</span>
                    <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"> Visit on Google Maps </a>
                </div>
                
                <h2>{props.name}</h2>
                <p className="trip-date">{props.date}</p>
                <p className="trip-details">{props.details}</p>
            </div>
        </article>
    )
}