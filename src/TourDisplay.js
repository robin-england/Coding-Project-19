import { useState } from "react";

export default function TourDisplay({ name, info, image, price }) { // function takes in info fed by parent

    const [showDetails, setShowDetails] = useState(false)   // initially hides details
    const [showComponent, setShowComponent] = useState(true)    // sets state to

    function handleDetailsClick() {
        setShowDetails(!showDetails)            // Reversed current state of show details
    }

    function handleNotInterestedClick() {
        setShowComponent(false)                 // on click sets showCompenent to false
    }

    if (!showComponent) {                       // does not display component if showComponent is set to false
        return null
    }

    return (
        <div className="tour">
            <h2>{name}</h2>
            <img
                src={image}
                alt={name}
                width="400"
            />
            <br />
            <button onClick={handleDetailsClick}>{showDetails ? 'Show Less' : 'Read More'}</button>
            {" "}
            <button onClick={handleNotInterestedClick}>Not Interested</button>
            <br />
            {showDetails && < b className="price"> Price: ${price}</b>}                    {/* Displays price and info only when showDetails is true */}
            <br />
            {showDetails && < p className="info">{info}</p>}
        </div>
    )
}