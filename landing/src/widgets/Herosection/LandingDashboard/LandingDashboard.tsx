import { motion } from "framer-motion";
import Dashboard from "./Dashboard";

export default function LandingDashboard() {
    return (
         <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 mb-6 pt-28">
  <div className="max-w-2xl mb-10">
    <motion.h1
      className="text-6xl font-semibold lg:text-5xl bg-gradientHeading bg-clip-text text-transparent"
      initial={{ opacity: 0, filter: "blur(12px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      Your AI Visibility, At a Glance.
    </motion.h1>

    <motion.p
      className="mt-6 text-lg bg-gradientHeading bg-clip-text text-transparent"
      initial={{ opacity: 0, filter: "blur(12px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ delay: 0.4, duration: 1 }}
    >
      Empower your team with workflows that adapt to your needs, whether
      you prefer git synchronization or an AI Agents interface.
    </motion.p>
  </div>
<Dashboard />
</section>

    );
}