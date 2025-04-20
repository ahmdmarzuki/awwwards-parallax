import React from "react";
import ParallaxImageCard from "./ParallaxImageCard";

const ParallaxImages = () => {
  return (
    <div className="relative z-10 mx-auto  max-w-5xl px-4 pt-[200px]">
      <ParallaxImageCard
        src="https://images.unsplash.com/photo-1601892782633-675465fa7f3a?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        start={-200}
        end={250}
        className="mx-auto w-1/6"
      />
      <ParallaxImageCard
        src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        start={200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImageCard
        src="https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        start={0}
        end={-500}
        className="ml-5 w-5/12"
      />
      <ParallaxImageCard
        src="https://images.unsplash.com/photo-1447433865958-f402f562b843?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        start={0}
        end={-300}
        className="mx-50 w-2/6"
      />
    </div>
  );
};

export default ParallaxImages;
