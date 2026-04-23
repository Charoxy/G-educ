"use client";

import Btn from "./Btn";

const FIELDS: Array<[string, string]> = [
  ["Votre prénom", "Élodie"],
  ["Votre email", "elodie@email.com"],
  ["Le prénom de votre chien", "Maya"],
];

export default function ContactForm() {
  return (
    <form
      className="bg-bone border border-lavender"
      style={{
        borderRadius: 28,
        padding: "36px 32px",
        boxShadow: "0 20px 40px -20px rgba(107,74,122,0.2)",
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="text-[12px] text-plum tracking-[0.15em] uppercase font-bold mb-2">
        Formulaire rapide
      </div>
      <h3 className="text-[24px] font-extrabold text-ink m-0 mb-6">
        Dites-moi tout ✨
      </h3>

      {FIELDS.map(([l, p]) => (
        <div key={l} className="mb-4">
          <label className="block text-[12px] text-ink/70 font-semibold mb-1.5">
            {l}
          </label>
          <input
            type="text"
            placeholder={p}
            className="w-full bg-sand-light text-[14px] text-ink outline-none border-0 focus:ring-2 focus:ring-plum/30"
            style={{ borderRadius: 12, padding: "12px 16px" }}
          />
        </div>
      ))}
      <div className="mb-5">
        <label className="block text-[12px] text-ink/70 font-semibold mb-1.5">
          Votre situation, vos questions
        </label>
        <textarea
          placeholder="Parlez-moi de votre chien, de ce qui vous amène..."
          rows={4}
          className="w-full bg-sand-light text-[14px] text-ink outline-none border-0 resize-none focus:ring-2 focus:ring-plum/30"
          style={{ borderRadius: 12, padding: "12px 16px", minHeight: 90 }}
        />
      </div>
      <Btn primary type="submit" className="w-full">
        Envoyer ma demande 💌
      </Btn>
      <div className="text-[11px] text-ink/60 mt-3.5 text-center">
        Réponse sous 24h &mdash; toujours.
      </div>
    </form>
  );
}
