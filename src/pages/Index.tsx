import Hero from "@/components/Hero";
import LeadMagnet from "@/components/LeadMagnet";
import PainRecognition from "@/components/PainRecognition";
import Transformation from "@/components/Transformation";
import PackContents from "@/components/PackContents";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LeadMagnet />
      <PainRecognition />
      <Transformation />
      <PackContents />
      <Footer />
    </div>
  );
};

export default Index;
