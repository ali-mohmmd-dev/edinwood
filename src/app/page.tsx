"use client";

import SDGStatic from "@/components/site/SDGStatic";
import SignatureField from "@/components/site/SignatureField";

import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Programs from "@/components/site/Programs";
import Testimonials from "@/components/site/Testimonials";
import Gallery from "@/components/site/Gallery";
import WhyUs from "@/components/site/WhyUs";
import News from "@/components/site/News";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <SignatureField />
      <div className="relative">
        <SDGStatic />
        <Programs />
      </div>
      {/* <Gallery /> */}
      <WhyUs />
      <News />
      <Testimonials />
      <Footer />
    </main>
  );
}
