import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "G'educ — Éducation canine bienveillante à Cambrai",
  description:
    "Gaëlle Genly, éducatrice canin diplômée à Cambrai. Renforcement positif uniquement, méthode Esprit Dog, certifiée ACACED. Bilan à 15€, séances à 45€, pack 6h à 220€.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={nunito.variable}>
      <body className="font-sans bg-bone text-ink">{children}</body>
    </html>
  );
}
