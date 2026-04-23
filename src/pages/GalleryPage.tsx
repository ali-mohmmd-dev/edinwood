import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import PageHero from "@/components/site/PageHero";

const GalleryPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero title="GalleryPage" />
      <div className="container-x py-16 md:py-28">
        <h2 className="font-display text-3xl text-burgundy">GalleryPage Page Content</h2>
        <p className="text-muted-foreground mt-4">This is a dummy page for GalleryPage. It will be built in the upcoming phases.</p>
      </div>
      <Footer />
    </main>
  );
};

export default GalleryPage;
