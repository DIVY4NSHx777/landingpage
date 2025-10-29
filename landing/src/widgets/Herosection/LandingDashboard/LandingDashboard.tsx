import { motion } from "framer-motion";


export default function LandingDashboard() {
    return (
          <div className="mt-20 sm:mt-28 md:mt-24 lg:mt-24 w-full flex justify-center">
               <div className="relative z-10 max-w-2xl text-center">
                    <motion.h1 
                    initial={{ opacity: 0, filter:"blur(12px)" }}
                    animate={{ opacity: 1, filter:"blur(0px)" }}
                    transition={{ delay:0.2, duration: 1 }}
                    className="text-6xl font-semibold lg:text-5xl bg-gradientHeading bg-clip-text text-transparent">
                      Your AI Visibility, At a Glance.
                      </motion.h1>
                    <motion.p className="mt-6 text-lg bg-gradientHeading bg-clip-text text-transparent"
                    initial={{ opacity: 0, filter:"blur(12px)" }}
                    animate={{ opacity: 1, filter:"blur(0px)" }}
                    transition={{ delay:0.4, duration: 1 }}
                    >Empower your team with workflows that adapt to your needs, whether you prefer git synchronization or a AI Agents interface.</motion.p>
                </div>

          </div>
    );
}