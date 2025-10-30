import { motion } from "framer-motion";

interface FeaturedRowsProps {
    title: string;
    description: string;
    image: string;  
}

export default function FeaturedRows({ title, description, image }: FeaturedRowsProps) {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-12 mt-10">
            <div className="w-full lg:w-1/2">
                <h2 className="text-4xl font-semibold bg-gradientHeading bg-clip-text text-transparent mb-6 text-left">
                    {title}
                </h2>
                <p className="text-lg text-gray-300 mb-8 text-left">
                    {description}
                </p>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
                <motion.div
                    className="w-80 h-80 relative overflow-hidden"
                    
                >
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>
        </div>
    );
}