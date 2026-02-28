import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Programs from "@/app/components/Programs";
import Testimonials from "@/app/components/Testimonials";
import Apply from "@/app/components/Apply";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Testimonials />
      <Apply />
      <Footer />
    </>
  );
}
