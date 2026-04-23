import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import PageHero from "@/components/site/PageHero";

const FAQs = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero title="FAQs" />
      <div className="container-x py-16 md:py-28">
        <h2 className="font-display text-3xl text-burgundy">FAQs Page Content</h2>
        <p className="text-muted-foreground mt-4">This is a dummy page for FAQs. It will be built in the upcoming phases.</p>
      </div>
      <Footer />
    </main>
  );
};

export default FAQs;
