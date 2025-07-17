import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { OpenSourceCTA } from "@/components/OpenSourceCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ArchitectureSection />
        {/* <TestimonialsSection /> */}
        {/* <OpenSourceCTA /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
