import React from "react";
import './cta.css';

const CTA = () => {
    return(
      <div className="va__cta" id="publication">
        <div className="va__cta-content">
          <h1>Publications</h1>
          <p>There is no better measure of VALab's impact than the research conducted here.</p>
        </div>
        <div className="va__cta-btn">
          <button type="button">Explore our research</button>
        </div>
      </div>
    )
};

export default CTA;