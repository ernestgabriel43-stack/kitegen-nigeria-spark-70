import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OurStory from "@/components/OurStory";
import Technology from "@/components/Technology";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <OurStory />
      <Technology />
      <Projects />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
