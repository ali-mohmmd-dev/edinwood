import { Volleyball, Sprout, TrendingUp } from "lucide-react";

const items = [
  {
    icon: Volleyball,
    title: "Play",
    desc: "Because curiosity is the foundation of all learning. Sports, clubs, creativity, and exploration are not extras - they are the curriculum.",
  },
  {
    icon: Sprout,
    title: "Grow",
    desc: "Because children thrive when they are known, challenged, and supported. Small classes, real mentorship, and values woven into every lesson.",
  },
  {
    icon: TrendingUp,
    title: "Lead",
    desc: "Because the goal was never just good grades. It was confident, compassionate young people ready to make their mark.",
  },
];

const WhyUs = () => (
  <section id="why" className="py-16 md:py-28 bg-secondary">
    <div className="container-x">
      <div className=" mb-16 md:mb-[40px]">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">The Edinwood Difference</span>
        <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3 max-w-[150px] md:max-w-full">What sets us apart</h2>
        <p className="text-muted-foreground leading-[1.3] mt-4">Three commitments that shape every day at Edinwood Academy.</p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 md:gap-[10px]">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="border border-border bg-white p-6 md:p-8">
            <div className="grid place-items-center h-12 w-12 rounded-2xl bg-burgundy text-primary-foreground">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl text-burgundy mt-5">{title}</h3>
            <p className="text-muted-foreground mt-2 leading-[1.3]">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default WhyUs;
