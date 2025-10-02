"use client";

import Player from "lottie-react";
import loader from "@/public/lottie/loader.json";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Player
        autoplay
        loop
        animationData={loader}
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  );
}
