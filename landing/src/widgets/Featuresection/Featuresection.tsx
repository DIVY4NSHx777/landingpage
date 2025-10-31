import { motion } from "framer-motion";
import FeaturedRows from "./FeaturedRows";
export default function Featuresection() {
    return (
        <motion.section 
            variants={{hidden: {opacity: 0,y: 20,filter:"blur(12px)"},
                       visible: {opacity: 1,y: 0,filter:"blur(0px)",transition: {type: "spring",bounce: 0.4,duration: 2}}  
                     }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 md:py-24 bg-black"
        >
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-4xl font-semibold text-center mb-16 bg-gradientHeading bg-clip-text text-transparent">
                    Aurora tracks, diagnoses, and improves your brand's performance inside AI engines.
                </h1>
                {/* 1 */}
                <FeaturedRows 
                    title="Track Visibility" 
                    description="Detect every time your brand is cited in ChatGPT, Perplexity, Gemini, and more. Measure Citation Share of Voice (CSOV), sentiment, and hallucination rate." 
                    image="/visib.png"/>
                {/* 2 */}
                <FeaturedRows 
                    title="Understand Intent"    
                    description="Classify each prompt as research → compare → evaluate → decide.See exactly where you appear in the model’s reasoning flow — not just if you’re mentioned."
                    image="/trackvisib.png"/>
                <FeaturedRows 
                    title="Take Action" 
                    description="Aurora’s Action Recipes suggest practical steps: publish proofs, fix coverage gaps, or counter competitor claims — powered by coordinated AI agents." 
                    image="/trackvisib.png"/>
                <FeaturedRows 
                    title="Prove ROI" 
                    description="Link visibility gains to measurable business impact through CSBOC (Citation-Share Based Outcome Correlation).Know which actions actually influence pipeline and revenue." 
                    image="/trackvisib.png"/>
                
            </div>
            
        </motion.section>
    )
}