import { motion } from "framer-motion";


export default function LandingDashboard() {
    return (
          <div className="mt-20 sm:mt-28 md:mt-32 lg:mt-44 w-full flex justify-center">
               <div className="relative z-10 max-w-2xl text-center">
                    <motion.h1 
                    className="text-6xl font-semibold lg:text-5xl bg-linear-to-tr from-[#FC466B] to-[#3F5EFB] bg-clip-text text-transparent">
                      Your AI Visibility, At a Glance.
                      </motion.h1>
                    <p className="mt-6 text-lg">Empower your team with workflows that adapt to your needs, whether you prefer git synchronization or a AI Agents interface.</p>
                </div>

          </div>
    );
}