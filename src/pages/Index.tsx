import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServerStats from "@/components/ServerStats";
import DonateSection from "@/components/DonateSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <HeroSection />
      <ServerStats />
      <DonateSection />
      <Footer />
    </div>
  );
};

export default Index;
