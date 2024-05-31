"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        className="bg-gray-400 w-24 h-24"
        animate={{
          scale: [1, 2, 2, 1, 1], // can pass array of values
          rotate: [0, 0, 180, 180, 0], // must be the same length as other arrays
          borderRadius: ["0%", "0%", "50%", "50%", "0%"], // change border radius accordingly
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>
  );
}
