import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Btn from "@/components/Btn";
import Blob from "@/components/Blob";

type Quote = {
  initial: string;
  avatar: string;
  avatarText: string;
  name: string;
  dog: string;
  breed: string;
  location: string;
  formula: string;
  quote: string;
  stars: number;
};

const QUOTES: Quote[] = [
  {
    initial: "É",
    avatar: "#d4c2dc",
    avatarText: "#6b4a7a",
    name: "Élodie",
    dog: "Maya",
    breed: "Border collie, 2 ans",
    location: "Cambrai",
    formula: "Pack 6 heures",
    quote:
      "En 4 séances, Maya ne tire plus en laisse — c'est dingue. Mais surtout, Gaëlle nous a appris à COMPRENDRE notre chien plutôt qu'à la corriger. On a réalisé tellement de choses sur son langage, ses besoins, ses signaux d'apaisement qu'on ignorait totalement. Les balades sont redevenues un vrai moment de partage. Je recommande à 100%, Gaëlle est patiente, à l'écoute, pédagogue, et on sent immédiatement qu'elle aime profondément les chiens.",
    stars: 5,
  },
  {
    initial: "T",
    avatar: "#c2cfb5",
    avatarText: "#7a8f6c",
    name: "Thomas",
    dog: "Jet",
    breed: "Croisé berger, 4 ans",
    location: "Caudry",
    formula: "Pack 6h + séances suivi",
    quote:
      "Jet, adopté en refuge à 3 ans, était très réactif face aux autres chiens. Impossible de croiser un chien en balade sans drame. Après 6 mois de travail avec Gaëlle, il croise ses congénères sereinement — pas parfaitement, mais sereinement. Ce qui m'a marqué, c'est qu'elle n'a JAMAIS cherché à le forcer. Elle a pris le temps de comprendre son passé, son vécu. Les séances sont devenues un rendez-vous qu'on attendait avec Jet.",
    stars: 5,
  },
  {
    initial: "C",
    avatar: "#e8b89a",
    avatarText: "#2a2438",
    name: "Camille & Arthur",
    dog: "Soba",
    breed: "Shiba inu, 6 mois",
    location: "Cambrai",
    formula: "Pack 6 heures",
    quote:
      "Premier chien, premier chiot, on était un peu perdus ! Surtout avec un Shiba, qui a son caractère... Gaëlle nous a vraiment accompagnés sur TOUT — propreté, rappel, socialisation, gestion de la solitude. Le pack 6h vaut largement son prix. Aujourd'hui Soba est un chiot équilibré, joueur, bien dans ses pattes. On continue avec des séances ponctuelles pour les ados, et on est ravis.",
    stars: 5,
  },
  {
    initial: "M",
    avatar: "#e8dcc8",
    avatarText: "#b86e52",
    name: "Marine",
    dog: "Lio",
    breed: "Cavalier King Charles, 8 ans",
    location: "Bouchain",
    formula: "Bilan + 3 séances",
    quote:
      "Lio, 8 ans, avait développé une anxiété de séparation très forte après un déménagement. Hurlements, dégâts, stress permanent. Gaëlle a posé un diagnostic clair dès le bilan, et on a travaillé en 3 séances espacées. Aujourd'hui, je peux m'absenter sans culpabilité. Elle m'a aussi recommandé un vétérinaire comportementaliste pour un suivi complémentaire — cette honnêteté m'a beaucoup touchée.",
    stars: 5,
  },
  {
    initial: "L",
    avatar: "#d4c2dc",
    avatarText: "#6b4a7a",
    name: "Lucas & sa famille",
    dog: "Nala",
    breed: "Labrador, 1 an",
    location: "Le Cateau",
    formula: "Pack 6 heures",
    quote:
      "On est une famille avec 2 enfants (5 et 8 ans), et Nala commençait à avoir des comportements difficiles à gérer au quotidien (sauts, « jouer » à mordiller trop fort, voler la nourriture). Gaëlle a intégré les enfants dans les séances, ce qui était génial — ils ont adoré apprendre, et Nala les écoute maintenant. Un vrai investissement pour toute la famille.",
    stars: 5,
  },
  {
    initial: "S",
    avatar: "#c2cfb5",
    avatarText: "#7a8f6c",
    name: "Sophie",
    dog: "Noisette",
    breed: "Chien de refuge, 5 ans",
    location: "Solesmes",
    formula: "Bilan offert (adoption refuge)",
    quote:
      "Gaëlle offre le bilan aux adoptants de refuge, ce qui est un geste magnifique qui m'a décidée à la contacter. Dès la première visite, elle a vu des choses que je n'avais pas vues sur Noisette — son stress, ses signaux. Elle m'a donné des clés concrètes pour l'apaiser. Depuis, je me sens mieux outillée. Je reviendrai pour des séances dès que je pourrai budgéter.",
    stars: 5,
  },
];

