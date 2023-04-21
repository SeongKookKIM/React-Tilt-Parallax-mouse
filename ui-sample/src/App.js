import React from "react";
import { TfiAngleDoubleDown } from "react-icons/tfi";
import { Tilt } from "react-tilt";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import "./App.css";

function App() {
  const defaultOptions = {
    reverse: true, // reverse the tilt direction
    max: 13, // max tilt rotation (degrees)
    perspective: 3000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 300, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.35,.09,.63,.89)", // Easing on enter/exit.
  };

  return (
    <MouseParallaxContainer className="pa">
      <Tilt
        options={defaultOptions}
        style={{ width: "100%", height: "100%" }}
        className="wrap"
      >
        <MouseParallaxChild className="main-bg" factorX={0.02} factorY={0.01}>
          <img src="assets/img/main-bg.jpg" alt="back" />
          <img src="assets/img/main01.jpg" alt="main" />
        </MouseParallaxChild>
        <div className="main-border">
          <div className="header">
            <nav className="gnb">
              <ul>
                <MouseParallaxChild factorX={0.015} factorY={0.01}>
                  <li>Home</li>
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.015} factorY={0.01}>
                  <li>about</li>
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.015} factorY={0.01}>
                  <li>Nfts</li>
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.015} factorY={0.01}>
                  <li>Contact</li>
                </MouseParallaxChild>
              </ul>
            </nav>
            <MouseParallaxChild className="logo" factorX={0.015} factorY={0.01}>
              LOGO
            </MouseParallaxChild>
            <MouseParallaxChild
              className="video"
              factorX={0.015}
              factorY={0.01}
            >
              WATCH
            </MouseParallaxChild>
          </div>
        </div>
        <MouseParallaxChild className="title" factorX={0.03} factorY={0.04}>
          TNC-ART
        </MouseParallaxChild>
        <MouseParallaxChild className="text" factorX={0.04} factorY={0.05}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            optio eveniet modi dolorem nisi dicta impedit amet nesciunt
            asperiores temporibus doloribus. Earum veniam rem vitae architecto
            amet vero quas repellendus!
          </p>
        </MouseParallaxChild>
        <div className="btn">
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            SHOW
          </a>
        </div>
        <div className="scroll">
          <TfiAngleDoubleDown className="icon" />
          <span>SCROLL</span>
        </div>
      </Tilt>
    </MouseParallaxContainer>
  );
}

export default App;
