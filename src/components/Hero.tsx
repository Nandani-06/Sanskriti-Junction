import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Mandala from "@/components/Mandala";
import { programs } from "@/data/programs";
import logo from "../assets/logof.png";

const REGISTER_URL = "https://form.jotform.com/260269177685470";

const scrollToSection = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

/** A single program circle: photo, icon badge, title + tagline. */
const ProgramCircle = ({
  program,
  index,
}: {
  program: (typeof programs)[number];
  index: number;
}) => {
  const Icon = program.icon;
  return (
    <button
      type="button"
      onClick={() => scrollToSection(program.target)}
      aria-label={`${program.title} — ${program.tagline}. Go to section.`}
      className="program-circle group flex w-full flex-col items-center text-center focus-visible:outline-none"
      style={{ animationDelay: `${300 + index * 70}ms` }}
    >
      {/* Photo disc */}
      <span className="relative block">
        <span
          className="absolute -inset-1 rounded-full opacity-60 blur-md transition-opacity duration-300 group-hover:opacity-90"
          style={{ background: `hsl(${program.badge})` }}
        />
        <span
          className="relative block aspect-square w-[clamp(5.5rem,13vw,8.5rem)] overflow-hidden rounded-full border-[5px] shadow-soft transition-transform duration-300 group-hover:scale-105"
          style={{
            borderColor: `hsl(${program.badge})`,
            backgroundColor: `hsl(${program.badge})`,
          }}
        >
          <img
            src={program.image}
            alt={program.title}
            loading="lazy"
            onError={(e) => {
              // If a photo is missing, hide the broken <img> so the badge-coloured
              // disc shows through instead of a blank/broken-image box.
              e.currentTarget.style.display = "none";
              if (import.meta.env.DEV) {
                console.warn(
                  `[Hero] Image failed to load for "${program.title}". ` +
                    `Check that the file exists in src/assets/ and the import path in src/data/programs.ts is correct.`,
                );
              }
            }}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </span>
        {/* Icon badge */}
        <span
          className="absolute -bottom-1 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full text-white shadow-md ring-2 ring-white/80"
          style={{ background: `hsl(${program.badge})` }}
        >
          <Icon className="h-3.5 w-3.5" />
        </span>
      </span>

      {/* Label */}
      <span className="mt-3 block text-[0.72rem] font-bold uppercase leading-tight tracking-wide text-white sm:text-xs">
        {program.title}
      </span>
      <span className="mt-0.5 block text-[0.6rem] text-white/65 sm:text-[0.65rem]">
        {program.tagline}
      </span>
    </button>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      aria-label="Junction programs"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-hero px-4 pb-16 pt-28"
    >
      {/* Ambient mandala glow behind everything */}
      <Mandala
        className="pointer-events-none absolute left-1/2 top-1/2 h-[220vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 animate-glow-pulse"
        spin="slow"
        color="hsl(var(--lavender))"
        opacity={0.1}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(271_62%_15%/0.6)_100%)]" />

      {/* Eyebrow + heading */}
      <div className="relative z-10 mb-6 max-w-3xl text-center md:mb-8">
        <p className="mb-4 opacity-0 animate-fade-up [animation-delay:100ms]">
          <span className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-brand-gold-soft backdrop-blur-sm">
            All Ages · All Cultures · One Community
          </span>
        </p>
        <h1 className="font-playfair text-3xl font-bold leading-tight text-white opacity-0 animate-fade-up [animation-delay:200ms] sm:text-4xl md:text-5xl">
          Where <span className="text-gradient-gold">Culture</span>, Wellness &amp;
          Community Thrive
        </h1>
      </div>

      {/* ============ DESKTOP / TABLET: ORBITAL WHEEL ============ */}
      <div className="relative z-10 mt-4 hidden md:block">
        <div className="relative mx-auto aspect-square w-[min(72vh,44rem)]">
          {/* Dotted orbit guide */}
          <div className="absolute inset-[18%] rounded-full border border-dashed border-white/15" />

          {/* Center: mandala + logo */}
          <div className="absolute left-1/2 top-1/2 flex aspect-square w-[70%] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <Mandala
              className="absolute inset-0 h-full w-full"
              spin="reverse"
              color="hsl(var(--lavender))"
              opacity={0.55}
            />
            <div className="relative flex aspect-square w-[80%] items-center justify-center rounded-full bg-white shadow-hover">
              <img
                src={logo}
                alt="Sanskriti Junction logo"
                className="w-[80%] object-contain"
              />
            </div>
          </div>

          {/* Orbiting program circles */}
          {programs.map((program, i) => {
            const angle = (i / programs.length) * 2 * Math.PI - Math.PI / 2;
            const radius = 50; // % from centre — inset so circles never clip the edge
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);
            return (
              <div
                key={program.key}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <ProgramCircle program={program} index={i} />
              </div>
            );
          })}
        </div>
      </div>

      {/* ============ MOBILE: LOGO + 2-COLUMN GRID ============ */}
      <div className="relative z-10 w-full max-w-md md:hidden">
        <div className="mb-8 flex justify-center opacity-0 animate-fade-in-soft [animation-delay:150ms]">
          <div className="relative flex aspect-square w-70 items-center justify-center">
            <Mandala
              className="absolute inset-0 h-full w-full"
              spin="reverse"
              color="hsl(var(--lavender))"
              opacity={0.5}
            />
            <div className="relative flex aspect-square w-[80%] items-center justify-center rounded-full bg-white shadow-hover">
              <img src={logo} alt="Sanskriti Junction logo" className="w-[80%]" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
          {programs.map((program, i) => (
            <ProgramCircle key={program.key} program={program} index={i} />
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div className="relative z-10 mt-10 flex flex-col items-center gap-4 opacity-0 animate-fade-up [animation-delay:1100ms] sm:flex-row">
        <Button
          size="lg"
          onClick={() => scrollToSection("programs")}
          className="group bg-gradient-gold px-8 py-6 text-base font-semibold text-brand-purple-deep shadow-gold transition-all duration-300 hover:brightness-105"
        >
          Explore Programs
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button
          size="lg"
          onClick={() => window.open(REGISTER_URL, "_blank", "noopener")}
          className="border border-white/30 bg-white/10 px-8 py-6 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-brand-purple-deep"
        >
          Register Now
        </Button>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => scrollToSection("about")}
        aria-label="Scroll down"
        className="relative z-10 mt-10 opacity-0 animate-fade-in-soft [animation-delay:1300ms]"
      >
        <span className="flex flex-col items-center gap-1.5 text-white/60 transition-colors hover:text-white">
          <span className="text-[0.6rem] uppercase tracking-[0.3em]">Discover</span>
          <ChevronDown className="h-5 w-5 animate-scroll-bob" />
        </span>
      </button>
    </section>
  );
};

export default Hero;
