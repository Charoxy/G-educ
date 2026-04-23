import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Blob from "@/components/Blob";

type Tone = "sand" | "plum" | "sage";

type Presta = {
  icon: string;
  tone: Tone;
  price: string;
  oldPrice?: string;
  duration: string;
  title: string;
  subtitle: string;
  desc: string;
  includes: string[];
  featured?: boolean;
};

const PRESTA: Presta[] = [
  {
    icon: "🤝",
    tone: "sand",
    price: "15",
    duration: "≈ 45 min",
    title: "Bilan comportemental",
    subtitle: "La première étape, indispensable",
    desc: "Notre première rencontre. Je viens chez vous, j'observe votre chien dans son environnement, j'écoute votre histoire, vos difficultés, vos objectifs. Je repars avec une vision claire de la situation — vous, avec un plan d'action concret et des premiers conseils applicables immédiatement.",
    includes: [
      "Visite à domicile (30 km autour de Cambrai)",
      "Observation comportementale complète",
      "Écoute de votre parcours et de vos attentes",
      "Compte-rendu écrit avec recommandations",
      "Premiers exercices à appliquer dès le soir même",
    ],
  },
  {
    icon: "🐕",
    tone: "plum",
    price: "45",
    duration: "1 heure",
    featured: true,
    title: "Séance à l'heure",
    subtitle: "Une séance ciblée sur un besoin précis",
    desc: "Un problème ciblé ? Un point à travailler en particulier ? Cette séance est faite pour vous. On se concentre sur un objectif clair — marche en laisse, rappel, propreté, socialisation, gestion des peurs — et on avance ensemble, pas à pas.",
    includes: [
      "Déplacement à domicile ou en extérieur inclus",
      "Objectif défini ensemble au début",
      "Exercices pratiques et démonstrations",
      "Support écrit à la fin de la séance",
      "Suivi par message entre deux rendez-vous",
    ],
  },
  {
    icon: "🌿",
    tone: "sage",
    price: "220",
    oldPrice: "270",
    duration: "6 × 1h",
    title: "Pack 6 heures",
    subtitle: "Le programme complet, le plus efficace",
    desc: "Un vrai parcours pour installer des bases solides et durables. En 6 séances réparties sur quelques semaines, on construit ensemble un chien équilibré, une relation apaisée, et des habitudes qui tiennent dans le temps. C'est la formule que je recommande pour les chiots et les chiens avec des difficultés marquées.",
    includes: [
      "6 séances d'une heure (à planifier sur 2-3 mois)",
      "Programme sur-mesure adapté à votre duo",
      "Ajustements possibles entre les séances",
      "Économie de 50€ par rapport à 6 séances individuelles",
      "Support continu par message, SMS, Instagram",
    ],
  },
];

const TONE_BORDER: Record<Tone, string> = {
  sand: "#d4c2dc",
  plum: "#6b4a7a",
  sage: "#c2cfb5",
};

const TONE_PRICE: Record<Tone, string> = {
  sand: "#b86e52",
  plum: "#fbf6ec",
  sage: "#7a8f6c",
};

