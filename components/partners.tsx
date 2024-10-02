"use client";
import { motion } from "framer-motion";
import { Tooltip } from "@nextui-org/tooltip";
import React from "react";
import BlurIn from "./blur-in";
import { FeaturesSectionDemo } from "./card-section";
import SparklesText from "./sparkles-text";
import { Card, CardBody } from "@nextui-org/react";
import FeaturesEcommerce from "./features_ecommerce";
import Features from "./features";

export default function Partners() {
  return (
    <section className="w-full mx-auto py-5 gap-10 md:px-8 flex flex-col justify-center items-center">
      <div className="mb-0 justify-center items-center mx-auto">
        <FeaturesEcommerce />
      </div>

      <div className="justify-center items-center text-center">
        <motion.div
          initial={{ y: 20, opacity: 0, filter: "blur(3px)" }}
          whileInView={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", bounce: 0 }}
          className="flex flex-col gap-0"
          >
          <SparklesText sparklesCount={10} text="AI-Powered 3D e-commerce:" />
          <BlurIn
            word="Redefining product experiences"
            className="mt-3 text-3xl tracking-tight font-medium text-black dark:text-white"
          />
          <Features />
        </motion.div>
      </div>
    </section>
  );
}
