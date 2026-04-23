import Blob from "../Blob";
import PlaceholderImg from "../PlaceholderImg";
import Reveal from "../motion/Reveal";
import { StaggerGroup, StaggerItem } from "../motion/Stagger";

const CREDS: Array<[string, string]> = [
  ["ACACED", "Certification officielle bien-être animal"],
  ["Esprit Dog", "Formation éducateur canin complète"],
  ["Bac pro CGEH", "Cursus animalier approfondi"],
  ["Assurance pro", "Responsabilité civile couverte"],
];

export default function About() {
  return (
    <section className="bg-bone relative overflow-hidden">
      <Blob
        size={320}
        color="#c2cfb5"
        variant={1}
        className="absolute opacity-50 pointer-events-none"
        style={{ top: 100, left: -80 }}
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10 md:gap-10 lg:gap-14 items-center">
          <Reveal direction="right" className="relative w-full max-w-[420px] mx-auto md:mx-0">
            <PlaceholderImg
              label="Gaëlle Genly"
              tone="lavender"
              radius={32}
              width="100%"
              height={500}
            />
            <div
              className="absolute bg-sage text-bone max-w-[200px]"
              style={{
                bottom: -20,
                right: -20,
                padding: "16px 20px",
                borderRadius: 20,
                boxShadow: "0 12px 30px -10px rgba(122,143,108,0.5)",
              }}
            >
              <div className="text-[13px] font-bold leading-[1.35]">
                « Un chien compris est un chien équilibré. »
              </div>
              <div className="text-[11px] opacity-85 mt-1.5 italic">
                — Gaëlle
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.15}>
            <div className="text-[12px] text-plum tracking-[0.18em] uppercase font-bold mb-3.5">
              À propos de moi
            </div>
            <h2 className="text-[28px] sm:text-[36px] md:text-[34px] lg:text-[48px] leading-[1.05] m-0 font-extrabold text-ink tracking-[-0.02em]">
              Gaëlle, 21 ans,
              <br />
              <span className="highlight-lavender">amoureuse des animaux</span>{" "}
              depuis toujours.
            </h2>
            <p className="text-[16px] leading-[1.7] text-ink/75 mt-6">
              Les animaux ont toujours fait partie de ma vie. Cette passion,
              j&rsquo;ai voulu en faire un métier sérieux, avec une formation
              solide. Bac pro CGEH (Conduite et Gestion de l&rsquo;Entreprise
              Hippique), formation Esprit Dog complète, certification ACACED
              officielle.
            </p>
            <p className="text-[16px] leading-[1.7] text-ink/75 mt-3.5">
              G&rsquo;educ, c&rsquo;est plus qu&rsquo;un projet : c&rsquo;est
              une vocation. Me confier votre chien, c&rsquo;est me confier un
              peu de votre famille &mdash; je le prends très au sérieux.
            </p>

            <StaggerGroup
              className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-3.5"
              staggerChildren={0.08}
            >
              {CREDS.map(([t, s]) => (
                <StaggerItem key={t}>
                <div
                  className="bg-sand-light flex gap-3 items-start h-full"
                  style={{ padding: "16px 18px", borderRadius: 16 }}
                >
                  <div className="w-6 h-6 rounded-full bg-sage text-bone flex items-center justify-center text-[12px] font-extrabold shrink-0">
                    ✓
                  </div>
                  <div>
                    <div className="text-[14px] font-extrabold text-ink">
                      {t}
                    </div>
                    <div className="text-[11.5px] text-ink/65 mt-0.5 leading-[1.4]">
                      {s}
                    </div>
                  </div>
                </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
