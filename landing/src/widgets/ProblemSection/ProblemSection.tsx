import { Bot, ExternalLink, FileText, ShoppingCart } from "lucide-react";
import ProblemsectionCards from "./ProblemsectionCards";
import { motion } from "framer-motion";

export default function ProblemSection(){
    return (
        <div>
        <motion.section 
            variants={{hidden: {opacity: 0,y: 20,filter:"blur(12px)"},
                       visible: {opacity: 1,y: 0,filter:"blur(0px)",transition: {type: "spring",bounce: 0.4,duration: 2}}  
                     }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            className="w-full flex flex-col items-center justify-center py-20 bg-black">
                <div className="flex flex-col items-center justify-center text-center mb-6">
                    <h2 className="text-4xl bg-gradientHeading bg-clip-text text-transparent font-semibold mb-6 leading-tight pb-2 overflow-visible">
                        You’re winning on Google-But invisible inside AI answers?
                    </h2>    
                </div>
            <div className="relative flex gap-8 mt-16">

                <div
                    className="relative"
                    >
                        <ProblemsectionCards 
                            icon={Bot} 
                            title="AI assistants now answer billions of queries directly."
                        />
                </div>

                <div
                   className="relative"
                    >
                    <ProblemsectionCards 
                        icon={ExternalLink} 
                        title="They cite competitors, summarize reviews, and shape buying choices — without sending users to your site."
                    />
                </div>
                    
                <div
                    className="relative"
                    >
                    <ProblemsectionCards 
                        icon={FileText} 
                        title="Traditional SEO can’t measure when or how you appear in those conversations."
                    />
                </div>
    
                <div
                    className="relative"
                        >
                        <ProblemsectionCards 
                            icon={ShoppingCart} 
                            title="AI assistants now answer billions of queries directly."
                        />
                </div>

            </div>
        </motion.section>
    </div>
    )
}
