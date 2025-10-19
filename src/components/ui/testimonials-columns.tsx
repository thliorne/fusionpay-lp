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
                className="relative p-6 rounded-2xl bg-black/80 shadow-lg shadow-black/20 max-w-sm w-full backdrop-blur-md overflow-hidden" 
                key={i}
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/50 to-accent/50 opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-lg" />
                <div 
                  className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/70 via-accent/70 to-primary/70"
                />
                <div className="relative z-10 p-0 rounded-2xl bg-black/80">
                  <div className="text-white/90">{text}</div>
                  <div className="flex items-center gap-3 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold tracking-tight leading-5 text-white">{name}</div>
                      <div className="leading-5 opacity-70 tracking-tight text-white/80">{role}</div>
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
