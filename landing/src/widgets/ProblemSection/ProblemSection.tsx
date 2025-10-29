import { Bot, ExternalLink, FileText, ShoppingCart } from "lucide-react";
import ProblemsectionCards from "./ProblemsectionCards";
import { motion } from "framer-motion";

export default function ProblemSection(){
    return (
        <section className="w-full flex flex-col items-center justify-center py-20 bg-black">
                <div className="flex flex-col items-center justify-center text-center mb-6">
                    <h2 className="text-4xl bg-gradientHeading bg-clip-text text-transparent font-semibold mb-6 leading-tight pb-2 overflow-visible">
                        You’re winning on Google-But invisible inside AI answers?
                    </h2>    
                </div>
            <div className="relative flex gap-0 mt-16">

                <motion.div
                    initial={{ opacity: 0, y: 30, rotate: -12 }}
                     animate={{ opacity: 1, y: 20, rotate: -15 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    whileHover={{y: -20,scale: 1.08,rotate: -12,zIndex: 20,transition: { duration: 0.25 }}}
                    className="relative -ml-6 first:ml-0"
                    >
                        <ProblemsectionCards 
                            icon={Bot} 
                            title="AI assistants now answer billions of queries directly."
                        />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30, rotate: -10 }}
                    animate={{ opacity: 1, y: -30, rotate: -5 }}
                    transition={{ duration: 0.7, delay: 0.1, type: "spring" }}
                    whileHover={{y: -20,scale: 1.08,rotate: -2,zIndex: 20,transition: { duration: 0.25 }}}
                    className="relative -ml-6 first:ml-0"
                    >
                    <ProblemsectionCards 
                        icon={ExternalLink} 
                        title="They cite competitors, summarize reviews, and shape buying choices — without sending users to your site."
                    />
                </motion.div>
                    
                <motion.div
                    initial={{ opacity: 0, y: 30, rotate: -8 }}
                    animate={{ opacity: 1, y: -30, rotate: 5 }}
                    transition={{ duration: 0.9, delay: 0.3, type: "spring" }}
                    whileHover={{y: -20,scale: 1.08,rotate: 5,zIndex: 20,transition: { duration: 0.25 }}}
                    className="relative -ml-6 first:ml-0"
                    >
                    <ProblemsectionCards 
                        icon={FileText} 
                        title="Traditional SEO can’t measure when or how you appear in those conversations."
                    />
                </motion.div>
    
                <motion.div
                    initial={{ opacity: 0, y: 30, rotate: -6 }}
                    animate={{ opacity: 1, y: 20, rotate: 15}}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                    whileHover={{y: -20,scale: 1.08,rotate: 15,zIndex: 20,transition: { duration: 0.25 }}}
                    className="relative -ml-6 first:ml-0"
                        >
                        <ProblemsectionCards 
                            icon={ShoppingCart} 
                            title="AI assistants now answer billions of queries directly."
                        />
                </motion.div>

            </div>
        </section>
    )
}
