"use client";

import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.button
        className="bg-black text-white px-3 py-2 rounded-md"
        animate={{
          backgroundColor: ["#ff0000", "#00ff00", "#0000ff"],
          color: ["#0000ff", "#ff0000", "#00ff00"],
          transform: ["scale(1)", "scale(1.5)", "scale(1)"],
        }}
      >
        Scaled!
      </motion.button>
    </div>
  );
};

export default Page;
