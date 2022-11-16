import React from "react";
import '../styles/PhotosPage.css';
import photo1 from '../assets/Cover1.jpg';
import photo2 from '../assets/Chart1.jpg';
import photo3 from '../assets/Content1.jpg';
import photo4 from '../assets/Cover2.png';
import photo5 from '../assets/Content2.png';
import photo6 from '../assets/Thanks.png';

export default function PhotosPage() {
    return (
        <div className="photospage">
            
            <div className="photos-grid">
                <img src={photo1} alt="photo1"/>
                <img src={photo2} alt="photo2" />
                <img src={photo3} alt="photo3"/>
                <img src={photo4} alt="photo1"/>
                <img src={photo5} alt="photo2" />
                <img src={photo6} alt="photo3"/>
            </div>
        </div>
    );
};