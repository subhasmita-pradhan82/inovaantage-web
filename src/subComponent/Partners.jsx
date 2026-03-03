import React from "react";

const logos = [
  "https://inovaantage.com/wp-content/uploads/2024/03/sp-group-200x80-1.png",
  "https://inovaantage.com/wp-content/uploads/2024/03/tenaga-nasional-200x80-1.png",
  "https://inovaantage.com/wp-content/uploads/2024/03/edison-200x80-1.png",
  "https://inovaantage.com/wp-content/uploads/2024/03/sarawak-energy-200x80-1.png",
  "https://inovaantage.com/wp-content/uploads/2024/03/sabah-electricity-200x80-1.png",
  "https://inovaantage.com/wp-content/uploads/2024/03/western-power-200x80-1.png",
  "https://inovaantage.com/wp-content/uploads/2024/03/yorkshire-water-200x80-1.png",
  "https://inovaantage.com/wp-content/uploads/2024/03/psma-200x80-1.png",
  "https://inovaantage.com/wp-content/uploads/2024/03/cem-200x80-1.png",
  "https://inovaantage.com/wp-content/uploads/2024/03/scottish-water-200x80-1.png",
  "https://inovaantage.com/wp-content/uploads/2024/03/bristol-water-200x80-1.png",
  "https://inovaantage.com/wp-content/uploads/2024/03/allo-200x80-1.png"
];

function Partners() {
  return (
    <div className="logo-slider">
      <div className="logo-track">
        {logos.concat(logos).map((logo, i) => (
          <img key={i} src={logo} alt="partner" />
        ))}
      </div>
    </div>
  );
}
export default Partners;