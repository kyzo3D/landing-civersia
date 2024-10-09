"use client";
/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";
import { RainbowButton } from "../components/rainbow-button";

export default function Hero() {
  return (
    <div className="relative justify-center items-center">
      <section className="max-w-screen-xl mx-auto px-4 py-20 gap-12 md:px-8 flex flex-col justify-center items-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.6, type: "spring", bounce: 0 }}
          className="z-10 flex flex-col justify-center items-center space-y-5 max-w-4xl mx-auto text-center"
        >
          <span className="z-10 bg-white/5 w-fit h-full text-sm px-5 py-2 border border-white/10 rounded-full">
            <p className="z-10 text-lg tracking-wider">
              Civersia Beta!
            </p>
          </span>
          <h1 className="z-10 text-4xl font-medium tracking-tighter mx-auto md:text-6xl text-pretty ">
            Revolutionize your e-commerce with AI-Powered 3D visualization
          </h1>
          <p className="z-10 max-w-2xl text-lg mx-auto text-muted-foreground text-balance">
            Transform product listings into immersive 3D experiences. No tech skills needed, works on any device.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="z-10 items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0"
          >
            <RainbowButton>
              <a target="_blank" href="https://forms.gle/cumctGouWJz2Px737">
                <p className="font-bold text-black">
                  Boost your sales with 3D
                </p>
              </a>
            </RainbowButton>
          </motion.div>
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.5, type: "spring", bounce: 0 }}
        className="z-1 w-full h-full absolute -top-72 flex justify-end items-center pointer-events-none "
      >
        <div className="w-3/4 flex justify-center items-center">
          <div className="w-20 h-[600px] bg-rose-500 blur-[72px] rounded-3xl max-sm:rotate-[15deg] sm:rotate-[35deg] [will-change:transform]"></div>
        </div>
      </motion.div>
    </div>
  );
}
