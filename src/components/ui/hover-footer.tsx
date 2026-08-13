"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export const TextHoverEffect = ({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  // Update mask position on mouse move
  useEffect(() => {
    if (hovered && svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor, hovered]);

  // Automated gentle gradient sweep when section enters view
  useEffect(() => {
    if (!hovered && isInView) {
      const interval = setInterval(() => {
        setMaskPosition((prev) => {
          const currentCx = parseFloat(prev.cx) || 0;
          const nextCx = (currentCx + 0.8) % 100;
          return { cx: `${nextCx}%`, cy: "50%" };
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [hovered, isInView]);

  return (
    <motion.svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      onViewportEnter={() => setIsInView(true)}
      viewport={{ amount: 0.3 }}
      className={cn("select-none uppercase cursor-pointer", className)}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {(hovered || isInView) && (
            <>
              <stop offset="0%" stopColor="#E90046" />
              <stop offset="25%" stopColor="#FF4D8D" />
              <stop offset="50%" stopColor="#E90046" />
              <stop offset="75%" stopColor="#C4003B" />
              <stop offset="100%" stopColor="#E90046" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "0%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      
      {/* Background static text stroke */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.4"
        className="fill-transparent stroke-neutral-700 font-[helvetica] text-6xl font-black"
        style={{ opacity: hovered || isInView ? 0.7 : 0.3 }}
      >
        {text}
      </text>

      {/* Animated Red Stroke when reaching section */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.4"
        className="fill-transparent stroke-[#E90046] font-[helvetica] text-6xl font-black"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        whileInView={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        viewport={{ amount: 0.3 }}
        transition={{
          duration: 3.5,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>

      {/* Gradient Masked Text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.4"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-6xl font-black"
      >
        {text}
      </text>
    </motion.svg>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #0F172A 50%, #E9004622 100%)",
      }}
    />
  );
};
