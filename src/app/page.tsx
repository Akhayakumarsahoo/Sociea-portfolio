import Hero from "@/app/components/Hero";
import About from "./components/About";
import SuccessStories from "./components/SuccessStories";
import Services from "./components/Services";
import OurClients from "./components/OurClients";
import ClientTestimonials from "./components/ClientTestimonial";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <SuccessStories />
      <Services />
      <OurClients />
      <ClientTestimonials />
    </>
  );
}
