import HeroSection from "./components/Hero";
import FeaturedProject from "./components/Featured";
import BounceTargetGame from "./components/BounceTargetGame";
import InnovationShowcase from "./components/Innovation";
import PersonalMission from "./components/Mission";
import SkillsLeadership from "./components/Skills";
import ContactCTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProject />
      <BounceTargetGame />
      <InnovationShowcase />
      <PersonalMission />
      <SkillsLeadership />
      <ContactCTA />
    </>
  );
}
