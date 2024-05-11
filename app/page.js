import AboutUs from "@/components/AboutUs";
import Blogs from "@/components/Blogs";
import Clients from "@/components/Clients";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import KnowUs from "@/components/KnowUs";
import Numbers from "@/components/Numbers";
import Services from "@/components/Services";
import TrueAI from "@/components/TrueAI";
import Why from "@/components/WhyChoose";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  text-left w-full ">
      <Hero />
      <AboutUs />
      <Services />
      <TrueAI />
      <Why />
      <Blogs />
      <Clients />
      <Numbers />
      <KnowUs />
      <ContactUs />
    </main>
  );
}
