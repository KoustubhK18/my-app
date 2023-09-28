import "./CoverComponent.css"

import cover from "../assets/images/airbnb_experience_cover.webp"

export default function CoverComponent(){
    return(
        <div className = "cover-container">
            <img src={cover} alt="Cover photo" />
            <h1>Online Experiences</h1>
        </div>
    );
}