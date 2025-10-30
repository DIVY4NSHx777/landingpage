import {Button} from "@/components/ui/button"
import {motion} from "framer-motion"
import { ArrowRight, ChevronRight} from "lucide-react";
import { useState } from "react";
import BottonTransition from "./Transitions/BottonTransition";
import TopTransition from "./Transitions/TopTransition";

export default function HeroSection() {
    const [hovered, setHovered] = useState(false);
  return (
    <>
      
      <header className="w-full py-2 bg-blur backdrop-blur-sm shadow-sm fixed top-0 left-0 z-50">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6">
          <h1 className="text-2xl font-bold bg-gradientHeading bg-clip-text text-transparent">Aurora</h1>
          <ul className="flex gap-6 text-primary-foreground font-medium">
            <li className="text-primary-foreground hover:text-muted-foreground cursor-pointer">Features</li>
            <li className="text-primary-foreground hover:text-muted-foreground cursor-pointer">Solutions</li>
            <li className="text-primary-foreground hover:text-muted-foreground cursor-pointer">Pricing</li>
          </ul>
          <div className="flex gap-2">
            <Button size="sm" className="bg-backdrop">
            Login
          </Button>
           <Button
                className=" flex items-center gap-2 text-sm font-medium text-primary bg-accent px-3 py-2 transition rounded-3xl"
            >
                    See Demo
                    
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
                    duration: 8
                  }
                }   
            }}
              initial="hidden"
              animate="visible"
              className="relative flex flex-col items-center justify-center text-center min-h-screen  px-6 pt-32 md:pt-40 lg:pt-48   ">
                <motion.div
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 1.6, ease: "easeOut" }}
                  className="absolute inset-0 bg-hero bg-cover bg-center"
                  style={{ zIndex: -1 }}
                />
            <TopTransition/>

            <motion.h1 className="text-6xl font-semibold text-secondary mb-4 leading-tight max-w-3xl mx-auto bg-gradientHeading bg-clip-text text-transparent"
                initial={{ opacity: 0, filter:"blur(12px)" }}
                animate={{ opacity: 1, filter:"blur(0px)" }}
                transition={{ delay:0.2, duration: 1 }}
            >
              Own your presence in the age of AI answers.
            </motion.h1>
            <motion.p className="text-lg text-secondary mb-8 max-w-2xl bg-gradientHeading bg-clip-text text-transparent"
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
                    transition={{ delay:1.6, duration: 1.5 }}
                    className="flex gap-5 ">
                  <motion.button
                      className=" flex items-center gap-2 text-sm font-medium text-secondary hover:bg-accent hover:text-accent-foreground px-3 py-2 transition rounded-3xl"
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
                      className=" flex items-center gap-2 text-sm font-medium text-primary bg-accent px-3 py-2 transition rounded-3xl"
                  >
                    See Demo
                    
                  </Button>
              </motion.div>
                 <BottonTransition/>
                 <div className="w-max h-max max-w-2xl mt-8 rounded-2xl">
                    <img src="/dashboard (1).webp" alt="" className="w-full h-full object-cover rounded-2xl"/>
                 </div>
      </motion.section>
    </>
  );
}
