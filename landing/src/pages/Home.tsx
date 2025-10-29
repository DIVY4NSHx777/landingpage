import Herosection from '../widgets/Herosection/Herosection'
import Featuresection from '../widgets/Featuresection/Featuresection'
import Footer from '../widgets/Footer/Footer'
import Testimonials from '../widgets/Testimonials/Testimonials'
export default function Home() {
    return (
        <div className="bg-linear-to-tr from-[#000000] to-[#2c2b2b]">
            <Herosection />
            <Featuresection />
            <Testimonials />
            <Footer />
        </div>
    )
}