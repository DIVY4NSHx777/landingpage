import { motion } from "framer-motion";

export default function TopTransition() {
    return (
        <motion.svg 
            width="475" 
            height="1100" 
            viewBox="0 0 971 581" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 right-0 translate-x-[3px] translate-y-[3px]"
            >
            <defs>
            
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB3C1">
                    <animate 
                    attributeName="offset" 
                    values="0;1;0" 
                    dur="8s" 
                    repeatCount="indefinite" />
                </stop>

                <stop offset="33%" stopColor="#C8A2FF">
                    <animate 
                    attributeName="offset" 
                    values="0.33;0.66;0.33" 
                    dur="8s" 
                    repeatCount="indefinite" />
                </stop>

                <stop offset="66%" stopColor="#A8FFE0">
                    <animate 
                    attributeName="offset" 
                    values="0.66;1;0.66" 
                    dur="8s" 
                    repeatCount="indefinite" />
                </stop>

                <stop offset="100%" stopColor="#B3C8FF">
                    <animate attributeName="offset" values="1;0;1" dur="8s" repeatCount="indefinite" />
                </stop>
                </linearGradient>

                <filter id="softGlow" x="0" y="-4" width="970.282" height="585" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
                </filter>
            </defs>

            
            <g filter="url(#softGlow)">
                <motion.path
                d="M592.336 572.5L965.863 0.5L592.336 275.681M592.336 572.5H4.863M592.336 572.5V275.681M4.863 572.5L332.795 0.5H424.57M4.863 572.5L592.336 275.681M4.863 572.5L424.57 0.5M424.57 0.5L592.336 275.681"
                stroke="url(#flowGradient)"
                strokeWidth="2.5"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{
                    duration: 18,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1.2
                }}
                />
            </g>
        </motion.svg>
    )
}
