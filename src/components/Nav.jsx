import React from "react";

const Nav = () => {
  return (
    <div className="fixed text-white flex justify-between items-center px-6 py-3 left-0 right-0 top-0 z-50">
      <h1>Logo</h1>
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
