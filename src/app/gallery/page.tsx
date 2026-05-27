"use client";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import PageHero from "@/components/site/PageHero";
import GalleryComponent from "@/components/site/Gallery";
import { useState } from "react";

// Using the images we have available as a massive masonry grid
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import gK from "@/assets/kindergarten.jpg";
import gP from "@/assets/primary.png";
import gM from "@/assets/middle.png";
import gS from "@/assets/senior.png";

// Duplicate them to make the gallery look full
const photos = [
  { img: g1, category: "Campus" },
  { img: gK, category: "Academics" },
  { img: g2, category: "Campus" },
  { img: gS, category: "Events" },
  { img: g3, category: "Sports" },
  { img: gP, category: "Academics" },
  { img: gM, category: "Events" },
  { img: g1, category: "Sports" },
  { img: g3, category: "Campus" },
];

const categories = ["All", "Campus", "Academics", "Events", "Sports"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");

  const filteredPhotos = photos.filter(
    (photo) => filter === "All" || photo.category === filter
  );

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero 
        title="Photo Gallery" 
        subtitle="Moments caught in time from across the Edinwood campus." 
        image={g3.src}
      />

      {/* Featured Slider (Reusing the existing homepage component) */}
      <div className="pt-8">
         <GalleryComponent />
      </div>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-x">
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <h2 className="font-display text-3xl md:text-4xl text-burgundy">Full Archive</h2>
            
            {/* Filter Bar */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    filter === cat 
                    ? "bg-burgundy text-white shadow-md" 
                    : "bg-white text-ink/70 border border-border hover:bg-gold/10 hover:text-burgundy"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry-style Grid (using CSS columns for simplicity) */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredPhotos.map((photo, i) => (
              <div key={i} className="relative overflow-hidden group break-inside-avoid shadow-sm hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={photo.img.src} 
                  alt="Gallery Item" 
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-burgundy-deep/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <span className="text-white font-semibold tracking-wide uppercase text-sm border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
                      {photo.category}
                   </span>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPhotos.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No photos found in this category.
            </div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}
