import { motion } from "framer-motion";

export default function BottonTransition() {
    return  <motion.svg
    width="260"
    height="1000"
    viewBox="0 0 525 832"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-0 left-0 translate-x-[-6px] translate-y-[6px] "

  >
    <defs>
      
      <linearGradient id="flowGradientTall" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ADA996">
          <animate 
          attributeName="offset" 
          values="0;1;0" 
          dur="8s" 
          repeatCount="indefinite" />
        </stop>

        <stop offset="33%" stopColor="#F2F2F2">
          <animate 
          attributeName="offset" 
          values="0.33;0.66;0.33" 
          dur="8s" 
          repeatCount="indefinite" />
        </stop>

        <stop offset="66%" stopColor="#DBDBDB">
          <animate 
            attributeName="offset" 
            values="0.66;1;0.66" 
            dur="8s" 
            repeatCount="indefinite" />
        </stop>

        <stop offset="100%" stopColor="#EAEAEA">
          <animate 
          attributeName="offset" 
          values="1;0;1" 
          dur="8s" 
          repeatCount="indefinite" />
        </stop>
      </linearGradient>

      <filter
        id="softGlowTall"
        x="0"
        y="-4"
        width="524.5"
        height="835.266"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

   
    <g filter="url(#softGlowTall)">
      <motion.path
        d="M520 319.925L4.5 0.424988L252.5 319.925M520 319.925V822.425M520 319.925H252.5M520 822.425L4.5 541.925V463.425M520 822.425L252.5 319.925M520 822.425L4.5 463.425M4.5 463.425L252.5 319.925"
        stroke="url(#flowGradientTall)"
        strokeWidth="2.5"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0.6, 0] }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1.2
        }}
      />
    </g>
  </motion.svg>
}