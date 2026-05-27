import { StaticImageData } from "next/image";

export interface FacultyCardProps {
  name: string;
  role: string;
  dept?: string;
  img: string | StaticImageData;
  bio: string;
  delay?: number;
}

const FacultyCard = ({ name, role, dept, img, bio, delay = 0 }: FacultyCardProps) => {
  const imgSrc = typeof img === "string" ? img : img.src;
  
  return (
    <div 
      className="group flex flex-col bg-white border border-border/50 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-up text-left"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden mb-6 bg-secondary">
        <img 
          src={imgSrc} 
          alt={name} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {dept && (
          <div className="absolute top-4 left-4">
            <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold tracking-wide uppercase text-burgundy shadow-sm border border-white">
              {dept}
            </span>
          </div>
        )}
      </div>
      
      <h3 className="font-display text-2xl text-burgundy mb-1 group-hover:text-gold transition-colors">
        {name}
      </h3>
      <p className="text-sm font-bold tracking-wide uppercase text-ink/50 mb-4">
        {role}
      </p>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {bio}
      </p>
    </div>
  );
};

export default FacultyCard;
