import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Blob from "@/components/Blob";
import PlaceholderImg from "@/components/PlaceholderImg";

const TIMELINE: Array<[string, string, string]> = [
  [
    "Toujours",
    "Une enfance entourée d'animaux",
    "Chiens, chats, chevaux... Les animaux ont toujours été ma famille, mon refuge, ma passion. Je crois qu'on naît avec cette sensibilité — ou pas.",
  ],
  [
    "2020-2023",
    "Bac pro CGEH",
    "Conduite et Gestion de l'Entreprise Hippique. Un cursus exigeant, au plus près des animaux, qui m'a appris le respect, la patience, l'observation fine.",
  ],
  [
    "2024",
    "Formation Esprit Dog",
    "La formation d'éducateur canin qui change tout. Des méthodes modernes, bienveillantes, basées sur les sciences du comportement. Exactement ce que je voulais transmettre.",
  ],
  [
    "2024",
    "Certification ACACED",
    "L'Attestation de Connaissances pour les Animaux de Compagnie d'Espèces Domestiques. Une reconnaissance officielle qui atteste de mes compétences en bien-être animal.",
  ],
  [
    "2025",
    "Lancement de G'educ",
    "Cambrai, 30 km autour. Le début d'une aventure qui me ressemble. Une éducatrice humble, qui apprend chaque jour, auprès de chaque chien.",
  ],
];

const VALEURS: Array<[string, string, string]> = [
  [
    "🌱",
    "Bienveillance",
    "Aucune méthode aversive, aucune domination, aucun outil de contrainte. Ton chien apprend par la confiance — jamais par la peur ou la douleur. C'est une ligne rouge absolue.",
  ],
  [
    "👂",
    "Écoute",
    "Chaque chien est unique. Chaque famille aussi. Je ne vends pas de recette. J'écoute, j'observe, je m'adapte. Ma méthode, c'est d'abord la tienne.",
  ],
  [
    "💜",
    "Honnêteté",
    "Si je ne peux pas t'aider, je te le dirai. Si un confrère est plus adapté, je t'orienterai. Ton bien-être et celui de ton chien passent avant mon agenda.",
  ],
];

