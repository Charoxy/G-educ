import Blob from "../Blob";
import Reveal from "../motion/Reveal";
import { StaggerGroup, StaggerItem } from "../motion/Stagger";

const TIERS = [
  {
    tier: "Bronze",
    icon: "🥉",
    n: "1",
    filleuls: "filleul",
    reward: "-15% sur votre prochaine séance",
    bg: "#e8dcc8",
    text: "#2a2438",
  },
  {
    tier: "Argent",
    icon: "🥈",
    n: "3",
    filleuls: "filleuls",
    reward: "-30% + bilan comportemental offert",
    bg: "#d4c2dc",
    text: "#6b4a7a",
  },
  {
    tier: "Or",
    icon: "🥇",
    n: "5",
    filleuls: "filleuls",
    reward: "1 séance d'1 heure entièrement offerte 🎁",
    bg: "#e8b89a",
    text: "#2a2438",
  },
];

export default function Ambassador() {
  return (
    <section className="bg-plum text-bone relative overflow-hidden">
      <Blob
        size={400}
        color="rgba(212,194,220,0.15)"
        variant={0}
        className="absolute pointer-events-none"
        style={{ top: -100, right: -100 }}
      />
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
          <Reveal direction="right">
            <div
              className="inline-block bg-peach text-ink uppercase font-extrabold mb-5"
              style={{
                fontSize: 11,
                letterSpacing: "0.15em",
                padding: "6px 14px",
                borderRadius: 999,
              }}
            >
              💜 Programme ambassadeur
            </div>
            <h2 className="text-[30px] sm:text-[40px] lg:text-[52px] leading-[1.05] m-0 font-extrabold tracking-[-0.02em]">
              Vos amis vous font confiance ?<br />
              <span className="text-peach">Ça mérite une récompense.</span>
            </h2>
            <p className="text-[16px] leading-[1.6] opacity-85 mt-5 max-w-[440px]">
              Parrainez un ami, recevez des avantages. Plus vous parlez de
              G&rsquo;educ autour de vous, plus vous êtes récompensé&middot;e.
              Transparent, simple, sincère.
            </p>
            <button
              className="mt-7 bg-bone text-plum border-0 font-semibold cursor-pointer"
              style={{
                fontSize: 13,
                padding: "10px 22px",
                borderRadius: 999,
              }}
            >
              Comment ça marche ? →
            </button>
          </Reveal>

          <StaggerGroup className="flex flex-col gap-3.5" staggerChildren={0.1}>
            {TIERS.map((t) => (
              <StaggerItem key={t.tier}>
              <div
                className="flex items-center gap-4 sm:gap-5 transition-transform duration-300 hover:translate-x-1 px-4 py-4 sm:px-6 sm:py-5"
                style={{
                  background: t.bg,
                  color: t.text,
                  borderRadius: 24,
                }}
              >
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-[22px] sm:text-[24px] shrink-0"
                  style={{ background: "rgba(255,255,255,0.5)" }}
                >
                  {t.icon}
                </div>
                <div className="min-w-0">
                  <div
                    className="uppercase font-bold opacity-70"
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.15em",
                    }}
                  >
                    Palier {t.tier}
                  </div>
                  <div className="text-[14px] sm:text-[16px] lg:text-[18px] font-extrabold mt-1 leading-tight">
                    <span className="block sm:inline">{t.n} {t.filleuls}</span>
                    <span className="hidden sm:inline"> · </span>
                    <span className="block sm:inline opacity-90 font-bold sm:font-extrabold">
                      {t.reward}
                    </span>
                  </div>
                </div>
                <div className="text-[24px] sm:text-[28px] font-extrabold opacity-30 hidden sm:block">→</div>
              </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
