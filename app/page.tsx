import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AdvantageSection from '@/components/AdvantageSection';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AdvantageSection />
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}