export default function PrestationsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden">
          <Blob
            size={300}
            color="#c2cfb5"
            variant={0}
            className="absolute opacity-50 pointer-events-none"
            style={{ top: -60, right: -60 }}
          />
          <Blob
            size={240}
            color="#d4c2dc"
            variant={1}
            className="absolute opacity-60 pointer-events-none"
            style={{ bottom: -40, left: -60 }}
          />
          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 pt-10 sm:pt-14 pb-10 sm:pb-12 text-center">
            <div className="text-[12px] text-plum tracking-[0.18em] uppercase font-bold mb-3.5">
              Prestations &amp; tarifs
            </div>
            <h1 className="text-[28px] sm:text-[40px] lg:text-[56px] leading-[1.1] m-0 font-extrabold text-ink tracking-[-0.02em] max-w-[800px] mx-auto">
              Trois formules, <span className="text-plum">un seul objectif :</span>
              <br className="hidden sm:block" />
              <span className="sm:inline"> votre tranquillité, celle de votre chien.</span>
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-[1.65] text-ink/70 max-w-[600px] mx-auto mt-4 sm:mt-5">
              Tarifs transparents, devis clair avant chaque prestation, déplacements
              inclus dans un rayon de 30 km autour de Cambrai.
            </p>
          </div>
        </section>

        <section className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 pb-16 sm:pb-20">
          <div className="flex flex-col gap-7">
            {PRESTA.map((p, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 sm:gap-8 lg:gap-12 relative p-6 sm:p-8 lg:p-10"
                style={{
                  background: p.featured ? "#6b4a7a" : "#fbf6ec",
                  color: p.featured ? "#fbf6ec" : "#2a2438",
                  borderRadius: 28,
                  border: p.featured
                    ? "none"
                    : `1.5px solid ${TONE_BORDER[p.tone]}`,
                  boxShadow: p.featured
                    ? "0 24px 50px -20px rgba(107,74,122,0.35)"
                    : "none",
                }}
              >
                {p.featured && (
                  <div
                    className="absolute bg-peach text-ink uppercase font-extrabold left-4 sm:left-7 lg:left-10"
                    style={{
                      top: -12,
                      fontSize: 11,
                      letterSpacing: "0.12em",
                      padding: "6px 14px",
                      borderRadius: 999,
                    }}
                  >
                    ★ Le plus choisi
                  </div>
                )}
                <div>
                  <div className="flex items-start sm:items-center gap-3 sm:gap-3.5 mb-3.5">
                    <span className="text-[28px] sm:text-[32px] shrink-0">{p.icon}</span>
                    <div className="min-w-0">
                      <h2 className="text-[20px] sm:text-[26px] lg:text-[30px] font-extrabold m-0 leading-tight">
                        {p.title}
                      </h2>
                      <div className="text-[12.5px] sm:text-[13px] opacity-70 mt-0.5">
                        {p.subtitle}
                      </div>
                    </div>
                  </div>
                  <p className="text-[14.5px] leading-[1.65] opacity-80 mt-4">
                    {p.desc}
                  </p>
                  <div className="mt-5">
                    <div className="text-[11px] tracking-[0.15em] uppercase font-bold opacity-70 mb-3">
                      Ce qui est inclus
                    </div>
                    <div className="flex flex-col gap-2.5">
                      {p.includes.map((it) => (
                        <div
                          key={it}
                          className="flex gap-3 text-[13.5px] leading-[1.45]"
                        >
                          <span
                            className="font-extrabold"
                            style={{
                              color: p.featured ? "#e8b89a" : "#7a8f6c",
                            }}
                          >
                            ✓
                          </span>
                          <span>{it}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className="text-center self-start p-6 sm:p-7"
                  style={{
                    background: p.featured
                      ? "rgba(251,246,236,0.1)"
                      : "#f5ede0",
                    borderRadius: 20,
                  }}
                >
                  <div className="text-[12px] tracking-[0.15em] uppercase font-bold opacity-70 mb-2.5">
                    Tarif
                  </div>
                  <div className="flex items-baseline gap-2 justify-center">
                    <span
                      className="text-[52px] sm:text-[64px] font-extrabold leading-none"
                      style={{ color: TONE_PRICE[p.tone] }}
                    >
                      {p.price}
                    </span>
                    <span
                      className="text-[22px] sm:text-[24px] font-extrabold"
                      style={{ color: TONE_PRICE[p.tone] }}
                    >
                      €
                    </span>
                  </div>
                  {p.oldPrice && (
                    <div className="text-[13px] opacity-50 line-through mt-0.5">
                      au lieu de {p.oldPrice}€
                    </div>
                  )}
                  <div className="text-[12px] opacity-65 mt-2 italic">
                    {p.duration}
                  </div>
                  <button
                    className="mt-5 w-full font-bold cursor-pointer border-0"
                    style={{
                      background: p.featured ? "#fbf6ec" : "#6b4a7a",
                      color: p.featured ? "#6b4a7a" : "#fbf6ec",
                      padding: "12px 24px",
                      borderRadius: 999,
                      fontSize: 13,
                      fontFamily: "inherit",
                    }}
                  >
                    Réserver →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div
              className="bg-sand-light flex gap-4 items-center"
              style={{ borderRadius: 20, padding: "24px 28px" }}
            >
              <div className="text-[32px]">🏡</div>
              <div>
                <div className="text-[15px] font-extrabold text-ink mb-0.5">
                  Adoptants de refuge
                </div>
                <div className="text-[13px] text-ink/70 leading-[1.5]">
                  Bilan comportemental{" "}
                  <strong className="text-plum">entièrement offert</strong> sur
                  présentation du certificat d&rsquo;adoption.
                </div>
              </div>
            </div>
            <div
              className="bg-lavender flex gap-4 items-center"
              style={{ borderRadius: 20, padding: "24px 28px" }}
            >
              <div className="text-[32px]">💜</div>
              <div>
                <div className="text-[15px] font-extrabold text-plum mb-0.5">
                  Programme ambassadeur
                </div>
                <div className="text-[13px] text-ink/80 leading-[1.5]">
                  Vous parrainez un ami ? Vous gagnez des avantages.{" "}
                  <strong className="text-plum">
                    Jusqu&rsquo;à une séance offerte.
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
