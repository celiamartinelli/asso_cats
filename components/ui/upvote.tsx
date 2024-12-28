"use client";
import { useState } from "react";
import { motion, useAnimation } from "motion/react";

const UpvoteIcon = () => {
  const [isClicked, setIsClicked] = useState(false);
  const controls = useAnimation();

  const handleClick = () => {
    setIsClicked(!isClicked);
    controls.start("clicked");
  };

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
      onClick={handleClick}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        strokeWidth="2"
        viewBox="0 0 24 24"
        fill={isClicked ? "lightGrey" : "none"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          normal: {
            translateX: "0px",
            translateY: "0px",
            rotate: "0deg",
          },
          animate: {
            translateX: "-1px",
            translateY: "-2px",
            rotate: "-12deg",
          },
          clicked: {
            scale: 1.2,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          },
        }}
        animate={controls}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      >
        <path d="M7 10v12" />
        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
      </motion.svg>
    </div>
  );
};

export { UpvoteIcon };
