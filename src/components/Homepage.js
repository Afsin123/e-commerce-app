import React from "react";
import "./Homepage.styles.sass";

function Homepage() {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="TITLE">HATS </h1>
            <span className="SUBTITLE"> SHOPWORK</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="TITLE">JACKETS </h1>
            <span className="SUBTITLE"> SHOPWORK</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="TITLE">SNEAKERS </h1>
            <span className="SUBTITLE"> SHOPWORK</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="TITLE">WOMENS </h1>
            <span className="SUBTITLE"> SHOPWORK</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="TITLE">MENS</h1>
            <span className="SUBTITLE"> SHOPWORK</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
