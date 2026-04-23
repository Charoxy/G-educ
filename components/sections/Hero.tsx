"use client";

import { motion, useReducedMotion } from "motion/react";
import Btn from "../Btn";
import Blob from "../Blob";
import PlaceholderImg from "../PlaceholderImg";
import Float from "../motion/Float";

const STATS: Array<[string, string, string]> = [
  ["🐾", "+40 duos", "accompagnés"],
  ["⭐", "4.9/5", "note moyenne"],
  ["📍", "30 km", "autour de Cambrai"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  const container = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: {},
        show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
      };

  const item = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : fadeUp;

  return (
    <section className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.4, ease }}
        className="absolute pointer-events-none"
        style={{ top: -80, right: -60 }}
      >
        <Blob size={340} color="#c2cfb5" variant={0} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 1.4, ease, delay: 0.15 }}
        className="absolute pointer-events-none"
        style={{ bottom: -40, left: -60 }}
      >
        <Blob size={260} color="#d4c2dc" variant={1} />
      </motion.div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div
              variants={item}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 bg-sand-light px-4 py-2 rounded-full text-[12px] text-plum font-semibold mb-5 sm:mb-6"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-sage shrink-0"
                animate={
                  reduce
                    ? {}
                    : {
                        scale: [1, 1.4, 1],
                        opacity: [1, 0.6, 1],
                      }
                }
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              Nouveaux créneaux disponibles · Rentrée 2025
            </motion.div>
            <motion.h1
              variants={item}
              transition={{ duration: 0.7, ease }}
              className="text-[36px] sm:text-[52px] lg:text-[68px] leading-[1.05] m-0 font-extrabold text-ink tracking-[-0.025em]"
            >
              Votre chien,
              <br />
              <span className="text-plum highlight-lavender">votre complice</span>{" "}
              de vie.
            </motion.h1>
            <motion.p
              variants={item}
              transition={{ duration: 0.6, ease }}
              className="text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.6] text-ink/70 max-w-[480px] mt-5 sm:mt-6 font-normal"
            >
              Bonjour, moi c&rsquo;est Gaëlle 👋 &mdash; éducatrice canin à
              Cambrai. Ensemble, on va construire avec votre chien une relation
              fondée sur la compréhension, la confiance, et beaucoup de
              patience. Sans cri, sans stress, sans gadgets.
            </motion.p>

            <motion.div
              variants={item}
              transition={{ duration: 0.6, ease }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-3.5 mt-7 sm:mt-9 sm:items-center"
            >
              <Btn primary href="/prestations" className="w-full sm:w-auto">
                Réserver mon bilan · 15€
              </Btn>
              <Btn href="/prestations" className="w-full sm:w-auto">
                Voir les prestations →
              </Btn>
            </motion.div>

            <motion.div
              variants={item}
              transition={{ duration: 0.6, ease }}
              className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-8 mt-8 sm:mt-10 lg:mt-14"
            >
              {STATS.map(([emoji, title, sub]) => (
                <div key={title}>
                  <div className="text-[20px] sm:text-[22px]">{emoji}</div>
                  <div className="text-[14px] sm:text-[16px] font-extrabold text-ink mt-1 leading-tight">
                    {title}
                  </div>
                  <div className="text-[10.5px] sm:text-[11px] text-ink/60 mt-0.5 leading-tight">
                    {sub}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual column — fluid on mobile, absolute composition on lg */}
          <div className="relative w-full max-w-[520px] mx-auto lg:max-w-none lg:h-[560px]">
            {/* Mobile/tablet: fluid image with overlapping badges */}
            <div className="lg:hidden relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.1 }}
              >
                <PlaceholderImg
                  label="Gaëlle & un chien"
                  tone="plum"
                  radius={120}
                  width="100%"
                  height={360}
                />
              </motion.div>
              <Float
                amplitude={4}
                duration={4.5}
                className="absolute"
                style={{ left: -8, top: 24 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.45 }}
                  className="bg-sage text-bone max-w-[160px]"
                  style={{
                    padding: "10px 14px",
                    borderRadius: 16,
                    boxShadow: "0 10px 30px -10px rgba(122,143,108,0.5)",
                  }}
                >
                  <div className="text-[10px] opacity-85 mb-0.5 font-semibold">
                    ✓ Méthode
                  </div>
                  <div className="text-[12.5px] font-bold leading-[1.3]">
                    Renforcement positif uniquement
                  </div>
                </motion.div>
              </Float>
              <Float
                amplitude={4}
                duration={5.5}
                delay={0.3}
                className="absolute"
                style={{ right: -4, bottom: 20 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.55 }}
                  className="bg-bone border-[1.5px] border-lavender flex gap-2.5 items-center"
                  style={{
                    padding: "10px 14px",
                    borderRadius: 16,
                    boxShadow: "0 10px 30px -10px rgba(107,74,122,0.3)",
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-plum text-bone flex items-center justify-center font-extrabold text-[12px]">
                    GG
                  </div>
                  <div className="leading-[1.2]">
                    <div className="text-[12px] font-bold text-ink">
                      Gaëlle répond
                    </div>
                    <div className="text-[10.5px] text-sage font-semibold">
                      ● sous 24h
                    </div>
                  </div>
                </motion.div>
              </Float>
            </div>

            {/* Desktop (≥ lg): original absolute composition */}
            <div className="hidden lg:block absolute inset-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.1 }}
                className="absolute"
                style={{ right: 20, top: 30 }}
              >
                <PlaceholderImg
                  label="Gaëlle & un chien"
                  tone="plum"
                  radius={180}
                  width={380}
                  height={480}
                />
              </motion.div>
              <Float
                amplitude={5}
                duration={4.5}
                className="absolute"
                style={{ left: 0, top: 60 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.55 }}
                  className="bg-sage text-bone max-w-[180px]"
                  style={{
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
                </motion.div>
              </Float>
              <Float
                amplitude={5}
                duration={5.5}
                delay={0.3}
                className="absolute"
                style={{ right: 0, bottom: 60 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.7 }}
                  className="bg-bone border-[1.5px] border-lavender flex gap-3 items-center"
                  style={{
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
                </motion.div>
              </Float>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
