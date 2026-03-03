import { useEffect } from "react";

function UltraPremiumMap() {

  useEffect(() => {
    const container = document.querySelector(".ultra-map-container");

    container.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      container.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    });

    container.addEventListener("mouseleave", () => {
      container.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });

  }, []);

  return (
    <div className="ultra-map-wrapper">
      <div className="ultra-map-container">

        <img
          src="/mnt/data/29d76641-3345-4520-9660-b95c5ef48293.png"
          alt="Global Network"
          className="ultra-map-img"
        />

        <svg className="ultra-overlay" viewBox="0 0 1920 1080">

          {/* Connection Paths */}
          <path id="path1" className="ultra-line"
            d="M300,600 Q900,200 1600,650" />

          <path id="path2" className="ultra-line delay1"
            d="M200,500 Q1000,100 1700,550" />

          <path id="path3" className="ultra-line delay2"
            d="M400,700 Q1000,400 1500,750" />

          {/* Moving Data Packets */}
          <circle r="6" className="packet">
            <animateMotion dur="4s" repeatCount="indefinite">
              <mpath href="#path1" />
            </animateMotion>
          </circle>

          <circle r="6" className="packet delay1">
            <animateMotion dur="5s" repeatCount="indefinite">
              <mpath href="#path2" />
            </animateMotion>
          </circle>

          <circle r="6" className="packet delay2">
            <animateMotion dur="6s" repeatCount="indefinite">
              <mpath href="#path3" />
            </animateMotion>
          </circle>

          {/* Pulsing Nodes */}
          <circle cx="900" cy="450" r="10" className="node" />
          <circle cx="1600" cy="650" r="10" className="node delay1" />
          <circle cx="400" cy="600" r="10" className="node delay2" />

        </svg>

      </div>
    </div>
  );
}
export default UltraPremiumMap;