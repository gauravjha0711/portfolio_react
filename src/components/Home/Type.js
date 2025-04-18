import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer (MERN)",
          "Exploring Algorithms Daily",
          "DevOps & Cloud Enthusiast",
          "Solving Problems with Code",
          "JavaScript Specialist",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
