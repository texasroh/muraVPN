import { animate, motion, useAnimation, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const navVariant = {
  top: {
    backgroundColor: "rgba(255,255,255,0)",
    color: "rgb(255,255,255)",
    transition: { duration: 0.1 },
  },
  scroll: {
    backgroundColor: "rgba(255,255,255,1)",
    color: "rgb(0,0,0)",
    transition: { duration: 0.1 },
  },
};

const Header = () => {
  const { scrollY } = useScroll();
  const navAnimate = useAnimation();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimate.start("scroll");
      } else {
        navAnimate.start("top");
      }
    });
  }, []);
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-10 px-8 py-2"
      variants={navVariant}
      initial="top"
      animate={navAnimate}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div>Logo</div>
        <div className="flex items-center">
          <div className="cursor-pointer select-none px-4 py-1 font-medium hover:opacity-70">
            How to use
          </div>
          <div className="cursor-pointer select-none rounded bg-purple-500 px-4 py-1 font-medium text-white hover:opacity-70">
            Request VPN
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
