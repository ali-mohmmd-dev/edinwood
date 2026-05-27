import { ArrowRight, Calendar } from "lucide-react";
import n1 from "@/assets/gallery-2.jpg";
import n2 from "@/assets/gallery-3.jpg";
import n3 from "@/assets/gallery-1.jpg";

const newsItems = [
  {
    id: 1,
    img: n1,
    category: "Milestones",
    date: "October 10, 2025",
    title: "Edinwood Foundation",
    excerpt: "The first stone was laid. On October 10, 2025, Edinwood International School marked the beginning of something significant — a foundation ceremony that turned vision into ground reality.",
  },
  {
    id: 2,
    img: n2,
    category: "Community",
    date: "November 16, 2025",
    title: "Lunch with Edinwood",
    excerpt: "Families came, conversations flowed. Our community lunch brought together parents and well-wishers for an open, honest introduction to the Edinwood vision — what we believe, how we teach, and why it matters.",
  },
  {
    id: 3,
    img: n3,
    category: "Campus Life",
    date: "November 18, 2025",
    title: "Edinwood Colors",
    excerpt: "Little hands, big imaginations. Edinwood Colors brought children together for a vibrant coloring competition — a celebration of creativity, expression, and the joy of early learning.",
  },
  // {
  //   id: 4,
  //   img: n1,
  //   category: "Leadership",
  //   date: "November 25, 2025",
  //   title: "DIDAC Conference",
  //   excerpt: "Edinwood's leadership attended Asia's largest education exhibition — DIDAC India 2025 in New Delhi — where 22,000+ educators and 300+ edtech innovators converged to shape the future of learning. Insights from the conference continue to inform how we build Edinwood's curriculum and infrastructure.",
  // },
  // {
  //   id: 5,
  //   img: n2,
  //   category: "Infrastructure",
  //   date: "April 16, 2026",
  //   title: "Edinwood Signature Field Kick-Off",
  //   excerpt: "The whistle blew. Edinwood's Edinwood Signature Field FIFA-affiliated full-sized football ground officially opened — a professional-grade facility and home to the Juventus Football Academy Kerala training programme.",
  // },
  // {
  //   id: 6,
  //   img: n3,
  //   category: "Faculty",
  //   date: "May 10, 2026",
  //   title: "Edinwood Educators Meet",
  //   excerpt: "Before the first bell rings, our educators gathered. The Edinwood Educators Meet brought our teaching team together to align on pedagogy, values, and the shared vision that will shape every classroom from day one.",
  // },
];

const News = () => {
  return (
    <section id="news" className="py-16 md:py-28">
      <div className="container-x">
        <div className="mb-16 md:mb-[60px] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Latest Updates</span>
            <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3">Edinwood News</h2>
          </div>
          <button className="flex items-center gap-2 text-burgundy font-medium hover:text-gold transition-colors group">
            View All News <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-5 md:gap-y-20">
          {newsItems.map((item) => (
            <article key={item.id} className="group cursor-pointer flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <img 
                  src={item.img.src} 
                  alt={item.title} 
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold text-burgundy">
                  {item.category}
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Calendar className="h-4 w-4" />
                <span>{item.date}</span>
              </div>
              <h3 className="font-display text-xl text-burgundy mb-3 group-hover:text-gold transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-[1.6] mb-4 flex-grow">
                {item.excerpt}
              </p>
              <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-burgundy group-hover:text-gold transition-colors">
                Read Article <ArrowRight className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
