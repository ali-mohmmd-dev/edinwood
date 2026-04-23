import { BookOpenCheck, Users2, Compass, Sparkles, HeartHandshake, Trophy } from "lucide-react";

const items = [
  { icon: BookOpenCheck, title: "Rigorous Academics", desc: "An inquiry-led curriculum that develops critical thinkers, not just test-takers." },
  { icon: Users2, title: "Small Class Sizes", desc: "A 9:1 student-teacher ratio means every student is known, mentored, and challenged." },
  { icon: Compass, title: "Character First", desc: "Integrity, empathy and resilience are taught with the same care as algebra and grammar." },
  { icon: Sparkles, title: "Creative Expression", desc: "Studios, stages and ateliers where every student finds their unique voice." },
  { icon: HeartHandshake, title: "True Community", desc: "Families, faculty and alumni woven into a network that lasts a lifetime." },
  { icon: Trophy, title: "Proven Outcomes", desc: "98% of graduates attend their first-choice university — and thrive once there." },
];

const WhyUs = () => (
  <section id="why" className="py-16 md:py-28 bg-secondary">
    <div className="container-x">
      <div className=" mb-16 md:mb-[60px]">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">The Edinwood Difference</span>
        <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3 max-w-[150px] md:max-w-full">What sets us apart</h2>
        <p className="text-muted-foreground leading-[1.3] mt-4">Six commitments that shape every day at Edinwood Academy.</p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-[40px] md:gap-[60px]">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="">
            <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-burgundy text-primary-foreground">
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
