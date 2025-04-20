import React from "react";
// import { itb } from "../assets/itb.png";

const Nav = () => {
  return (
    <div className="fixed text-white flex justify-between items-center px-6 py-3 left-0 right-0 top-0 z-50">
      <img src="/itb.png" alt="" className="w-auto h-15 object-cover" />
      <button
        onClick={document
          .getElementById("launch-schedule")
          ?.scrollIntoView({ behavior: "smooth" })}
        className="flex items-center gap-1 text-xs text-zinc-400"
      >
        LAUNCH SCHEDULE
      </button>
    </div>
  );
};

export default Nav;
