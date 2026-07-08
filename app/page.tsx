import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Learning from "@/components/Learning";
import Education from "@/components/Education";
import BeyondKeyboard from "@/components/BeyondKeyboard";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden w-full">
        <Hero />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Learning />
        <Divider />
        <Education />
        <Divider />
        <BeyondKeyboard />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
