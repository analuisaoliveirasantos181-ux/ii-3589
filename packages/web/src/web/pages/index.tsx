import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const works = [
  { src: "/images/work-1.jpg", title: "Miradouro", series: "Vigília", year: "2026", ratio: "aspect-[4/5]" },
  { src: "/images/work-2.jpg", title: "Tejo, 3h14", series: "Águas Paradas", year: "2025", ratio: "aspect-[3/2]" },
  { src: "/images/work-3.jpg", title: "Azulejo partido", series: "Matéria", year: "2025", ratio: "aspect-square" },
  { src: "/images/work-4.jpg", title: "Último elétrico", series: "Movimento", year: "2026", ratio: "aspect-[4/5]" },
  { src: "/images/work-5.jpg", title: "Escadinhas", series: "Alfama", year: "2024", ratio: "aspect-[2/3]" },
  { src: "/images/work-6.jpg", title: "Janela, chuva", series: "Vigília", year: "2026", ratio: "aspect-[3/2]" },
];

const nav = [
  { href: "#trabalhos", label: "Trabalhos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contacto", label: "Contacto" },
];

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-ink/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-[10.8%]">
        <a href="/" className="font-serif text-[22px] tracking-wide text-bone">
          Ana Santos
        </a>
        <nav className="flex items-center gap-5 md:gap-6">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-[14px] text-mist transition-colors hover:text-cyan">
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const item = (d: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay: d, ease },
  });
  return (
    <section className="grain relative min-h-[100svh] overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt="Elétrico 28 numa rua de Lisboa à noite, envolto em nevoeiro"
        className="kenburns absolute inset-0 h-full w-full object-cover object-[60%_center]"
      />
      {/* teal grade + legibility gradients */}
      <div className="absolute inset-0 bg-[#062226] mix-blend-color opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/50" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-center px-6 pt-24 pb-20 md:px-[10.8%]">
        <motion.p {...item(0.2)} className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-mist">
          <span className="h-px w-8 bg-cyan" />
          Fotografia · Arte Visual · Lisboa
        </motion.p>

        <motion.h1 {...item(0.35)} className="max-w-[12ch] font-serif text-[clamp(3.2rem,8vw,7.5rem)] leading-[0.92] tracking-[-0.01em] text-bone">
          Histórias que só a <em className="text-cyan">noite</em> conta.
        </motion.h1>

        <motion.p {...item(0.55)} className="mt-8 max-w-[440px] text-[17px] leading-[1.65] text-mist">
          Artista visual entre a quietude e o movimento — a contar histórias silenciosas no escuro, desde Lisboa.
        </motion.p>

        <motion.div {...item(0.7)} className="mt-10 flex flex-wrap gap-3">
          <a
            href="#trabalhos"
            className="rounded-[4px] bg-cyan px-6 py-3 text-[14px] font-semibold text-ink shadow-[0_0_40px_-8px_rgba(34,211,230,.6)] transition hover:brightness-110"
          >
            Ver trabalhos
          </a>
          <a
            href="#contacto"
            className="rounded-[4px] border border-white/15 bg-ink/40 px-6 py-3 text-[14px] font-semibold text-bone backdrop-blur-sm transition hover:border-cyan/60 hover:text-cyan"
          >
            Entrar em contacto
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-mist/70">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-cyan to-transparent" />
      </motion.div>
    </section>
  );
}

