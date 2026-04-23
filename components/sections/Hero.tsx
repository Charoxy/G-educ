import Btn from "../Btn";
import Blob from "../Blob";
import PlaceholderImg from "../PlaceholderImg";

const STATS: Array<[string, string, string]> = [
  ["🐾", "+40 duos", "accompagnés"],
  ["⭐", "4.9/5", "note moyenne"],
  ["📍", "30 km", "autour de Cambrai"],
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Blob
        size={340}
        color="#c2cfb5"
        variant={0}
        className="absolute opacity-60 pointer-events-none"
        style={{ top: -80, right: -60 }}
      />
      <Blob
        size={260}
        color="#d4c2dc"
        variant={1}
        className="absolute opacity-70 pointer-events-none"
        style={{ bottom: -40, left: -60 }}
      />

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pt-8 lg:pt-12 pb-16 lg:pb-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-sand-light px-4 py-2 rounded-full text-[12px] text-plum font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-sage" />
              Nouveaux créneaux disponibles · Rentrée 2025
            </div>
            <h1 className="text-[42px] sm:text-[52px] lg:text-[68px] leading-[1.05] m-0 font-extrabold text-ink tracking-[-0.025em]">
              Votre chien,
              <br />
              <span className="text-plum highlight-lavender">votre complice</span>{" "}
              de vie.
            </h1>
            <p className="text-[16px] lg:text-[17px] leading-[1.6] text-ink/70 max-w-[480px] mt-6 font-normal">
              Bonjour, moi c&rsquo;est Gaëlle 👋 &mdash; éducatrice canin à
              Cambrai. Ensemble, on va construire avec votre chien une relation
              fondée sur la compréhension, la confiance, et beaucoup de
              patience. Sans cri, sans stress, sans gadgets.
            </p>

            <div className="flex flex-wrap gap-3.5 mt-9 items-center">
              <Btn primary href="/prestations">Réserver mon bilan · 15€</Btn>
              <Btn href="/prestations">Voir les prestations →</Btn>
            </div>

            <div className="flex flex-wrap gap-6 sm:gap-8 mt-10 lg:mt-14">
              {STATS.map(([emoji, title, sub]) => (
                <div key={title}>
                  <div className="text-[22px]">{emoji}</div>
                  <div className="text-[16px] font-extrabold text-ink mt-1">
                    {title}
                  </div>
                  <div className="text-[11px] text-ink/60 mt-0.5">{sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[500px] lg:h-[560px]">
            <PlaceholderImg
              label="Gaëlle & un chien"
              tone="plum"
              radius={180}
              width={380}
              height={480}
              className="absolute"
              style={{ right: 20, top: 30 }}
            />
            <div
              className="absolute bg-sage text-bone max-w-[180px]"
              style={{
                left: 0,
                top: 60,
                padding: "14px 18px",
                borderRadius: 20,
                boxShadow: "0 10px 30px -10px rgba(122,143,108,0.5)",
              }}
            >
              <div className="text-[11px] opacity-85 mb-1 font-semibold">
                ✓ Méthode
              </div>
              <div className="text-[14px] font-bold leading-[1.3]">
                Renforcement positif uniquement
              </div>
            </div>
            <div
              className="absolute bg-bone border-[1.5px] border-lavender flex gap-3 items-center"
              style={{
                right: 0,
                bottom: 60,
                padding: "16px 20px",
                borderRadius: 20,
                boxShadow: "0 10px 30px -10px rgba(107,74,122,0.3)",
              }}
            >
              <div className="w-9 h-9 rounded-full bg-plum text-bone flex items-center justify-center font-extrabold text-[14px]">
                GG
              </div>
              <div className="leading-[1.2]">
                <div className="text-[13px] font-bold text-ink">
                  Gaëlle répond
                </div>
                <div className="text-[11px] text-sage font-semibold">
                  ● sous 24h
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
