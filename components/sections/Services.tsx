import Btn from "../Btn";
import Reveal from "../motion/Reveal";
import { StaggerGroup, StaggerItem } from "../motion/Stagger";

export default function Services() {
  return (
    <section className="relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-24">
        <Reveal className="text-center mb-14">
          <div className="text-[12px] text-plum tracking-[0.18em] uppercase font-bold mb-3.5">
            Prestations &amp; tarifs
          </div>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.1] m-0 font-extrabold text-ink tracking-[-0.02em]">
            Choisissez la formule qui{" "}
            <span className="highlight-sage">vous ressemble.</span>
          </h2>
        </Reveal>

        <StaggerGroup
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:items-stretch"
          staggerChildren={0.12}
        >
          <StaggerItem className="h-full">
          {/* Bilan */}
          <div
            className="bg-sand-light border border-sand flex flex-col h-full transition-transform duration-300 hover:-translate-y-1"
            style={{ borderRadius: 28, padding: "36px 30px" }}
          >
            <div className="text-[22px] mb-[18px]">🤝</div>
            <h3 className="text-[22px] m-0 font-extrabold text-ink">
              Bilan comportemental
            </h3>
            <p className="text-[13.5px] leading-[1.6] text-ink/70 mt-2.5 min-h-[70px]">
              Première rencontre à domicile. J&rsquo;observe, on discute, on pose
              un diagnostic clair et un plan d&rsquo;action.
            </p>
            <div
              className="mt-6 pt-6 opacity-90"
              style={{ borderTop: "1px dashed #b86e52" }}
            >
              <div className="flex items-baseline gap-1.5">
                <span className="text-[44px] font-extrabold text-terra leading-none">
                  15
                </span>
                <span className="text-[20px] text-terra font-extrabold">€</span>
                <span className="text-[12px] text-ink/55 ml-1.5">
                  · env. 45 min
                </span>
              </div>
            </div>
            <Btn small className="mt-5 w-full">
              Réserver →
            </Btn>
          </div>
          </StaggerItem>

          <StaggerItem className="h-full">
          {/* 1h — featured */}
          <div
            className="bg-plum text-bone relative flex flex-col h-full lg:-translate-y-2 transition-transform duration-300 hover:lg:-translate-y-3"
            style={{
              borderRadius: 28,
              padding: "36px 30px",
              boxShadow: "0 24px 50px -20px rgba(107,74,122,0.4)",
            }}
          >
            <div
              className="absolute bg-peach text-ink uppercase font-extrabold"
              style={{
                top: -12,
                right: 24,
                fontSize: 11,
                letterSpacing: "0.12em",
                padding: "6px 14px",
                borderRadius: 999,
              }}
            >
              ★ le plus choisi
            </div>
            <div className="text-[22px] mb-[18px]">🐕</div>
            <h3 className="text-[22px] m-0 font-extrabold">Une heure avec moi</h3>
            <p className="text-[13.5px] leading-[1.6] opacity-85 mt-2.5 min-h-[70px]">
              Une séance ciblée sur un point précis. Marche en laisse, rappel,
              propreté, socialisation, gestion des peurs.
            </p>
            <div
              className="mt-6 pt-6"
              style={{ borderTop: "1px dashed rgba(251,246,236,0.3)" }}
            >
              <div className="flex items-baseline gap-1.5">
                <span className="text-[44px] font-extrabold leading-none">45</span>
                <span className="text-[20px] font-extrabold">€</span>
                <span className="text-[12px] opacity-70 ml-1.5">/ heure</span>
              </div>
            </div>
            <button
              className="bg-bone text-plum border-0 cursor-pointer font-bold mt-5 w-full"
              style={{
                padding: "12px 22px",
                borderRadius: 999,
                fontSize: 13,
              }}
            >
              Réserver une séance →
            </button>
          </div>
          </StaggerItem>

          <StaggerItem className="h-full">
          {/* Pack 6h */}
          <div
            className="bg-bone relative flex flex-col h-full transition-transform duration-300 hover:-translate-y-1"
            style={{
              borderRadius: 28,
              padding: "36px 30px",
              border: "2px solid #7a8f6c",
            }}
          >
            <div
              className="absolute bg-sage text-bone uppercase font-extrabold"
              style={{
                top: -12,
                right: 24,
                fontSize: 11,
                letterSpacing: "0.12em",
                padding: "6px 14px",
                borderRadius: 999,
              }}
            >
              Économie · 50€
            </div>
            <div className="text-[22px] mb-[18px]">🌿</div>
            <h3 className="text-[22px] m-0 font-extrabold text-ink">
              Pack 6 heures
            </h3>
            <p className="text-[13.5px] leading-[1.6] text-ink/70 mt-2.5 min-h-[70px]">
              Un vrai parcours en 6 séances pour installer des bases solides,
              ancrées dans la durée.
            </p>
            <div
              className="mt-6 pt-6 opacity-90"
              style={{ borderTop: "1px dashed #7a8f6c" }}
            >
              <div className="flex items-baseline gap-2">
                <span className="text-[44px] font-extrabold text-sage leading-none">
                  220
                </span>
                <span className="text-[20px] text-sage font-extrabold">€</span>
                <span className="text-[13px] text-ink/45 line-through ml-2">
                  270€
                </span>
              </div>
              <div className="text-[11px] text-sage font-bold mt-1">
                soit 36€/h au lieu de 45€
              </div>
            </div>
            <Btn
              small
              className="mt-5 w-full"
              style={{ borderColor: "#7a8f6c", color: "#7a8f6c" }}
            >
              Choisir ce pack →
            </Btn>
          </div>
          </StaggerItem>
        </StaggerGroup>

        <Reveal delay={0.1} className="mt-8">
          <div
            className="bg-sand-light flex items-center justify-center gap-3 text-[14px] text-ink/80 text-center"
            style={{ borderRadius: 20, padding: "20px 28px" }}
          >
            <span className="text-[20px]">🏡</span>
            <span>
              <strong className="text-plum">Adoptants de refuge :</strong> bilan
              comportemental offert sur présentation du certificat
              d&rsquo;adoption.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
