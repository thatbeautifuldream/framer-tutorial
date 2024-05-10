"use client";

import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.button
        className="bg-black text-white px-3 py-2 rounded-md"
        animate={{ scale: 2 }}
      >
        Scaled!
      </motion.button>
    </div>
  );
};

export default Page;
