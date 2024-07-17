import { tourList } from "./tourList";
import TourDisplay from "./TourDisplay";

export default function Gallery() {
    return (
        <div>
            {tourList.map(currentTour => (    // runs profile for each individual team member
                <TourDisplay
                    key={currentTour.id}
                    name={currentTour.name}
                    info={currentTour.info}
                    image={currentTour.image}
                    price={currentTour.price}
                />
            ))}
        </div>
    )
}