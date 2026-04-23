"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Btn from "./Btn";

const LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Prestations", href: "/prestations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Témoignages", href: "/temoignages" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-bone relative z-20">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-4 lg:py-5 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0"
          onClick={() => setOpen(false)}
        >
          <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-plum flex items-center justify-center text-bone text-[16px] lg:text-[18px] font-extrabold">
            G
          </div>
          <div className="leading-[1.1]">
            <div className="text-[18px] lg:text-[22px] font-extrabold text-ink tracking-[-0.01em]">
              G&rsquo;educ
            </div>
            <div className="text-[9px] lg:text-[10px] text-plum tracking-[0.12em] uppercase font-semibold">
              Éducation canine · Cambrai
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex gap-8 text-[14px] text-ink font-medium">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`hover:text-plum transition-colors ${
                  active ? "text-plum" : "text-ink"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Btn primary small href="/contact">
            Réserver un bilan
          </Btn>
        </div>

        <button
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="lg:hidden w-10 h-10 rounded-xl bg-sand-light flex items-center justify-center text-plum text-[20px]"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-lavender bg-bone">
          <div className="px-5 sm:px-8 py-4 flex flex-col gap-1">
            {LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-3 rounded-xl text-[15px] font-semibold ${
                    active
                      ? "bg-lavender text-plum"
                      : "text-ink hover:bg-sand-light"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <div className="pt-3">
              <Btn primary href="/contact" className="w-full">
                Réserver un bilan
              </Btn>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
