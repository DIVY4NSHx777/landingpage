import {Card,CardHeader,CardContent,CardFooter} from "@/components/ui/card"
import { Zap ,Sparkle,Settings2} from "lucide-react"
import { motion } from "framer-motion";

export default function Featuresection() {
   const MotionZap=motion(Zap)
   const MotionSparkle=motion(Sparkle)
   const MotionSettings2=motion(Settings2)
    return (
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
        className="py-16 md:py-48 feature-bg">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="text-4xl font-bold mb-6">Features</h2>
                    <p className="text-lg text-gray-600 mb-12">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, ab?

                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader className="pb-3 flex items-center justify-center">
                            
                            <MotionZap
                                size={36}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                                whileHover={{
                                    scale: 1.25,
                                    rotate: 8,
                                    color:"blue"
                                    }}
                                fill=" yellow"
                                    className="text-yellow-500"
                                /> 
                        </CardHeader>
                        <CardContent>
                            <p>Lorem, ipsum dolor.</p>
                        </CardContent>
                        <CardFooter>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader className="pb-3 flex items-center justify-center">
                            <MotionSettings2
                            size={40}
                            className="text-yellow-400"
                            whileHover={{
                                scale: 1.25,
                                
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                            />
                        </CardHeader>
                        <CardContent>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </CardContent>
                        <CardFooter>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader className="pb-3 flex items-center justify-center">
                            <MotionSparkle
                            size={40}
                            className="text-yellow-400"
                            whileHover={{
                                scale: 1.1,
                                
                            }}
                             transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            />
                        </CardHeader>
                        <CardContent>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </CardContent>
                        <CardFooter>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </motion.section>
    )
}