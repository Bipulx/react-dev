import React, { useState } from "react";

const Ball = () => {
  const [position, Setpostion] = useState({
    X: 0,
    Y: 0,
  });
  return (
    <div
      onPointerMove={(e) => {
        Setpostion({
          X: e.clientX,
          Y: e.clientY,
        });
      }}
      style={{
        height: "100vh",
        width: "100vw",
        position: "relative",
      }}
    >
      <img
        src="https://thumbs.dreamstime.com/t/cartoon-rocket-ship-flying-up-white-background-isolated-flat-animation-120293018.jpg"
        
        style={{
          position: "absolute",
          left: "-10%",
          top: "-10%",
          height: "100px",
          width: "300px",
          transform: `translate(${position.X}px, ${position.Y}px)`,
        }}
      ></img>
    </div>
  );
};

export default Ball;
