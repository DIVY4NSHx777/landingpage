import {Card,CardHeader,CardContent,CardFooter} from "@/components/ui/card"
import { Zap ,Sparkle,Settings2} from "lucide-react"
export default function Featuresection() {
    return (
        <section className="py-16 md:py-24 ">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="text-4xl font-bold mb-6">Features</h2>
                    <p className="text-lg text-gray-600 mb-12">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, ab?

                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader className="pb-3 flex items-center justify-center">
                            
                            <Zap className=" size-12 "/>
                            
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
                            <Settings2 className=" size-12 "/>
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
                            <Sparkle className=" size-12 "/>
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
        </section>
    )
}