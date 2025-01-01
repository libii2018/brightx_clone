import About from "@/components/about";
import Benifits from "@/components/benifits";
import Contact from "@/components/contact";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Offer from "@/components/offer";
import Reviews from "@/components/reviews";
import Services from "@/components/services";
import Team from "@/components/team";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benifits />
      <About />
      <Offer />
      <Services />
      <Team />
      <Reviews />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
