import { motion } from "framer-motion";

export default function Featuresection() {
    return (
        <motion.section 
            variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
                visible: { 
                    opacity: 1, 
                    y: 0, 
                    filter: "blur(0px)", 
                    transition: { 
                        type: "spring",
                        bounce: 0.4,
                        duration: 2 
                    }  
                }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.8 }}
            className="py-16 md:py-24 bg-black"
        >
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-4xl font-semibold text-center mb-16 bg-gradientHeading bg-clip-text text-transparent">
                    Aurora tracks, diagnoses, and improves your brand's performance inside AI engines.
                </h1>
                {/* 1 */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl font-semibold bg-gradientHeading bg-clip-text text-transparent mb-6 text-left">
                             Track Visibility
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 text-left">
                            Detect every time your brand is cited in ChatGPT, Perplexity, Gemini, and more. Measure Citation Share of Voice (CSOV), sentiment, and hallucination rate.
                        </p>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center">
                        <motion.div
                            className="w-64 h-64 bg-gradientFeature rounded-2xl"
                            animate={{
                                scale: [1, 1.05, 1],
                                rotate: [0, 5, -5, 0],
                                borderRadius: ["20%", "30%", "20%"],
                            }}
                            transition={{
                                duration: 8,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        >
                            <div className="w-full h-full flex items-center justify-center text-white font-bold">
                                Animation
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* 2 */}
                <div className="flex flex-col lg:flex-row items-center gap-12 mt-16">        
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl font-semibold bg-gradientHeading bg-clip-text text-transparent mb-6 text-left">
                           Understand Intent
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 text-left">
                           Classify each prompt as research → compare → evaluate → decide.exactly where you appear in the model’s reasoning flow — not just if you’re mentioned.
                        </p>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center">
                        <motion.div
                            className="w-64 h-64 bg-gradientFeature rounded-2xl"
                            animate={{
                                scale: [1, 1.05, 1],
                                rotate: [0, 5, -5, 0],
                                borderRadius: ["20%", "30%", "20%"],
                            }}
                            transition={{
                                duration: 8,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        >
                            <div className="w-full h-full flex items-center justify-center text-secondary font-bold">
                                Animation
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}