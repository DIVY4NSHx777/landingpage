import {Button} from "@/components/ui/button"
import {motion} from "framer-motion"
import { ArrowRight, ChevronRight} from "lucide-react";
import { useState } from "react";
import BottonTransition from "./BottonTransition";
import TopTransition from "./TopTransition";
import LandingDashboard from "./LandingDashboard/LandingDashboard";
export default function HeroSection() {
    const [hovered, setHovered] = useState(false);
  return (
    <>
      
      <header className="w-full py-2 bg-blur backdrop-blur-sm shadow-sm fixed top-0 left-0 z-50">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6">
          <h1 className="text-2xl font-bold text-rose-600">Aurora</h1>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li className="hover:text-rose-600 cursor-pointer transition">Features</li>
            <li className="hover:text-rose-600 cursor-pointer transition">Solutions</li>
            <li className="hover:text-rose-600 cursor-pointer transition">Pricing</li>
          </ul>
          <div className="flex gap-2">
            <Button className=" bg-rose-600 text-white hover:bg-rose-700 transition">
            Login
          </Button>
           <Button
            className="bg-transparent text-rose-600 hover:bg-rose-100 hover:text-rose-600 px-6 py-3 transition">
            Sign Up
          </Button>
          </div>
        </nav>
      </header>

      <motion.section 
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                  filter:"blur(12px)"
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter:"blur(0px)",
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 2
                  }
                }   
            }}
              initial="hidden"
              animate="visible"
              className="relative flex flex-col items-center justify-center text-center min-h-screen  px-6 pt-8   ">

            <TopTransition/>

            <motion.h1 className="text-6xl font-semibold bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] bg-clip-text text-transparent mb-4 leading-tight max-w-3xl mx-auto"
                initial={{ opacity: 0, filter:"blur(12px)" }}
                animate={{ opacity: 1, filter:"blur(0px)" }}
                transition={{ delay:0.2, duration: 1 }}
            >
              Own your presence in the age of AI answers.
            </motion.h1>
            <motion.p className="text-lg bg-gradient-to-tr from-[#FC5C7D] to-[#6A82FB]  bg-clip-text text-transparent mb-8 max-w-2xl"
                initial={{ opacity: 0, filter:"blur(10px)" }}
                animate={{ opacity: 1, filter:"blur(0px)" }}
                transition={{ delay:0.4, duration: 1.5 }}
            >
              Aurora helps brands track how they appear — and influence — inside ChatGPT, Perplexity, Gemini, and other AI engines.
                Know when you’re mentioned, how you’re represented, and what drives conversion decisions.
            </motion.p>

              <motion.div 
                    initial={{ opacity: 0, filter:"blur(8px)" }}
                    animate={{ opacity: 1, filter:"blur(0px)" }}
                    transition={{ delay:0.6, duration: 1.5 }}
                    className="flex gap-5 ">
                  <motion.button
                      className=" flex items-center gap-2 text-sm font-medium h-10  bg-rose-600 text-white hover:bg-rose-500  px-3 py-2 transition rounded-3xl"
                      onHoverStart={() => setHovered(true)}
                      onHoverEnd={() => setHovered(false)}
                    >
                        Request Early Access
                      <motion.div
                          key={hovered ? "arrow" : "chevron"}
                          initial={{ opacity: 0, x: -4 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 4 }}
                          transition={{duration:0.2,ease:"easeOut"}}
                        >
                          {hovered ? <ArrowRight size={18} /> : <ChevronRight size={18} />}
                      </motion.div>
                  </motion.button>
                  <Button
                    className=" flex items-center gap-2 bg-transparent text-sm font-medium h-10 text-rose-600 hover:bg-rose-100 hover:text-rose-600 px-3 py-2 transition rounded-3xl"
                  >
                    See Demo
                    
                  </Button>
              </motion.div>

                 <BottonTransition/>
                 <LandingDashboard/>
      </motion.section>
    </>
  );
}
