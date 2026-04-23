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
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-24">
        <div className="text-center mb-14">
          <div className="text-[12px] text-plum tracking-[0.18em] uppercase font-bold mb-3.5">
            Ils m&rsquo;ont fait confiance
          </div>
          <h2 className="text-[32px] sm:text-[38px] lg:text-[46px] leading-[1.1] m-0 font-extrabold text-ink tracking-[-0.02em]">
            De vraies histoires,{" "}
            <span className="text-plum">de vrais changements.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {QUOTES.map((q, i) => (
            <div
              key={i}
              className="bg-bone border border-lavender flex flex-col"
              style={{
                borderRadius: 28,
                padding: "32px 28px",
                transform: i === 1 ? "translateY(-12px)" : "none",
                boxShadow:
                  i === 1
                    ? "0 24px 40px -20px rgba(107,74,122,0.25)"
                    : "none",
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
          ))}
        </div>
      </div>
    </section>
  );
}
