import userImage from "../assets/images/person1.jpg"
import filledStar from "../assets/images/filled_star.png"
import hollowStar from "../assets/images/hollow_star.png"
import "./CardComponent.css"
export default function CardComponent(props){
    console.log(arguments);
    let reviewData = props.reviewData;
    let reviewerImage = reviewData.reviewerImage;
    let rating = reviewData.rating;
    let reviewText = reviewData.reviewText;
    let dummyRatingArr = [1,2,3,4,5];
    return(
        <div className="card-component-container">
            <div className="image-container">
                <img src={reviewerImage} alt="user image" />
            </div>
            <div className="ratings-container"></div>
            <div className="review-container">
                <div className="review-stars">
                    {
                    dummyRatingArr.map(
                        (data,index)=>{
                            return <img src={index < rating ? filledStar : hollowStar} alt="hollow star" />
                            })
                    }
                </div>
                <div className="review-text">
                    This is dummy review {reviewText} by dummy user
                </div>
            </div>
        </div>
    );
}