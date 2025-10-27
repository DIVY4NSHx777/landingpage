import {Button} from "@/components/ui/button"
export default function HeroSection() {
  return (
    <>
      
      <header className="w-full py-4 bg-white shadow-sm fixed top-0 left-0 z-50">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6">
          <h1 className="text-2xl font-bold text-rose-600">Landing</h1>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li className="hover:text-rose-600 cursor-pointer transition">Features</li>
            <li className="hover:text-rose-600 cursor-pointer transition">Solutions</li>
            <li className="hover:text-rose-600 cursor-pointer transition">Pricing</li>
          </ul>
          <Button className="bg-rose-600 text-white hover:bg-rose-700 transition">
            Get a Demo
          </Button>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center text-center min-h-screen bg-linear-gradient-to-b from-rose-50 to-white px-6 pt-24 hero-bg">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
          Hero Section
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odit voluptatum illum totam eos iure exercitationem aperiam tenetur saepe voluptas autem harum aliquam, dolorum aliquid. Sunt ratione sapiente ducimus at.
        </p>

        <div className="flex gap-4">
          <Button className="bg-rose-600 text-white px-6 py-3 hover:bg-rose-700 transition">
            Get Started
          </Button>
          <Button
            variant="outline"
            className="border-rose-600 text-rose-600 hover:bg-rose-50 px-6 py-3 transition"
          >
            Learn More
          </Button>
        </div>
      </section>
    </>
  );
}