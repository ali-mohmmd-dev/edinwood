import type { LucideIcon } from "lucide-react";
import {
  HandHeart,
  Utensils,
  HeartPulse,
  GraduationCap,
  Users,
  Droplets,
  Sun,
  Briefcase,
  Lightbulb,
  Scale,
  Building2,
  Recycle,
  CloudSun,
  Waves,
  TreePine,
  Shield,
  Handshake,
} from "lucide-react";

const sdgGoals: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: HandHeart,
    title: "No Poverty",
    description:
      "Students develop empathy and social awareness through community engagement programmes that connect privilege with responsibility.",
  },
  {
    icon: Utensils,
    title: "Zero Hunger",
    description:
      "Our cafeteria sustainability practices and food awareness curriculum teach students the value of nourishment and responsible consumption.",
  },
  {
    icon: HeartPulse,
    title: "Good Health & Well-Being",
    description:
      "From our swimming pool and FIFA-affiliated ground to our Wellness Circle club and structured PE, physical and mental well-being is a daily priority.",
  },
  {
    icon: GraduationCap,
    title: "Quality Education",
    description:
      "Our CBSE curriculum, delivered through inquiry-based pedagogy, ensures every student receives equitable, high-quality education regardless of background.",
  },
  {
    icon: Users,
    title: "Gender Equality",
    description:
      "Equal participation across all sports, leadership roles, and academic programmes is non-negotiable at Edinwood.",
  },
  {
    icon: Droplets,
    title: "Clean Water & Sanitation",
    description:
      "Our rainwater harvesting systems and campus water management practices are introduced to students as living examples of responsible resource use.",
  },
  {
    icon: Sun,
    title: "Affordable & Clean Energy",
    description:
      "Our solar-powered campus is a daily, visible lesson in renewable energy — not just a talking point in a textbook.",
  },
  {
    icon: Briefcase,
    title: "Decent Work & Economic Growth",
    description:
      "Through career awareness programmes, entrepreneurship projects, and real-world skill building, students are prepared for productive futures.",
  },
  {
    icon: Lightbulb,
    title: "Industry, Innovation & Infrastructure",
    description:
      "Our Technology & Innovation Hub and STEM focus give students hands-on exposure to problem-solving, prototyping, and building resilient solutions.",
  },
  {
    icon: Scale,
    title: "Reduced Inequalities",
    description:
      "Our Universal and Islamic Value Education pathways sit side by side — a deliberate, structured commitment to inclusion and mutual respect.",
  },
  {
    icon: Building2,
    title: "Sustainable Cities & Communities",
    description:
      "Students engage with urban planning concepts and community design through interdisciplinary projects rooted in local context.",
  },
  {
    icon: Recycle,
    title: "Responsible Consumption & Production",
    description:
      "Our zero-plastic cafeteria policy and sustainability education embed conscious consumer habits from an early age.",
  },
  {
    icon: CloudSun,
    title: "Climate Action",
    description:
      "Climate change is not an elective topic at Edinwood. It is embedded across Sciences, Humanities, and our Global Goals Circle club.",
  },
  {
    icon: Waves,
    title: "Life Below Water",
    description:
      "Marine ecosystems, water conservation, and ocean health are explored through Science and our environmental awareness curriculum.",
  },
  {
    icon: TreePine,
    title: "Life on Land",
    description:
      "Our green campus, biodiversity awareness projects, and outdoor learning spaces reinforce a deep respect for the natural world.",
  },
  {
    icon: Shield,
    title: "Peace, Justice & Strong Institutions",
    description:
      "Value Education, restorative discipline, and student governance build a generation that understands fairness, accountability, and peaceful coexistence.",
  },
  {
    icon: Handshake,
    title: "Partnerships for the Goals",
    description:
      "Edinwood's collaboration with institutions like the Juventus Football Academy, UN SDG frameworks, and our parent community reflects our belief that no goal is achieved alone.",
  },
];

const SDGCards = () => (
  <section id="sdg-goals" className="bg-secondary pb-16 md:pb-28">
    <div className="container-x ">
      

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[10px]">
        {sdgGoals.map(({ icon: Icon, title, description }) => (
          <article
            key={title}
            className="bg-white p-8 shadow-sm border border-border/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center text-burgundy mb-6 border border-border">
              <Icon className="h-7 w-7" strokeWidth={1.75} />
            </div>
            <h3 className="font-display text-xl text-burgundy mb-3 leading-snug">{title}</h3>
            <p className="text-muted-foreground leading-[1.7] text-sm">{description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default SDGCards;
