import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import AboutIsland from '@/components/AboutIsland';
import Amenities from '@/components/Amenities';
import GalleryPreview from '@/components/GalleryPreview';
import Calendar from '@/components/Calendar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <AboutIsland />
      <Amenities />
      <GalleryPreview />
      <Calendar />
      <Footer />
    </main>
  );
}
