import { Card,CardHeader,CardContent } from "@/components/ui/card";

export default function Testimonials(){
    return (
        <section className="py-16 md:py-32">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="text-4xl text-secondary font-bold mb-6">You’re winning on Google.</h2>
                    <p className="text-lg text-secondary mb-12">
                        But invisible inside AI answers.
                    </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                    <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2 ">
                        <CardHeader>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </CardHeader>
                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic exercitationem natus iure voluptatibus veritatis alias eveniet, omnis amet molestias. Mollitia minus ut expedita amet non impedit aperiam sunt laborum? Omnis.</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">

                                    <div>
                                        <span className="text-sm font-medium">Lorem ipsum dolor sit amet.</span>
                                        <span className="text-muted-foreground block text-sm">Lorem ipsum dolor sit amet.</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="md:col-span-2">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, amet!</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    
                                    <div>
                                        <span className="text-sm font-medium">Lorem ipsum dolor sit amet.</span>
                                        <span className="text-muted-foreground block text-sm">Lorem ipsum dolor sit amet.</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, amet!</p>

                                <div className="grid items-center gap-3 [grid-columns:auto_1fr]">
                                    <div>
                                        <span className="text-sm font-medium">Lorem ipsum dolor sit amet.</span>
                                        <span className="text-muted-foreground block text-sm">Lorem ipsum dolor sit amet.</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="card variant-mixed">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, amet!</p>

                                <div className="grid grid-cols-[auto_1fr] gap-3">
                                    
                                    <div>
                                        <span className="text-sm font-medium">Lorem ipsum dolor sit amet.</span>
                                        <span className="text-muted-foreground block text-sm">Lorem ipsum dolor sit amet.</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}