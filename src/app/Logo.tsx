"use client"
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-20 h-20 bg-dark uppercase text-light flex flex-col items-center justify-center leading-none rounded-full text-lg font-bold"
        whileHover={{
          backgroundColor: [
            "#19216C", // Blue
            "#841003", // Orange
            "#CF1124", // Red
            "#B30BA3", // Purple
            "#CB6E17", // Yellow
            "#07600E", // Green
            "#19216C", // Blue
          ],
          transition: { duration: 6, repeat: Infinity },
        }}
      >
        <h2 className="">Blue</h2>
        <h2 className="">Pine</h2>
        <h2 className=" text-xs  font-light">Studio</h2>
      </MotionLink>
    </div>
  );
};

export default Logo;
