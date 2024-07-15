import { useState } from "react";
import { tourList } from "./tourList";

export default function Gallery() {


    const [tours, setTours] = useState(tourList.map(importedTours => { importedTours.display = false; return importedTours }))
    // sets tours as the imported array for its initial state, adds display element to each object
    const [showDetails, setShowDetails] = useState(false)   // initially hides details

    function handleDetailsClick() {
        setShowDetails(!showDetails)            // Reversed current state of show details
    }


    return (
        <div>
            {tours.map(tour => (            // Maps and displays for each tour in the array
                <div key={tour.id} className="tour">
                    <h2>{tour.name}</h2>
                    <img
                        src={tour.image}
                        alt={tour.name}
                        width="500"
                    />
                    <br />
                    <button onClick={handleDetailsClick}>{showDetails ? 'Show Less' : 'Read More'}</button>
                    {" "}
                    <button
                        onClick={() => {
                            setTours(
                                tours.filter(i => i.id !== tour.id) // filters current item out of array
                            )
                        }}
                    >Not Interested</button>
                    <br />
                    {showDetails && < b > Price: ${tour.price}</b>}                    {/* Displays price and info only when showDetails is true */}
                    <br />
                    {showDetails && < p >{tour.info}</p>}
                </div>
            ))}
        </div>
    )
}