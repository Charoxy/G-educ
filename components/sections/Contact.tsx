import Blob from "../Blob";
import ContactForm from "../ContactForm";

const COORDS: Array<[string, string, string]> = [
  ["✉️", "Email", "gaellegenly@icloud.com"],
  ["📱", "Téléphone", "06 XX XX XX XX"],
  ["📷", "Instagram", "@g.educ.cambrai"],
  ["📍", "Zone", "Cambrai · 30 km autour"],
];

export default function Contact() {
  return (
    <section className="bg-sand-light relative overflow-hidden">
      <Blob
        size={260}
        color="#d4c2dc"
        variant={0}
        className="absolute opacity-50 pointer-events-none"
        style={{ top: 40, right: -60 }}
      />
      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pt-20 lg:pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <div className="text-[12px] text-plum tracking-[0.18em] uppercase font-bold mb-3.5">
              Prendre contact
            </div>
            <h2 className="text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.05] m-0 font-extrabold text-ink tracking-[-0.02em]">
              Parlons de <span className="text-plum">votre chien.</span> 💜
            </h2>
            <p className="text-[16px] leading-[1.6] text-ink/70 mt-5 max-w-[420px]">
              Un doute, une question, une situation qui vous préoccupe ?
              Écrivez-moi, je vous réponds toujours &mdash; promis, sous 24h.
            </p>

            <div className="mt-10 flex flex-col gap-3.5">
              {COORDS.map(([e, k, v]) => (
                <div
                  key={k}
                  className="bg-bone border border-lavender flex items-center gap-4"
                  style={{ borderRadius: 18, padding: "16px 20px" }}
                >
                  <div className="text-[22px]">{e}</div>
                  <div>
                    <div className="text-[11px] text-plum uppercase font-bold tracking-[0.1em]">
                      {k}
                    </div>
                    <div className="text-[15px] text-ink font-semibold mt-0.5">
                      {v}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
