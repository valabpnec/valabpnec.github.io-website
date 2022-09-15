import React from "react";
import possibilityImage from '../../assets/valab/vr-team2.png';
import './possibility.css';

const Possibility = () => (
    <div className="va__possibility section__padding" id="team">
      <div className="va__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="va__possibility-content">
        <h1 className="gradient__text">Meet our Reseachers</h1>
        <p>We bring the advances in computer vision, machine learning and virtual reality into the real world.</p>
        <a href="#team">Explore our team composition</a>
      </div>
    </div>
  );

export default Possibility;