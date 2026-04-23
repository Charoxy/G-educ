"use client";

export default function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-2.5"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="elodie@email.com"
        className="flex-1 bg-bone text-[14px] text-ink outline-none border-0 focus:ring-2 focus:ring-plum/30"
        style={{ borderRadius: 999, padding: "14px 22px" }}
      />
      <button
        type="submit"
        className="bg-plum text-bone border-0 cursor-pointer font-extrabold whitespace-nowrap"
        style={{
          padding: "14px 28px",
          borderRadius: 999,
          fontSize: 13,
          fontFamily: "inherit",
        }}
      >
        Je m&rsquo;inscris 💌
      </button>
    </form>
  );
}
