import Navbar from '../components/atoms/Navbar';
import Pricing from '../components/molecules/Pricing';
import 'bootstrap/dist/css/bootstrap.css'
import Footer from '../components/atoms/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Pricing />
      <Footer />
    </>
  )
}
