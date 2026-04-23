import { ArrowRight, Calendar } from "lucide-react";
import n1 from "@/assets/gallery-2.jpg";
import n2 from "@/assets/gallery-3.jpg";
import n3 from "@/assets/gallery-1.jpg";

const newsItems = [
  {
    id: 1,
    img: n1,
    category: "Academics",
    date: "October 15, 2026",
    title: "Edinwood Students Win National Science Fair",
    excerpt: "Our senior science team took first place at the annual National Innovation Symposium with their project on renewable energy.",
  },
  {
    id: 2,
    img: n2,
    category: "Campus Life",
    date: "October 10, 2026",
    title: "Annual Fall Festival Brings Community Together",
    excerpt: "Students, parents, and alumni gathered this weekend for our traditional Fall Festival, featuring student performances and local food.",
  },
  {
    id: 3,
    img: n3,
    category: "Arts",
    date: "October 5, 2026",
    title: "Winter Theater Production Announced",
    excerpt: "The Drama department has announced this year's winter production will be a modern adaptation of Shakespeare's A Midsummer Night's Dream.",
  },
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

        <div className="grid md:grid-cols-3 gap-[30px] md:gap-[40px]">
          {newsItems.map((item) => (
            <article key={item.id} className="group cursor-pointer flex flex-col">
              <div className="relative aspect-[4/3] rounded-[1.75rem] overflow-hidden mb-6">
                <img 
                  src={item.img} 
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
