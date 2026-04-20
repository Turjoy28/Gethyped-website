import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutStrip from './components/AboutStrip';
import ExpertiseSection from './components/ExpertiseSection';
import WorkSection from './components/WorkSection';
import BrandsSection from './components/BrandsSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip overflow-y-visible">
        <HeroSection />
        <AboutStrip />
        <ExpertiseSection />
        <WorkSection />
        <BrandsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
