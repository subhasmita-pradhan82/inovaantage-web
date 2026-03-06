import React from "react";

const logos = [
  "/partners/allo.png",
  "/partners/bristol-water.png",
  "/partners/cem.png",
  "/partners/edison.png",
  "/partners/psma.png",
  "/partners/sabah-electricity.png",
  "/partners/sarawak-energy.png",
  "/partners/scottish-water.png",
  "/partners/sp-group.png",
  "/partners/tenaga-nasional.png",
  "/partners/western-power.png",
  "/partners/yorkshire-water.png"
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