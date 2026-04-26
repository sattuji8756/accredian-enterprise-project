import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ClientsSection from '@/components/sections/ClientsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQsSection from '@/components/sections/FAQsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ClientsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FAQsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
