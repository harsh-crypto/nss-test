import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img5 from'./images/img5.jpg';
import img6 from'./images/img6.jpg';
import img2 from'./images/img2.jpg';
import img3 from'./images/img3.jpg';
import img4 from'./images/img4.jpg';
import './slider.scss';
const images = [
  img6,
  img2,
  img3,
  img4,
  img5
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Zoom scale={0.4}>
          {
            images.map((each, index) => <img key={index} style={{width: '100%'}} src={each} alt = "" />)
          }
        </Zoom>
        
      </div>
    )
}
export default Slideshow