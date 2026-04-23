import Reveal from "../motion/Reveal";
import { StaggerGroup, StaggerItem } from "../motion/Stagger";

type Quote = {
  t: string;
  name: string;
  dog: string;
  avatar: string;
  initial: string;
};

const QUOTES: Quote[] = [
  {
    t: "En 4 séances, mon chien ne tire plus en laisse ! Gaëlle est patiente, à l'écoute, et surtout elle nous a appris à comprendre Maya plutôt que la corriger. Les balades sont redevenues un plaisir.",
    name: "Élodie",
    dog: "Maya · Border collie, 2 ans",
    avatar: "#d4c2dc",
    initial: "É",
  },
  {
    t: "Adopté en refuge, Jet était très réactif aux autres chiens. Gaëlle a pris le temps de comprendre son passé, sans jamais forcer. 6 mois plus tard, il croise d'autres chiens sereinement.",
    name: "Thomas",
    dog: "Jet · Croisé berger, 4 ans",
    avatar: "#c2cfb5",
    initial: "T",
  },
  {
    t: "Premier chien, premier chiot, on était un peu perdus ! Le pack 6h a tout changé — propreté, rappel, socialisation. Un investissement qu'on ne regrette pas une seconde.",
    name: "Camille",
    dog: "Soba · Shiba inu, 6 mois",
    avatar: "#e8b89a",
    initial: "C",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-sand-light">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <Reveal className="text-center mb-10 sm:mb-12 lg:mb-14">
          <div className="text-[12px] text-plum tracking-[0.18em] uppercase font-bold mb-3.5">
            Ils m&rsquo;ont fait confiance
          </div>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[46px] leading-[1.1] m-0 font-extrabold text-ink tracking-[-0.02em]">
            De vraies histoires,{" "}
            <span className="text-plum">de vrais changements.</span>
          </h2>
        </Reveal>

        <StaggerGroup
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerChildren={0.12}
        >
          {QUOTES.map((q, i) => (
            <StaggerItem key={i}>
            <div
              className={`bg-bone border border-lavender flex flex-col h-full transition-shadow duration-300 hover:shadow-[0_24px_40px_-20px_rgba(107,74,122,0.25)] ${
                i === 1
                  ? "lg:-translate-y-3 lg:shadow-[0_24px_40px_-20px_rgba(107,74,122,0.25)]"
                  : ""
              }`}
              style={{
                borderRadius: 28,
                padding: "32px 28px",
              }}
            >
              <div className="text-[18px] text-peach mb-3">★★★★★</div>
              <p className="text-[15px] leading-[1.6] text-ink m-0 font-medium">
                « {q.t} »
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-[18px] font-extrabold text-plum"
                  style={{ background: q.avatar }}
                >
                  {q.initial}
                </div>
                <div>
                  <div className="text-[14px] font-extrabold text-ink">
                    {q.name}
                  </div>
                  <div className="text-[11px] text-ink/60 mt-0.5">{q.dog}</div>
                </div>
              </div>
            </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
