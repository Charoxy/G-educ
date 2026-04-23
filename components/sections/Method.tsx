import Reveal from "../motion/Reveal";
import { StaggerGroup, StaggerItem } from "../motion/Stagger";

type Step = {
  n: string;
  title: string;
  desc: string;
  bg: string;
  accent: string;
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "On se rencontre",
    desc: "Bilan comportemental à domicile. J'observe votre chien, on parle de vous, de votre quotidien, et on fixe ensemble des objectifs réalistes.",
    bg: "#d4c2dc",
    accent: "#6b4a7a",
  },
  {
    n: "02",
    title: "On construit un plan",
    desc: "Un programme sur-mesure, adapté au caractère de votre chien et à votre rythme de vie. Pas de recette toute faite.",
    bg: "#c2cfb5",
    accent: "#7a8f6c",
  },
  {
    n: "03",
    title: "On avance ensemble",
    desc: "Séances pratiques, conseils entre deux rendez-vous, ajustements. Vous apprenez à lire votre chien, jour après jour.",
    bg: "#e8dcc8",
    accent: "#b86e52",
  },
];

export default function Method() {
  return (
    <section className="bg-sand-light relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-24">
        <Reveal className="text-center mb-12 lg:mb-16 max-w-[640px] mx-auto">
          <div className="text-[12px] text-plum tracking-[0.18em] uppercase font-bold mb-3.5">
            Comment ça se passe
          </div>
          <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] leading-[1.1] m-0 font-extrabold text-ink tracking-[-0.02em]">
            Une méthode simple, en{" "}
            <span className="text-plum">3 étapes.</span>
          </h2>
          <p className="text-[15px] leading-[1.6] text-ink/70 mt-4">
            Pas de magie, pas de promesses en l&rsquo;air. Juste du travail de
            qualité, adapté à chaque duo.
          </p>
        </Reveal>

        <StaggerGroup
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          staggerChildren={0.12}
        >
          {STEPS.map((s) => (
            <StaggerItem key={s.n}>
              <div
                className="bg-bone border border-lavender relative overflow-hidden h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(107,74,122,0.25)]"
                style={{ borderRadius: 28, padding: "32px 28px" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-[20px] font-extrabold mb-[18px]"
                  style={{ background: s.bg, color: s.accent }}
                >
                  {s.n}
                </div>
                <h3 className="text-[22px] m-0 font-extrabold text-ink">
                  {s.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-ink/70 mt-2.5">
                  {s.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
