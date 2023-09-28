import CardComponent from "./CardComponent";
import "./ReviewTiles.css";
import person1 from "../assets/images/person1.jpg"
import person2 from "../assets/images/person2.webp"
import person3 from "../assets/images/person3.jpeg"
import person4 from "../assets/images/person4.jpeg"
import person5 from "../assets/images/person5.jpeg"

let reviewData = [
    {
        reviewerImage: person1,
        rating: 3,
        reviewText: "Review1"
    },
    {
        reviewerImage: person2,
        rating: 4,
        reviewText: "Review2"
    },
    {
        reviewerImage: person3,
        rating: 2,
        reviewText: "Review3"
    },
    {
        reviewerImage: person4,
        rating: 4,
        reviewText: "Review4"
    },
    {
        reviewerImage: person5,
        rating: 5,
        reviewText: "Review5"
    }
];

export default function ReviewTiles(){
    return(
        <div className="review-tiles-container">
            {reviewData.map(data => {
                return (
                    <div>
                        <CardComponent reviewData = {data}/> 
                    </div>);
            })}           
        </div>
    );
}