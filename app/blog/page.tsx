import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Btn from "@/components/Btn";
import Blob from "@/components/Blob";
import PlaceholderImg from "@/components/PlaceholderImg";
import NewsletterForm from "@/components/NewsletterForm";

type Tone = "lavender" | "sage" | "sand" | "plum";

type Article = {
  cat: string;
  catColor: string;
  catText: string;
  img: Tone;
  date: string;
  read: string;
  title: string;
  excerpt: string;
  featured?: boolean;
};

const ARTICLES: Article[] = [
  {
    cat: "Chiot",
    catColor: "#d4c2dc",
    catText: "#6b4a7a",
    img: "plum",
    date: "18 avril 2026",
    read: "6 min",
    title:
      "Les 3 premières semaines avec votre chiot : ce que personne ne vous dit",
    excerpt:
      "L'arrivée d'un chiot à la maison est un moment magique — et épuisant. Voici les erreurs à éviter et les réflexes à adopter dès le premier jour pour bien démarrer votre vie à deux.",
    featured: true,
  },
  {
    cat: "Méthode",
    catColor: "#c2cfb5",
    catText: "#7a8f6c",
    img: "sage",
    date: "10 avril 2026",
    read: "4 min",
    title: "Pourquoi le collier électrique n'est pas (jamais) la solution",
    excerpt:
      "Un outil encore trop souvent conseillé, notamment pour les chiens réactifs. Je t'explique pourquoi c'est une fausse bonne idée, et ce qu'on peut faire à la place.",
  },
  {
    cat: "Comportement",
    catColor: "#e8dcc8",
    catText: "#b86e52",
    img: "sand",
    date: "2 avril 2026",
    read: "5 min",
    title: "Mon chien tire en laisse : comprendre avant de corriger",
    excerpt:
      "La marche en laisse, c'est le grand classique. Mais avant de chercher à « faire obéir » ton chien, il faut comprendre POURQUOI il tire. Spoiler : ce n'est pas pour t'embêter.",
  },
  {
    cat: "Adoption",
    catColor: "#e8b89a",
    catText: "#2a2438",
    img: "lavender",
    date: "25 mars 2026",
    read: "7 min",
    title: "Adopter en refuge : préparer les 48 premières heures",
    excerpt:
      "Un chien adopté en refuge arrive avec son histoire, souvent difficile. Voici comment accueillir sereinement, sans précipiter, pour que les premières heures soient une vraie rencontre.",
  },
  {
    cat: "Chiot",
    catColor: "#d4c2dc",
    catText: "#6b4a7a",
    img: "sage",
    date: "18 mars 2026",
    read: "3 min",
    title: "La socialisation du chiot : la fenêtre d'or à ne pas rater",
    excerpt:
      "Entre 3 et 12 semaines, ton chiot vit sa « période de socialisation ». Ce qu'il rencontre — ou pas — à ce moment façonne son caractère pour la vie. Comment bien faire ?",
  },
  {
    cat: "Méthode",
    catColor: "#c2cfb5",
    catText: "#7a8f6c",
    img: "plum",
    date: "10 mars 2026",
    read: "4 min",
    title:
      "Les 5 signaux d'apaisement que ton chien t'envoie (et que tu rates)",
    excerpt:
      "Bâillement, léchage de truffe, détournement du regard... Ton chien communique sans cesse. Apprendre à le lire, c'est la première étape d'une relation apaisée.",
  },
];

const CATEGORIES: Array<[string, string, string, boolean]> = [
  ["Tous les articles", "#6b4a7a", "#fbf6ec", true],
  ["Chiot", "#d4c2dc", "#6b4a7a", false],
  ["Méthode", "#c2cfb5", "#7a8f6c", false],
  ["Comportement", "#e8dcc8", "#b86e52", false],
  ["Adoption", "#e8b89a", "#2a2438", false],
  ["Témoignages", "#f5ede0", "#6b4a7a", false],
];

