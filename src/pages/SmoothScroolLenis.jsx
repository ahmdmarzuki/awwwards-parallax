import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Schedule from "../components/Schedule";
import ReactLenis from "lenis/react";
// import { ReactLenis } from "lenis/dist/lenis-react.mjs";

const SmoothScroolLenis = () => {
  return (
    <div className="bg-zinc-950 min-h-screen    ">
      <ReactLenis root options={{ lerp: 0.05 }}>
        <Nav />
        <Hero />
        <Schedule />
      </ReactLenis>
    </div>
  );
};

export default SmoothScroolLenis;
