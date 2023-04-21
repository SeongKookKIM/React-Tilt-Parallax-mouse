import React from "react";
import { Tilt } from "react-tilt";

function Test() {
  const testOptions = {
    reverse: false, // reverse the tilt direction
    max: 30, // max tilt rotation (degrees)
    perspective: 3000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.35,.09,.63,.89)", // Easing on enter/exit.
  };
  return (
    <Tilt
      options={testOptions}
      className="test"
      style={{ width: "100%", height: "100%" }}
    >
      <div>TEST</div>
    </Tilt>
  );
}

export default Test;