export default function BlogPage() {
  const [featured, ...rest] = ARTICLES;
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden">
          <Blob
            size={280}
            color="#c2cfb5"
            variant={1}
            className="absolute opacity-50 pointer-events-none"
            style={{ top: -60, right: -60 }}
          />
          <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pt-14 pb-12 text-center">
            <div className="text-[12px] text-plum tracking-[0.18em] uppercase font-bold mb-3.5">
              Le blog de G&rsquo;educ
            </div>
            <h1 className="text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.1] m-0 font-extrabold text-ink tracking-[-0.02em] max-w-[740px] mx-auto">
              Conseils, <span className="text-plum">décryptages</span>,
              <br />
              et histoires de duos.
            </h1>
            <p className="text-[16px] leading-[1.6] text-ink/70 max-w-[540px] mx-auto mt-5">
              Des articles pratiques et bienveillants pour mieux comprendre ton
              chien, écrits depuis Cambrai avec beaucoup de cœur.
            </p>
          </div>
        </section>

        <section className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pb-8 text-center">
          <div className="inline-flex gap-2.5 flex-wrap justify-center">
            {CATEGORIES.map(([l, bg, c, active]) => (
              <button
                key={l}
                className="cursor-pointer font-bold"
                style={{
                  background: bg,
                  color: c,
                  padding: "10px 20px",
                  borderRadius: 999,
                  fontSize: 13,
                  border: active
                    ? "2px solid #6b4a7a"
                    : "2px solid transparent",
                }}
              >
                {l}
              </button>
            ))}
          </div>
        </section>

        <section className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-8">
          <div
            className="bg-sand-light grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center"
            style={{ borderRadius: 32, padding: 24 }}
          >
            <PlaceholderImg
              label="Photo d'article"
              tone={featured.img}
              radius={20}
              width="100%"
              height={320}
            />
            <div className="px-2 lg:pr-5">
              <div
                className="inline-block bg-peach text-ink uppercase font-extrabold mb-3.5"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.15em",
                  padding: "6px 12px",
                  borderRadius: 999,
                }}
              >
                ★ À la une
              </div>
              <div className="flex flex-wrap gap-2.5 mb-3 items-center">
                <span
                  className="uppercase font-bold"
                  style={{
                    background: featured.catColor,
                    color: featured.catText,
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    padding: "4px 10px",
                    borderRadius: 999,
                  }}
                >
                  {featured.cat}
                </span>
                <span className="text-[12px] text-ink/60">
                  {featured.date} · {featured.read} de lecture
                </span>
              </div>
              <h2 className="text-[22px] sm:text-[28px] lg:text-[32px] m-0 font-extrabold text-ink leading-[1.2] tracking-[-0.01em]">
                {featured.title}
              </h2>
              <p className="text-[15px] leading-[1.65] text-ink/75 mt-4">
                {featured.excerpt}
              </p>
              <Btn
                small
                className="mt-5 bg-plum text-bone border-0 hover:bg-plum-soft"
              >
                Lire l&rsquo;article →
              </Btn>
            </div>
          </div>
        </section>

        <section className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((a, i) => (
              <article
                key={i}
                className="bg-bone overflow-hidden border border-lavender flex flex-col cursor-pointer"
                style={{ borderRadius: 24 }}
              >
                <PlaceholderImg
                  label="Photo"
                  tone={a.img}
                  radius={0}
                  width="100%"
                  height={180}
                />
                <div className="px-6 py-5 flex-1 flex flex-col">
                  <div className="flex gap-2.5 items-center mb-3">
                    <span
                      className="uppercase font-bold"
                      style={{
                        background: a.catColor,
                        color: a.catText,
                        fontSize: 10,
                        letterSpacing: "0.1em",
                        padding: "3px 10px",
                        borderRadius: 999,
                      }}
                    >
                      {a.cat}
                    </span>
                    <span className="text-[11px] text-ink/60">{a.read}</span>
                  </div>
                  <h3 className="text-[17px] m-0 font-extrabold text-ink leading-[1.3]">
                    {a.title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.6] text-ink/70 mt-2.5 flex-1">
                    {a.excerpt}
                  </p>
                  <div className="mt-4 pt-3.5 border-t border-lavender flex justify-between items-center text-[12px]">
                    <span className="text-ink/60">{a.date}</span>
                    <span className="text-plum font-bold">Lire →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pb-20">
          <div
            className="bg-lavender grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            style={{ borderRadius: 32, padding: "32px 32px" }}
          >
            <div>
              <div className="text-[12px] text-plum tracking-[0.18em] uppercase font-bold mb-2.5">
                Newsletter · 1 email / mois
              </div>
              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] m-0 font-extrabold text-ink tracking-[-0.01em]">
                Recevez mes meilleurs conseils, une fois par mois.
              </h3>
              <p className="text-[14.5px] text-ink/75 leading-[1.6] mt-3">
                Mes nouveaux articles, des astuces exclusives, et parfois des
                offres pour les abonnés. Zéro spam, désinscription en un clic.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
