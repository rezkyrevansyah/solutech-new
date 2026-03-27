import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import LayananSection from "@/components/sections/LayananSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import CustomersSection from "@/components/sections/CustomersSection";
import ExploreSection from "@/components/sections/ExploreSection";
import NewsSection from "@/components/sections/NewsSection";

export default function Home() {
  return (
    <main className="pt-0">
      <HeroSection />
      <AboutSection />
      <LayananSection />
      <WhyUsSection />
      <PartnersSection />
      <CustomersSection />
      <ExploreSection />
      <NewsSection />
    </main>
  );
}
