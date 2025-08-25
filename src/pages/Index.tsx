import Hero from "@/components/Hero";
import PainRecognition from "@/components/PainRecognition";
import Transformation from "@/components/Transformation";
import PackContents from "@/components/PackContents";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PainRecognition />
      <Transformation />
      <PackContents />
      <Footer />
    </div>
  );
};

export default Index;
