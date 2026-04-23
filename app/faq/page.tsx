"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Blob from "@/components/Blob";

type FaqSection = {
  cat: string;
  catBg: string;
  catText: string;
  items: Array<[string, string]>;
};

const FAQS: FaqSection[] = [
  {
    cat: "Pour commencer",
    catBg: "#d4c2dc",
    catText: "#6b4a7a",
    items: [
      [
        "À partir de quel âge peut-on commencer l'éducation d'un chiot ?",
        "Le plus tôt possible ! Dès 2 mois, un chiot apprend énormément. On peut travailler la socialisation, la propreté, les premières commandes de base, la gestion de la solitude. Plus tôt on pose les bases, plus elles sont solides. Il n'est jamais trop tôt — ni trop tard, d'ailleurs.",
      ],
      [
        "Mon chien est adulte, est-ce trop tard pour l'éduquer ?",
        "Absolument pas. Un chien apprend toute sa vie. J'accompagne régulièrement des chiens de 5, 8, voire 12 ans. La seule différence, c'est qu'il faut parfois plus de patience pour déconstruire de mauvaises habitudes. Mais les progrès sont réels, à tout âge.",
      ],
      [
        "Comment se déroule la première séance ?",
        "La première séance, c'est le bilan comportemental (15€, environ 45 min). Je viens chez vous. J'observe ton chien dans son environnement, j'écoute ton histoire, tes difficultés, tes objectifs. On pose ensemble un plan d'action clair. Tu repars avec de premiers conseils applicables le soir même.",
      ],
    ],
  },
  {
    cat: "Méthode",
    catBg: "#c2cfb5",
    catText: "#7a8f6c",
    items: [
      [
        "Quelle méthode d'éducation utilisez-vous ?",
        "Uniquement des méthodes bienveillantes, basées sur le renforcement positif et les sciences du comportement animal. Aucun outil de contrainte (pas de collier étrangleur, électrique, à pointes). Aucune domination. Aucune violence, physique ou verbale. Je considère ton chien comme un partenaire, pas comme un problème à dresser.",
      ],
      [
        "Travaillez-vous avec les chiens réactifs ou agressifs ?",
        "Oui, c'est une grande partie de mon activité. Chiens réactifs en laisse, peurs, agressivité envers d'autres chiens ou humains... On commence toujours par un bilan approfondi pour comprendre la cause réelle du comportement — car un comportement est toujours un message. Puis on avance progressivement, à petits pas, sans jamais forcer.",
      ],
      [
        "Les cours sont-ils individuels ou en groupe ?",
        "Pour le moment, uniquement en individuel — à domicile ou en extérieur selon les besoins. Je privilégie ce format car il permet une adaptation totale à ton duo. Des séances collectives pourraient arriver à l'avenir, je te tiendrai au courant !",
      ],
    ],
  },
  {
    cat: "Pratique",
    catBg: "#e8dcc8",
    catText: "#b86e52",
    items: [
      [
        "Où vous déplacez-vous ?",
        "Cambrai et un rayon de 30 km autour. Cela couvre Caudry, Le Cateau-Cambrésis, Bouchain, Douai (partiellement), Solesmes, Arleux... Si tu es un peu plus loin, demande-moi — on trouvera peut-être un arrangement.",
      ],
      [
        "Combien de séances faut-il en général ?",
        "Ça dépend vraiment de ton chien, de la problématique, et de ton implication entre les séances. Un chiot bien engagé peut faire des merveilles en 3-4 séances. Un chien réactif peut nécessiter 8-10 séances étalées sur plusieurs mois. Je te donne une estimation honnête dès le bilan.",
      ],
      [
        "Comment se passe le paiement ?",
        "Après chaque séance, en espèces, par chèque, ou par virement bancaire. Le pack 6h peut être réglé en 2 fois sans frais. Une facture t'est systématiquement remise.",
      ],
      [
        "Puis-je annuler ou reporter une séance ?",
        "Oui, sans problème, tant que tu me préviens au moins 24h à l'avance. Au-delà, je te demanderai 20€ de frais — je réserve ton créneau en bloquant une partie de ma journée, merci de comprendre.",
      ],
    ],
  },
  {
    cat: "Sérieux & confiance",
    catBg: "#e8b89a",
    catText: "#2a2438",
    items: [
      [
        "Êtes-vous assurée pour exercer ?",
        "Oui, je dispose d'une responsabilité civile professionnelle qui couvre mes activités d'éducatrice canin. Tu peux me demander l'attestation à tout moment.",
      ],
      [
        "Vous êtes jeune (21 ans) — est-ce que ça pose problème ?",
        "Je comprends la question, je me la suis posée aussi ! Je n'ai pas 20 ans d'expérience, c'est vrai. Mais j'ai des formations solides (Bac pro CGEH, Esprit Dog, ACACED), une passion qui ne m'a jamais quittée, et surtout l'humilité d'un métier dans lequel on apprend toute sa vie. Le bilan à 15€ est justement fait pour qu'on se rencontre avant tout engagement.",
      ],
      [
        "Avez-vous un numéro SIRET ?",
        "Oui, en cours de création au moment du lancement. Je te le communique dès disponible, et il figurera sur toutes les factures.",
      ],
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="bg-bone border border-lavender p-5 sm:p-7"
      style={{ borderRadius: 20 }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex justify-between items-start gap-5 text-left cursor-pointer bg-transparent border-0 p-0"
        aria-expanded={open}
      >
        <h3 className="text-[16px] sm:text-[17px] m-0 font-extrabold text-ink flex-1">
          {q}
        </h3>
        <div className="w-7 h-7 rounded-full bg-sand-light text-plum flex items-center justify-center text-[18px] font-extrabold shrink-0 transition-transform">
          {open ? "−" : "+"}
        </div>
      </button>
      {open && (
        <p className="text-[14.5px] leading-[1.7] text-ink/80 m-0 mt-3.5">
          {a}
        </p>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden">
          <Blob
            size={280}
            color="#d4c2dc"
            variant={0}
            className="absolute opacity-50 pointer-events-none"
            style={{ top: -60, left: -60 }}
          />
          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 pt-10 sm:pt-14 pb-10 sm:pb-12 text-center">
            <div className="text-[12px] text-plum tracking-[0.18em] uppercase font-bold mb-3.5">
              Questions fréquentes
            </div>
            <h1 className="text-[28px] sm:text-[40px] lg:text-[56px] leading-[1.1] m-0 font-extrabold text-ink tracking-[-0.02em] max-w-[740px] mx-auto">
              Vous avez des questions ?<br />
              <span className="text-plum">J&rsquo;ai des réponses.</span>
            </h1>
            <p className="text-[16px] leading-[1.6] text-ink/70 max-w-[560px] mx-auto mt-5">
              Si votre question n&rsquo;y figure pas, écrivez-moi sans hésiter
              &mdash; je réponds toujours sous 24h.
            </p>
          </div>
        </section>

        <section className="max-w-[900px] mx-auto px-4 sm:px-8 lg:px-12 py-6 sm:py-8 pb-16 sm:pb-20">
          <div className="flex flex-col gap-12">
            {FAQS.map((section, i) => (
              <div key={i}>
                <div
                  className="inline-block uppercase font-extrabold mb-5"
                  style={{
                    background: section.catBg,
                    color: section.catText,
                    fontSize: 12,
                    letterSpacing: "0.15em",
                    padding: "6px 14px",
                    borderRadius: 999,
                  }}
                >
                  {section.cat}
                </div>
                <div className="flex flex-col gap-3">
                  {section.items.map(([q, a], j) => (
                    <FaqItem key={j} q={q} a={a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 pb-16 sm:pb-20">
          <div
            className="bg-plum text-bone flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 sm:gap-8 p-7 sm:p-10"
            style={{ borderRadius: 28 }}
          >
            <div>
              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] m-0 font-extrabold">
                Votre question n&rsquo;est pas là ?
              </h3>
              <p className="text-[15px] opacity-85 mt-2.5 max-w-[500px]">
                Écrivez-moi directement ou appelez-moi &mdash; je suis là pour
                ça. Et je réponds toujours sous 24h, promis.
              </p>
            </div>
            <button
              className="bg-peach text-ink border-0 font-extrabold cursor-pointer shrink-0 w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 text-[13px] sm:text-[14px]"
              style={{
                borderRadius: 999,
                fontFamily: "inherit",
              }}
            >
              Me poser ma question →
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
