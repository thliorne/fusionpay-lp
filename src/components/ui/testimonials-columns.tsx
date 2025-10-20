"use client";
import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: {
    text: string;
    image: string;
    name: string;
    role: string;
  }[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div 
                className="relative group p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent bg-black/70 shadow-lg shadow-black/20 max-w-sm w-full backdrop-blur-md border border-white/10 transition-all duration-300 hover:border-white/20 hover:bg-black/60" 
                key={i}
              >
                <div className="relative z-10">
                  <div className="text-white/90">{text}</div>
                  <div className="flex items-center gap-4 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover border-2 border-white/20"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold tracking-tight leading-5 text-white">{name}</div>
                      <div className="leading-5 text-white/70 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  );
};
