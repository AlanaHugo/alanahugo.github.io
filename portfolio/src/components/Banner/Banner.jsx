// BannerComponent.js
// This the hero banner at the top of the portfolio website
//................

// Styling is handled via BannerComponent.css

import "./Banner.css";

function BannerComponent() {
  return (
    <div className="BannerDiv">
      <div className="Hdr1Div">
        <h1 className="BannerFont">Alana</h1>
      </div>
      <div className="Hdr2Div">
        <h1 className="BannerFont">Hugo</h1>
      </div>
      <div className="ContentDiv">
        <h2 className="BannerContent">Software Engineer</h2>
      </div>
      <div className="ball"></div>
      <div className="triangle"></div>
      <div className="rod1"></div>
      <div className="rod2"></div>
      <div className="rod3"></div>
    </div>
  );
}

export default BannerComponent;
