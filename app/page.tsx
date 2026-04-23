import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Method from "@/components/sections/Method";
import Services from "@/components/sections/Services";
import Ambassador from "@/components/sections/Ambassador";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Method />
        <Services />
        <Ambassador />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