export default function TemoignagesPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden">
          <Blob
            size={300}
            color="#e8b89a"
            variant={0}
            className="absolute pointer-events-none"
            style={{ top: -80, left: -80, opacity: 0.35 }}
          />
          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 pt-10 sm:pt-14 pb-8 text-center">
            <div className="text-[12px] text-plum tracking-[0.18em] uppercase font-bold mb-3.5">
              Témoignages
            </div>
            <h1 className="text-[28px] sm:text-[40px] lg:text-[56px] leading-[1.1] m-0 font-extrabold text-ink tracking-[-0.02em] max-w-[760px] mx-auto">
              De vrais duos,{" "}
              <span className="text-plum">de vraies histoires,</span>
              <br className="hidden sm:block" />
              <span className="sm:inline"> de vrais changements.</span>
            </h1>
            <div className="mt-7 inline-flex flex-wrap gap-5 sm:gap-7 items-center justify-center bg-sand-light px-5 sm:px-7 py-3 sm:py-4 rounded-3xl sm:rounded-full">
              <div>
                <div className="text-[24px] font-extrabold text-ink">
                  4.9
                  <span className="text-[14px] opacity-50">/5</span>
                </div>
                <div className="text-[11px] text-ink/60">Note moyenne</div>
              </div>
              <div className="w-px h-8 bg-lavender hidden sm:block" />
              <div>
                <div className="text-[24px] font-extrabold text-ink">+40</div>
                <div className="text-[11px] text-ink/60">Duos accompagnés</div>
              </div>
              <div className="w-px h-8 bg-lavender hidden sm:block" />
              <div>
                <div className="text-[24px] font-extrabold text-ink">
                  98<span className="text-[14px] opacity-50">%</span>
                </div>
                <div className="text-[11px] text-ink/60">
                  Clients qui reviennent
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {QUOTES.map((q, i) => (
              <div
                key={i}
                className="bg-bone border border-lavender p-6 sm:p-8"
                style={{ borderRadius: 28 }}
              >
                <div className="flex gap-4 mb-5 items-start">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-[22px] font-extrabold shrink-0"
                    style={{ background: q.avatar, color: q.avatarText }}
                  >
                    {q.initial}
                  </div>
                  <div className="flex-1">
                    <div className="text-[16px] font-extrabold text-ink">
                      {q.name} &amp; {q.dog}
                    </div>
                    <div className="text-[12px] text-ink/65 mt-0.5">
                      {q.breed} · {q.location}
                    </div>
                    <div className="text-[11px] text-plum font-bold mt-1 uppercase tracking-[0.1em]">
                      {q.formula}
                    </div>
                  </div>
                  <div className="text-[14px] text-peach">
                    {"★".repeat(q.stars)}
                  </div>
                </div>
                <p className="text-[14px] leading-[1.7] text-ink m-0 font-medium">
                  « {q.quote} »
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 pb-16 sm:pb-20">
          <div
            className="bg-sand-light flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-8 flex-wrap p-6 sm:p-8"
            style={{ borderRadius: 28 }}
          >
            <div>
              <div className="text-[12px] text-plum tracking-[0.15em] uppercase font-bold mb-2">
                Retrouvez-moi sur
              </div>
              <div className="text-[20px] sm:text-[22px] font-extrabold text-ink">
                Google · Facebook · Instagram
              </div>
              <div className="text-[13px] text-ink/70 mt-2 max-w-[480px]">
                Tous les avis sont vérifiés, authentiques, et je ne modère
                jamais les retours.
              </div>
            </div>
            <Btn primary>Laisser un avis ⭐</Btn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
