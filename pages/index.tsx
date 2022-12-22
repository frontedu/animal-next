import Navbar from '../components/atoms/Navbar'
import Hero from '../components/molecules/Hero'
import ForYou from '../components/molecules/ForYou'
import Devices from '../components/molecules/Devices'
import Trial from '../components/molecules/Trial'
import FAQ from '../components/molecules/Accordion'
import Footer from '../components/atoms/Footer'
import 'bootstrap/dist/css/bootstrap.css'


export default function Home() {
  return (
    <>

      <Navbar />
      <Hero />
      <ForYou />
      <Devices />
      <Trial />
      <FAQ />
      <Footer />

      <script src="https://unpkg.com/pace-progress@1.0.2/pace.min.js" defer/>
        <script src="https://unpkg.com/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" async/>
       
    </>
  )
}