export default function AProposPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden">
          <Blob
            size={340}
            color="#c2cfb5"
            variant={1}
            className="absolute opacity-50 pointer-events-none"
            style={{ top: -80, right: -80 }}
          />
          <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pt-14 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <div className="text-[12px] text-plum tracking-[0.18em] uppercase font-bold mb-3.5">
                  À propos de moi
                </div>
                <h1 className="text-[40px] sm:text-[50px] lg:text-[60px] leading-[1.05] m-0 font-extrabold text-ink tracking-[-0.02em]">
                  Moi, c&rsquo;est{" "}
                  <span className="highlight-lavender">Gaëlle.</span>
                  <br />
                  21 ans, et une vie{" "}
                  <em className="text-plum not-italic font-extrabold italic">
                    dédiée
                  </em>
                  <br />
                  aux animaux.
                </h1>
                <p className="text-[16px] sm:text-[17px] leading-[1.7] text-ink/80 mt-6 max-w-[460px]">
                  Ce site, c&rsquo;est bien plus qu&rsquo;une vitrine. C&rsquo;est
                  l&rsquo;aboutissement d&rsquo;années d&rsquo;apprentissage,
                  de formations, de rencontres. C&rsquo;est un engagement :
                  celui de t&rsquo;accompagner avec honnêteté, bienveillance,
                  et toute la passion qui m&rsquo;habite depuis toujours.
                </p>
              </div>
              <div className="relative max-w-[460px] mx-auto lg:mx-0">
                <PlaceholderImg
                  label="Gaëlle Genly"
                  tone="plum"
                  radius={32}
                  width="100%"
                  height={540}
                />
                <div
                  className="absolute bg-peach text-ink max-w-[220px]"
                  style={{
                    bottom: -24,
                    left: -24,
                    padding: "18px 24px",
                    borderRadius: 20,
                    boxShadow: "0 12px 30px -10px rgba(184,110,82,0.4)",
                  }}
                >
                  <div className="text-[11px] uppercase font-extrabold tracking-[0.15em] mb-1">
                    Ma promesse
                  </div>
                  <div className="text-[14px] font-bold leading-[1.4]">
                    Jamais de violence. Jamais de coercition. Jamais de
                    compromis.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-sand-light">
          <div className="max-w-[820px] mx-auto px-5 sm:px-8 lg:px-12 py-20">
            <div className="text-[12px] text-plum tracking-[0.18em] uppercase font-bold mb-3.5 text-center">
              Mon histoire
            </div>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] m-0 font-extrabold text-ink text-center tracking-[-0.02em] mb-10">
              Comment je suis arrivée ici.
            </h2>
            <div className="text-[16px] sm:text-[17px] leading-[1.8] text-ink/85 space-y-5">
              <p>
                Je ne me souviens pas d&rsquo;un moment de ma vie sans animaux.
                Enfant, j&rsquo;étais toujours dehors, les mains dans la boue, à
                courir derrière un chien, à m&rsquo;occuper d&rsquo;un poney, à
                apprivoiser le chat du voisin. Mes parents racontent que je
                préférais le panier du chien à mon berceau. Ça en dit long.
              </p>
              <p>
                Cette passion n&rsquo;a jamais faibli. Quand est venu le moment
                de choisir une orientation, le choix était évident : les
                animaux. J&rsquo;ai fait un{" "}
                <strong className="text-plum">Bac pro CGEH</strong> (Conduite et
                Gestion de l&rsquo;Entreprise Hippique), un cursus exigeant, qui
                m&rsquo;a appris bien plus que la seule technique. La patience.
                L&rsquo;observation. Le respect de l&rsquo;animal comme
                individu, pas comme objet.
              </p>
              <p>
                Mais je voulais aller plus loin dans un domaine précis :
                l&rsquo;éducation canine. Pas n&rsquo;importe laquelle &mdash;
                une éducation moderne, fondée sur les sciences du comportement,
                qui ne repose jamais sur la peur ou la douleur. J&rsquo;ai
                découvert <strong className="text-plum">Esprit Dog</strong>, et
                ce fut une révélation. J&rsquo;ai suivi leur formation
                complète, avec une rigueur totale.
              </p>
              <p>
                Puis j&rsquo;ai passé l&rsquo;
                <strong className="text-plum">ACACED</strong>, la certification
                officielle française qui atteste de mes connaissances en
                bien-être animal. Parce qu&rsquo;il me semblait indispensable
                d&rsquo;aller chercher cette reconnaissance légale, pour toi
                comme pour moi.
              </p>
              <p>
                Aujourd&rsquo;hui, à 21 ans, je lance G&rsquo;educ. Je
                n&rsquo;ai pas 20 ans d&rsquo;expérience &mdash; mais
                j&rsquo;ai 20 ans de passion, des formations solides, une
                méthode que je crois juste, et une volonté farouche de bien
                faire. Ton chien, c&rsquo;est ma responsabilité. Je la prends
                au sérieux.{" "}
                <strong className="text-plum">Chaque jour.</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="bg-bone">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-20">
            <div className="text-center mb-14">
              <div className="text-[12px] text-plum tracking-[0.18em] uppercase font-bold mb-3.5">
                Mon parcours
              </div>
              <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] m-0 font-extrabold text-ink tracking-[-0.02em]">
                Des étapes pensées,{" "}
                <span className="text-plum">pas improvisées.</span>
              </h2>
            </div>

            <div className="max-w-[820px] mx-auto relative">
              <div
                className="absolute pointer-events-none hidden sm:block"
                style={{
                  left: 120,
                  top: 12,
                  bottom: 12,
                  width: 2,
                  background: "#d4c2dc",
                }}
              />
              {TIMELINE.map(([year, title, desc], i) => (
                <div
                  key={i}
                  className="grid sm:grid-cols-[120px_1fr] gap-5 sm:gap-10 mb-9 items-start relative"
                >
                  <div className="text-[13px] font-extrabold text-plum sm:pt-1">
                    {year}
                  </div>
                  <div className="relative">
                    <div
                      className="absolute hidden sm:block"
                      style={{
                        left: -46,
                        top: 6,
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        background: "#6b4a7a",
                        border: "3px solid #fbf6ec",
                        boxShadow: "0 0 0 2px #6b4a7a",
                      }}
                    />
                    <div
                      style={{
                        background: i % 2 === 0 ? "#f5ede0" : "#d4c2dc",
                        borderRadius: 20,
                        padding: "20px 24px",
                      }}
                    >
                      <h3 className="text-[18px] m-0 font-extrabold text-ink">
                        {title}
                      </h3>
                      <p className="text-[14px] leading-[1.6] text-ink/80 m-0 mt-2">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-plum text-bone relative overflow-hidden">
          <Blob
            size={400}
            color="rgba(212,194,220,0.12)"
            variant={0}
            className="absolute pointer-events-none"
            style={{ top: -100, right: -100 }}
          />
          <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-20">
            <div className="text-center mb-12">
              <div className="text-[12px] text-peach tracking-[0.18em] uppercase font-bold mb-3.5">
                Mes valeurs
              </div>
              <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] m-0 font-extrabold tracking-[-0.02em]">
                Trois engagements,{" "}
                <span className="text-peach">non négociables.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {VALEURS.map(([e, t, d]) => (
                <div
                  key={t}
                  style={{
                    background: "rgba(251,246,236,0.08)",
                    borderRadius: 24,
                    padding: "32px 28px",
                    backdropFilter: "blur(4px)",
                    border: "1px solid rgba(251,246,236,0.15)",
                  }}
                >
                  <div className="text-[40px] mb-4">{e}</div>
                  <h3 className="text-[22px] m-0 font-extrabold">{t}</h3>
                  <p className="text-[14px] leading-[1.65] opacity-85 mt-2.5">
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
