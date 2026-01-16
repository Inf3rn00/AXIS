import Features from "../Components/Features";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
const LandingPage = () => {
  return (
    <div className="h-screen overflow-y-auto overscroll-none">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default LandingPage;
