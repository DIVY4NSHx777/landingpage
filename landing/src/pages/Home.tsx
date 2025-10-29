import Herosection from '../widgets/Herosection/Herosection'
import Featuresection from '../widgets/Featuresection/Featuresection'
import Footer from '../widgets/Footer/Footer'
import Testimonials from '../widgets/Testimonials/Testimonials'
export default function Home() {
    return (
        <div className="bg-gradientDark">
            <Herosection />
            <Featuresection />
            <Testimonials />
            <Footer />
        </div>
    )
}