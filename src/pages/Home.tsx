import Herosection from '../widgets/Herosection/Herosection'
import Featuresection from '../widgets/Featuresection/Featuresection'
import Footer from '../widgets/Footer/Footer'
import Testimonials from '../widgets/Testimonials/Testimonials'
import ProblemSection from '../widgets/ProblemSection/ProblemSection'
export default function Home() {
    return (
        <div className="bg-black">
            <Herosection />
            <ProblemSection />
            <Featuresection />
            <Testimonials />
            <Footer />
        </div>
    )
}