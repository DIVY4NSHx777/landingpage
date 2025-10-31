import { motion } from "framer-motion";

interface FeaturedRowsProps {
    title: string;
    description: string;
    image: string;
}

export default function FeaturedRows({ title, description, image }: FeaturedRowsProps) {
    return (
        <div className="group w-full">
            <div className="flex flex-col lg:flex-row items-center gap-8 mt-10">
                
                <div className="relative w-full lg:w-1/2 h-full">
                    <div className="absolute inset-0 rounded-2xl -z-10 opacity-60 blur-xl bg-gradientHeading transition-all duration-500 group-hover:opacity-90"/>
                    <motion.div 
                        className="bg-cards rounded-3xl p-8 w-full h-full flex flex-col justify-center border border-black backdrop-blur-sm transition-transform duration-300 group-hover:scale-[1.03]"
                    >
                        <h2 className="text-4xl font-semibold bg-gradientHeading bg-clip-text text-transparent mb-6">
                            {title}
                        </h2>
                        <div className="h-1 w-16 bg-gradientHeading mb-6 rounded-full"></div>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            {description}
                        </p>
                    </motion.div>
                </div>

                <div className="relative w-full lg:w-1/2 flex justify-center">
                    <motion.div
                        className="relative w-80 h-80 rounded-3xl overflow-hidden border-2 border-black backdrop-blur-sm transition-transform duration-300 group-hover:scale-[1.03]"
                    >
                        <motion.img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0.9 }}
                            whileHover={{ 
                                opacity: 1,
                                scale: 1.05,
                                transition: { duration: 0.5 }
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}