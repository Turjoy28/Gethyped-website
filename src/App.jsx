import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutStrip from './components/AboutStrip';
import ExpertiseSection from './components/ExpertiseSection';
import WorkSection from './components/WorkSection';
import BrandsSection from './components/BrandsSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutStrip />
      <ExpertiseSection />
      <WorkSection />
      <BrandsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
