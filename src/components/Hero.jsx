import React from "react";
import CenterImage from "./CenterImage";
import ParallaxImages from "./ParallaxImages";
import Schedule from "./Schedule";

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      className="relative w-full"
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
    >
      <CenterImage />
      <div className="absolute bottom-0 right-0 left-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950"></div>
      <ParallaxImages />
    </div>
  );
};

export default Hero;
