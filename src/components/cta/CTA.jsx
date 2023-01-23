import React from "react";
import './cta.css';

const CTA = () => {
    return(
      <div className="va__cta" id="publication">
        <div className="va__cta-content">
          <h1>Publications</h1>
          <p>Studies undertaken at Video Analytics Lab (VALab) are the most comprehensive measure of its impact</p>
        </div>
        <div className="va__cta-btn">
          <button type="button">
          <a href="https://projects.pnec.nust.edu.pk/va/publications.html" target="_blank" >Explore our research</a>
          
          </button>
        </div>
      </div>
    )
};

export default CTA;