import Header from "@/components/ethernum/Header";
import Footer from "@/components/ethernum/Footer";
import Hero from "@/components/ethernum/Hero";
import FinalCTASection from "@/components/ethernum/FinalCTASection";
import MembershipSection from "@/components/ethernum/MembershipSection";
import { SecretSection } from "@/components/ethernum/SecretSection";
import ThreePillarsSection from "@/components/ethernum/ThreePillarsSection";
import TrustSection from "@/components/ethernum/TrustSection";
import FAQSection from "@/components/ethernum/FAQSection";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-brand-white text-brand-charcoal overflow-x-hidden">
      <Header />
      <Hero />
      <SecretSection />
      <MembershipSection />
      <ThreePillarsSection />
      <TrustSection />
      <FinalCTASection />
      <FAQSection />
      <Footer />
    </main>
  );
}
