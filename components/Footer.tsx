import Link from "next/link";

const COLS: Array<[string, Array<[string, string?]>]> = [
  [
    "Navigation",
    [
      ["Accueil", "/"],
      ["Prestations", "/prestations"],
      ["À propos", "/a-propos"],
      ["Blog", "/blog"],
      ["FAQ", "/faq"],
      ["Témoignages", "/temoignages"],
    ],
  ],
  [
    "Prestations",
    [
      ["Bilan comportemental"],
      ["Séance à l'heure"],
      ["Pack 6 heures"],
      ["Programme ambassadeur"],
      ["Adoptants refuge"],
    ],
  ],
  [
    "Suivez-moi",
    [
      ["Instagram @g.educ.cambrai"],
      ["Facebook G'educ"],
      ["gaellegenly@icloud.com"],
      ["06 XX XX XX XX"],
    ],
  ],
];

export default function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 lg:gap-12 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-lavender text-plum flex items-center justify-center font-extrabold text-[16px]">
                G
              </div>
              <div className="text-[20px] font-extrabold">G&rsquo;educ</div>
            </div>
            <p className="text-[13px] leading-[1.6] opacity-70 max-w-[300px]">
              Éducation canine bienveillante à Cambrai et dans un rayon de 30 km.
              Par Gaëlle Genly, 21 ans, certifiée ACACED et formée Esprit Dog.
            </p>
          </div>
          {COLS.map(([title, items]) => (
            <div key={title}>
              <div className="text-[11px] tracking-[0.18em] text-lavender uppercase font-bold mb-4">
                {title}
              </div>
              {items.map(([label, href]) => {
                const inner = (
                  <span className="block text-[13px] opacity-75 mb-2 hover:opacity-100 transition-opacity">
                    {label}
                  </span>
                );
                return href ? (
                  <Link key={label} href={href}>
                    {inner}
                  </Link>
                ) : (
                  <div key={label}>{inner}</div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="pt-6 border-t border-bone/15 flex flex-col sm:flex-row gap-3 justify-between text-[11px] opacity-60">
          <span>© 2026 · G&rsquo;educ · Gaëlle Genly · SIRET en cours</span>
          <span>Mentions légales · CGV · Confidentialité</span>
        </div>
      </div>
    </footer>
  );
}
