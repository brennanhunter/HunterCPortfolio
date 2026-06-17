import HeroSection from "./components/Hero";
import FeaturedProject from "./components/Featured";
import ShippedProducts from "./components/ShippedProducts";
import BounceTargetGame from "./components/BounceTargetGame";
import InnovationShowcase from "./components/Innovation";
import SkillsLeadership from "./components/Skills";
import ContactCTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProject />
      <ShippedProducts />
      <InnovationShowcase />
      <BounceTargetGame />
      <SkillsLeadership />
      <ContactCTA />
    </>
  );
}
