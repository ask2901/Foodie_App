import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import {BsFillPlayCircleFill} from "react-icons/bs";

function about()
{
    return(
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt=""/>
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt=""/>
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">About</p>
                <h1 className="primary-heading-about">Food Is An important part of A Balanced diet</h1>
                <p className="primary-text">Lorem ipsum dolor sit amet consectetur. Non tincidun magna non et elit. Dolor  turpis molestie duimagnis facilisis at fringilla quam.</p>
                <p className="primary-text-about">Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>
                <div className="about-buttons-container">
                    <button className="secondary-button">Learn More</button>
                    <button className="watch-video-button"><BsFillPlayCircleFill/>Watch Video</button>
                </div>
            </div>
        </div>
    )
}

export default about;