function Works({ onOpen }: { onOpen: (i: number) => void }) {
  return (
    <section id="trabalhos" className="relative mx-auto max-w-[1440px] px-6 py-28 md:px-[10.8%] md:py-40">
      <Reveal className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-cyan">01 — Trabalhos</p>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-bone">
            Seleção <em className="text-mist">2024–2026</em>
          </h2>
        </div>
        <p className="max-w-[360px] text-[15px] leading-relaxed text-mist">
          Fotografias feitas entre a meia-noite e o amanhecer. Ruas vazias, luz fria, e o que fica quando a cidade dorme.
        </p>
      </Reveal>

      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
        {works.map((w, i) => (
          <Reveal key={w.src} delay={(i % 3) * 0.1} className="break-inside-avoid">
            <button onClick={() => onOpen(i)} className="group block w-full text-left">
              <div className={`relative overflow-hidden rounded-[4px] bg-night ${w.ratio}`}>
                <img
                  src={w.src}
                  alt={w.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-[1.2s] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-ink/0 transition duration-500 group-hover:bg-ink/20" />
              </div>
              <div className="mt-4 flex items-baseline justify-between border-t border-white/10 pt-3">
                <span className="font-serif text-[22px] text-bone transition-colors group-hover:text-cyan">{w.title}</span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-mist">
                  {w.series} · {w.year}
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="relative border-y border-white/5 bg-night/60">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 py-28 md:grid-cols-12 md:px-[10.8%] md:py-40">
        <Reveal className="md:col-span-5">
          <div className="relative">
            <img src="/images/work-6.jpg" alt="Ana Santos" className="aspect-[4/5] w-full rounded-[4px] object-cover" />
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 border border-cyan/40 md:block" />
          </div>
        </Reveal>
        <div className="md:col-span-6 md:col-start-7 md:pt-10">
          <Reveal>
            <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-cyan">02 — Sobre</p>
            <h2 className="font-serif text-[clamp(2.2rem,4.2vw,3.8rem)] leading-[1.02] text-bone">
              Fotografo o que acontece <em className="text-mist">quando ninguém está a ver.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 space-y-5 text-[17px] leading-[1.7] text-mist">
              <p>
                Sou Ana Santos, artista visual nascida e baseada em Lisboa. O meu trabalho vive no intervalo entre a quietude e
                o movimento — elétricos que passam, janelas que se acendem, ruas que guardam silêncio.
              </p>
              <p>
                Trabalho sobretudo com fotografia noturna e longas exposições, explorando a luz fria da cidade como matéria
                narrativa. Cada imagem é uma pequena história contada em voz baixa.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {[
                ["12", "Exposições"],
                ["8", "Anos a fotografar"],
                ["3", "Séries publicadas"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-serif text-[44px] leading-none text-bone">{n}</dt>
                  <dd className="mt-2 text-[12px] uppercase tracking-[0.18em] text-mist">{l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-[140px]" />
      <div className="relative mx-auto max-w-[1440px] px-6 py-32 text-center md:px-[10.8%] md:py-44">
        <Reveal>
          <p className="mb-6 text-[11px] uppercase tracking-[0.32em] text-cyan">03 — Contacto</p>
          <h2 className="mx-auto max-w-[14ch] font-serif text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.95] text-bone">
            Vamos criar algo <em className="text-cyan">no escuro?</em>
          </h2>
          <p className="mx-auto mt-8 max-w-[460px] text-[17px] leading-relaxed text-mist">
            Encomendas, exposições, colaborações editoriais ou apenas uma conversa. Respondo em 48 horas.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <a
            href="mailto:ola@anasantos.pt"
            className="mt-12 inline-block border-b border-white/20 pb-2 font-serif text-[clamp(1.6rem,3vw,2.6rem)] text-bone transition-colors hover:border-cyan hover:text-cyan"
          >
            ola@anasantos.pt
          </a>
          <div className="mt-12 flex justify-center gap-8 text-[13px] uppercase tracking-[0.2em] text-mist">
            {[
              ["Instagram", "https://instagram.com"],
              ["Behance", "https://behance.net"],
              ["Vimeo", "https://vimeo.com"],
            ].map(([s, url]) => (
              <a key={s} href={url} target="_blank" rel="noreferrer" className="transition-colors hover:text-cyan">
                {s}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
      <footer className="relative border-t border-white/5">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 px-6 py-8 text-[12px] text-mist/70 md:flex-row md:px-[10.8%]">
          <span className="font-serif text-[16px] text-bone">Ana Santos</span>
          <span>© {new Date().getFullYear()} · Lisboa, Portugal</span>
        </div>
      </footer>
    </section>
  );
}

function Lightbox({ index, onClose, onNav }: { index: number | null; onClose: () => void; onNav: (d: number) => void }) {
  useEffect(() => {
    if (index === null) return;
    const on = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, [index, onClose, onNav]);

  const w = index !== null ? works[index] : null;
  return (
    <AnimatePresence>
      {w && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-6 backdrop-blur"
          onClick={onClose}
        >
          <motion.figure
            key={w.src}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease }}
            className="flex max-h-full flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={w.src} alt={w.title} className="max-h-[80vh] w-auto rounded-[4px] object-contain" />
            <figcaption className="mt-5 flex w-full items-baseline justify-between gap-8 text-mist">
              <span className="font-serif text-[24px] text-bone">{w.title}</span>
              <span className="text-[11px] uppercase tracking-[0.2em]">
                {w.series} · {w.year}
              </span>
            </figcaption>
          </motion.figure>
          <button onClick={(e) => { e.stopPropagation(); onNav(-1); }} className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-2xl text-mist hover:text-cyan" aria-label="Anterior">←</button>
          <button onClick={(e) => { e.stopPropagation(); onNav(1); }} className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-2xl text-mist hover:text-cyan" aria-label="Seguinte">→</button>
          <button onClick={onClose} className="absolute right-6 top-6 text-[12px] uppercase tracking-[0.2em] text-mist hover:text-cyan">Fechar</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Index() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <main className="bg-ink font-sans text-bone">
      <Header />
      <Hero />
      <Works onOpen={setOpen} />
      <About />
      <Contact />
      <Lightbox
        index={open}
        onClose={() => setOpen(null)}
        onNav={(d) => setOpen((i) => (i === null ? i : (i + d + works.length) % works.length))}
      />
    </main>
  );
}

export default Index;
