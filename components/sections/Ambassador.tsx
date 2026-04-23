import Blob from "../Blob";

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
      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
          <div>
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
            <h2 className="text-[36px] sm:text-[42px] lg:text-[52px] leading-[1.05] m-0 font-extrabold tracking-[-0.02em]">
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
          </div>

          <div className="flex flex-col gap-3.5">
            {TIERS.map((t) => (
              <div
                key={t.tier}
                className="grid items-center"
                style={{
                  background: t.bg,
                  color: t.text,
                  borderRadius: 24,
                  padding: "20px 24px",
                  gridTemplateColumns: "auto 1fr auto",
                  gap: 20,
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-[24px]"
                  style={{ background: "rgba(255,255,255,0.5)" }}
                >
                  {t.icon}
                </div>
                <div>
                  <div
                    className="uppercase font-bold opacity-70"
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.15em",
                    }}
                  >
                    Palier {t.tier}
                  </div>
                  <div className="text-[16px] sm:text-[18px] font-extrabold mt-1">
                    {t.n} {t.filleuls} · {t.reward}
                  </div>
                </div>
                <div className="text-[28px] font-extrabold opacity-30">→</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
