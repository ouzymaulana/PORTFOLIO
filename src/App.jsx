import { useEffect, useRef, useState } from "react";
import portrait from "./img/ouzy.jpg";
import foodieOrder from "./img/foodieOrder.jpg";
import ecommerce from "./img/e-commerce.jpg";
import uranus from "./img/uranus-cafe.jpg";
import btLanding from "./img/beyondtech/landing-news.jpg";
import btRegister from "./img/beyondtech/register.jpg";
import btResend from "./img/beyondtech/resend-limit.jpg";
import btActivation from "./img/beyondtech/service-activation.jpg";
import btPin from "./img/beyondtech/pin.jpg";
import btControl from "./img/beyondtech/service-control.jpg";
import btEod from "./img/beyondtech/eod-schedule.jpg";
import btSales from "./img/beyondtech/sales-report.jpg";
import bnisH2h from "./img/bnis/host-to-host.jpg";
import bnisModules from "./img/bnis/module-launcher.jpg";
import batikStrip from "./img/batik-strip.jpg";
import batikBand from "./img/batik-band.jpg";

const EMAIL = "ouzymaulana@gmail.com";
const LINKS = {
  github: "https://github.com/ouzymaulana",
  linkedin: "https://www.linkedin.com/in/ouzy-maulana-2a32b5220/",
  instagram: "https://www.instagram.com/ozyy.m/",
};

const ROLES = [
  {
    id: "beyondtech",
    company: "Beyondtech",
    legal: "PT. Adisena Mitra Usaha",
    role: "Frontend Developer",
    years: "2025–Now",
    period: "Sep 2025 – Present",
    place: "Jakarta",
    summary: "Internal and merchant backoffice applications covering disbursement, QRIS services and daily reconciliation.",
    stack: ["SvelteKit", "TypeScript", "Tailwind CSS", "MVVM", "Next.js"],
    site: ["beyondtech.co.id", "https://beyondtech.co.id/"],
    // screens: [image, caption, width, height, wide?, scrollable?]
    screens: [
      [btLanding, "Company website, News page, built in Next.js and TypeScript.", 1600, 2400, true, true],
      [btRegister, "Merchant registration, business and personal accounts", 1600, 800],
      [btResend, "Password reset with a resend limit and countdown", 1600, 800],
      [btActivation, "Merchant dashboard: requesting Disbursement and Disbursement API", 1600, 1200],
      [btPin, "PIN confirmation before sensitive actions", 1600, 1200],
      [btControl, "Internal backoffice: per-merchant service control and pricing priority", 1600, 1200],
      [btEod, "Internal backoffice: end-of-day schedule for a disbursement channel", 1600, 1196],
      [btSales, "Internal backoffice: sales report with export", 1600, 1200, true],
    ],
    shipped: [
      ["Authentication", "End-to-end flow: registration, email verification and password recovery."],
      ["Merchant onboarding", "Streamlined first-time registration for new merchants."],
      ["Disbursement", "Disbursement data management inside the merchant backoffice."],
      ["Service control", "Activation and deactivation for Disbursement, Disbursement API (with credential handling) and QRIS."],
      ["PIN security", "PIN input and forgot-PIN flows for end-user accounts."],
      ["EOD reporting", "Automated end-of-day reports for daily transaction reconciliation, with in-app notifications."],
      ["Landing page", "Rebuilt the company site in Next.js and TypeScript."],
      ["Production support", "Diagnosed and fixed critical production issues."],
    ],
  },
  {
    id: "bni-sekuritas",
    company: "BNI Sekuritas",
    legal: "PT. BNI Sekuritas",
    role: "Frontend Developer",
    years: "2024–2025",
    period: "Jan 2024 – Sep 2025",
    place: "Jakarta",
    summary: "Internal web applications for a securities firm, built as modules on a micro-frontend platform.",
    stack: ["React", "Angular", "TypeScript", "Webpack", "Micro Frontend"],
    screens: [
      [bnisH2h, "Host to Host BNI v2: generating RDI opening accounts", 1600, 787],
      [bnisModules, "The internal platform's module launcher, with role-based access per module", 1600, 786],
    ],
    shipped: [
      ["Micro frontends", "React, Angular and TypeScript apps on a Webpack-based micro-frontend architecture, built for scalability and maintainability."],
      ["Host to Host", "Worked on the Host to Host BNI module, which covers RDI account opening, overbooking, clearing, RTGS and account inquiry."],
      ["Planning", "Turned user requirements into design plans and implementation designs."],
      ["Testing", "Unit-to-system testing, and UAT on request."],
      ["Delivery", "Presented outcomes to management and clients."],
    ],
  },
];

const EARLIER = [
  ["Frontend Engineer Intern", "Solusi Pembayaran Elektronik", "2023", "Landing pages in React and Next.js, Express APIs with JWT, web design in Figma."],
  ["Software Engineer Intern", "Solusi Pembayaran Elektronik", "2021", "A web e-commerce app in PHP, CodeIgniter and MySQL."],
];

const PROJECTS = [
  {
    name: "Foodie Order",
    img: foodieOrder,
    desc: "Food ordering app with a Next.js front end on an Express REST API and MySQL. JWT auth, Redux, Material UI and Formik.",
    stack: "Next.js · Express · MySQL · Redux",
    links: [
      ["Frontend", "https://github.com/ouzymaulana/foodie-order"],
      ["Backend", "https://github.com/ouzymaulana/pemesanan_makanan"],
    ],
  },
  {
    name: "Uranus Cafe",
    img: uranus,
    desc: "Point-of-sale ordering interface in React, with reusable components, React Router and Context state.",
    stack: "React · React Router · Context",
    links: [["Source", "https://github.com/ouzymaulana/uranus-cafe"]],
  },
  {
    name: "E-commerce",
    img: ecommerce,
    desc: "Next.js storefront using Redux Toolkit for the cart and live quantity changes.",
    stack: "Next.js · Redux Toolkit",
    links: [["Source", "https://github.com/ouzymaulana/todo-list"]],
  },
];

const STACK = [
  ["Languages", "TypeScript, JavaScript, HTML, CSS, Sass, PHP, SQL"],
  ["Frameworks", "SvelteKit, React, Angular, Next.js, Express, Node, Laravel, CodeIgniter"],
  ["UI & state", "Tailwind CSS, Material UI, Bootstrap, Redux, Zustand"],
  ["Workflow", "Git, GitHub, GitLab, Jira, Figma, Postman, REST APIs, JWT"],
];

const EDUCATION = [
  ["Binus University", "S1 Computer Science", "2024–Now"],
  ["Binar Academy", "Front End Engineering", "2023–2024"],
  ["Politeknik Aceh", "D3 Information Technology", "2019–2022"],
];

/* ---------- pieces ---------- */

const PATHS = {
  arrow: <><path d="M7 17 17 7" /><path d="M8 7h9v9" /></>,
  mail: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>,
  github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></>,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></>,
  instagram: <><rect width="20" height="20" x="2" y="2" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><path d="M17.5 6.5h.01" /></>,
  left: <path d="m15 6-6 6 6 6" />,
  right: <path d="m9 6 6 6-6 6" />,
  close: <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>,
  expand: <><path d="M15 3h6v6" /><path d="M9 21H3v-6" /><path d="M21 3l-7 7" /><path d="M3 21l7-7" /></>,
};

function Icon({ name, className = "size-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}

const SECTIONS = [["about", "About"], ["experience", "Experience"], ["projects", "Projects"], ["contact", "Contact"]];

// Active = the last section whose top has passed 35% of the viewport.
// At the very bottom the last section wins, since a short final section can never reach that line.
function useActiveSection() {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const update = () => {
      const atBottom = innerHeight + scrollY >= document.documentElement.scrollHeight - 2;
      let current = SECTIONS[0][0];
      for (const [id] of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= innerHeight * 0.35) current = id;
      }
      setActive(atBottom ? SECTIONS[SECTIONS.length - 1][0] : current);
    };
    update();
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    return () => {
      removeEventListener("scroll", update);
      removeEventListener("resize", update);
    };
  }, []);
  return active;
}

function Pills({ items }) {
  return (
    <p className="mt-4 font-mono text-xs leading-6 text-gold">
      <span className="sr-only">Technologies: </span>
      {items.join(" / ")}
    </p>
  );
}

/* Native <dialog> gallery: focus is trapped by the browser, Esc closes, arrows step. */
function Lightbox({ gallery, onClose }) {
  const ref = useRef(null);
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!gallery) return;
    setI(gallery.index);
    if (!ref.current.open) ref.current.showModal();
  }, [gallery]);
  if (!gallery) return <dialog ref={ref} onClose={onClose} />;
  const { screens, label } = gallery;
  const n = screens.length;
  const [src, caption, w, h, , tall] = screens[i];
  const go = (d) => setI((i + d + n) % n);
  const ctl = "grid size-11 place-items-center rounded-md border border-line text-head transition-colors hover:border-gold hover:text-gold";
  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current.close()}
      onKeyDown={(e) => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); }}
      aria-label={`${label} screens`}
      className="mx-auto mt-[5vh] mb-auto w-[min(1200px,94vw)] max-w-none bg-transparent p-0 text-body select-none"
    >
      <div className="flex items-center justify-between gap-4 pb-3">
        <p className="font-mono text-sm text-dim tabular-nums">{label} · {i + 1} / {n}</p>
        <div className="flex gap-2">
          <button type="button" className={ctl} onClick={() => go(-1)} aria-label="Previous screen"><Icon name="left" /></button>
          <button type="button" className={ctl} onClick={() => go(1)} aria-label="Next screen"><Icon name="right" /></button>
          <button type="button" className={ctl} onClick={() => ref.current.close()} aria-label="Close gallery" autoFocus><Icon name="close" /></button>
        </div>
      </div>
      {/* Fixed-height stage: controls never move when screens of different heights swap in. */}
      <div className={`h-[min(76vh,760px)] rounded-md border border-line max-sm:h-auto max-sm:max-h-[62vh] ${tall ? "overflow-y-auto overscroll-contain bg-white" : "overflow-hidden bg-night"}`}>
        <img key={src} src={src} alt={caption} width={w} height={h} className={tall ? "w-full" : "size-full object-contain"} />
      </div>
      <p className="mt-3 text-head">{caption}</p>
    </dialog>
  );
}

function Thumbs({ screens, label, open }) {
  const shown = screens.slice(0, 4);
  return (
    <ul className="mt-5 grid grid-cols-4 gap-2" aria-label={`${label} screens`}>
      {shown.map(([src, caption], k) => {
        const more = k === 3 && screens.length > 4 ? screens.length - 4 : 0;
        return (
          <li key={caption}>
            <button
              type="button"
              onClick={() => open(k)}
              aria-label={`Open ${label} screen: ${caption}`}
              className="group/thumb relative block aspect-[16/10] w-full overflow-hidden rounded border border-line bg-white transition-colors hover:border-gold"
            >
              <img src={src} alt="" loading="lazy" decoding="async" className="size-full object-cover object-left-top transition-transform duration-500 ease-out-expo group-hover/thumb:scale-105" />
              {more > 0 && (
                <span className="absolute inset-0 grid place-items-center bg-night/75 font-mono text-sm text-head">+{more}</span>
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function Highlights({ items }) {
  const [open, setOpen] = useState(false);
  const list = open ? items : items.slice(0, 3);
  return (
    <>
      <ul className="mt-3 space-y-1.5 text-[0.9375rem]">
        {list.map(([k, v]) => (
          <li key={k} className="flex gap-3">
            <span className="mt-[0.7em] h-px w-3 shrink-0 bg-gold" aria-hidden="true" />
            <span><span className="text-head">{k}.</span> {v}</span>
          </li>
        ))}
      </ul>
      {items.length > 3 && (
        <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} className="mt-2 inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-wider text-dim transition-colors hover:text-gold">
          {open ? "Show less" : `+ ${items.length - 3} more`}
        </button>
      )}
    </>
  );
}

function SectionLabel({ id, children }) {
  return (
    <div className="sticky top-0 z-20 -mx-6 mb-6 border-b border-line bg-night px-6 py-4 md:-mx-12 md:px-12 lg:sr-only">
      <h2 id={`${id}-h`} className="flex items-center gap-2.5 text-sm font-semibold text-head">
        <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
        {children}
      </h2>
    </div>
  );
}

/* ---------- layout ---------- */

function Identity({ active }) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[46%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-[clamp(3rem,6vw,4.75rem)] leading-[0.92] tracking-[-0.04em] text-head">
          <a href="#about">
            <span className="block font-extralight">Ouzy</span>
            <span className="block font-semibold">Maulana</span>
          </a>
        </h1>
        <p className="mt-6 text-lg text-head">Frontend Developer</p>
        <p className="mt-1 font-mono text-xs leading-6 text-gold">SvelteKit / React / Angular / TypeScript</p>
        <p className="mt-6 inline-flex items-center gap-2.5 text-sm text-dim">
          <span className="size-2 rounded-full bg-gold" aria-hidden="true" />
          Currently at Beyondtech, Jakarta
        </p>
        <nav className="mt-14 hidden lg:block" aria-label="In-page">
          <ul className="w-max">
            {SECTIONS.map(([id, label]) => {
              const on = active === id;
              return (
                <li key={id}>
                  <a href={`#${id}`} aria-current={on ? "true" : undefined} className="group flex items-center gap-3 py-2">
                    <span className={`size-1.5 rounded-full transition-all duration-300 ${on ? "scale-100 bg-gold" : "scale-50 bg-dim group-hover:scale-100"}`} aria-hidden="true" />
                    <span className={`text-[0.9375rem] transition-colors group-hover:text-head ${on ? "text-head" : "text-dim"}`}>{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <ul className="mt-8 flex items-center gap-1" aria-label="Social media">
        {[["github", LINKS.github, "GitHub"], ["linkedin", LINKS.linkedin, "LinkedIn"], ["instagram", LINKS.instagram, "Instagram"], ["mail", `mailto:${EMAIL}`, "Email"]].map(([icon, href, label]) => (
          <li key={label}>
            <a href={href} target={icon === "mail" ? undefined : "_blank"} rel="noreferrer" aria-label={label} className="grid size-11 place-items-center text-dim transition-colors hover:text-gold">
              <Icon name={icon} className="size-6" />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}

function Featured({ openGallery }) {
  const bt = ROLES[0];
  const k = bt.screens.findIndex(([src]) => src === btActivation);
  const [src, caption, w, h] = bt.screens[k];
  return (
    <figure>
      <button
        type="button"
        onClick={() => openGallery({ screens: bt.screens, label: bt.company, index: k })}
        aria-label={`Open ${bt.company} screens, starting with: ${caption}`}
        className="group block w-full overflow-hidden rounded-md border border-line bg-white transition-colors hover:border-gold"
      >
        <img src={src} alt={caption} width={w} height={h} fetchPriority="high" className="aspect-[16/10] w-full object-cover object-left-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.02]" />
      </button>
      <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-sm">
        <span><span className="text-head">Now building</span> the merchant and internal backoffice at Beyondtech.</span>
        <span className="inline-flex items-center gap-1 font-mono text-xs text-gold">View all screens <Icon name="arrow" className="size-3" /></span>
      </figcaption>
    </figure>
  );
}

function About({ openGallery }) {
  return (
    <section id="about" aria-labelledby="about-h" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <SectionLabel id="about">About</SectionLabel>
      <Featured openGallery={openGallery} />
      <div className="mt-14 grid gap-8 sm:grid-cols-[1fr_12rem]">
        <div className="space-y-4">
          <p>
            I'm a frontend developer based in Tangerang Selatan who builds the screens fintech teams depend on:
            <span className="text-head"> merchant dashboards, internal backoffices</span> and the flows that move money between them.
          </p>
          <p>
            Right now I'm at <a className="link" href="https://beyondtech.co.id/" target="_blank" rel="noreferrer">Beyondtech</a>, building
            backoffice applications in SvelteKit and TypeScript: authentication, merchant onboarding, disbursement, QRIS service control,
            PIN security and end-of-day reconciliation reports. Before that I spent almost two years at BNI Sekuritas working on modules
            of a micro-frontend platform in React and Angular, including Host to Host BNI.
          </p>
          <p>Alongside work, I'm studying Computer Science at Binus University.</p>
        </div>
        <img src={portrait} alt="Ouzy Maulana wearing a batik shirt" width="720" height="1008" loading="lazy" className="w-40 rounded-md border border-line object-cover sm:w-full" />
      </div>
      <dl className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {STACK.map(([k, v]) => (
          <div key={k}>
            <dt className="font-mono text-xs uppercase tracking-wider text-dim">{k}</dt>
            <dd className="mt-1 text-[0.9375rem]">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Experience({ openGallery }) {
  return (
    <section id="experience" aria-labelledby="experience-h" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <SectionLabel id="experience">Experience</SectionLabel>
      <ol className="space-y-12">
        {ROLES.map((r) => (
          <li key={r.id} id={r.id} className="scroll-mt-24">
            <div className="group grid border-l border-line pl-5 transition-colors duration-300 hover:border-gold sm:grid-cols-8 sm:gap-6">
              <p className="mt-1 mb-2 font-mono text-xs uppercase tracking-wide text-dim sm:col-span-2">{r.period}</p>
              <div className="sm:col-span-6">
                <h3 className="leading-snug font-medium text-head transition-colors">
                  {r.role} ·{" "}
                  {r.site ? (
                    <a className="group/link inline-flex items-baseline gap-1 transition-colors hover:text-gold" href={r.site[1]} target="_blank" rel="noreferrer">
                      {r.company}
                      <Icon name="arrow" className="size-3.5 translate-y-px transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  ) : (
                    r.company
                  )}
                </h3>
                <p className="mt-2 text-[0.9375rem]">{r.summary}</p>
                <Highlights items={r.shipped} />
                <Pills items={r.stack} />
                {r.screens.length > 0 && <Thumbs screens={r.screens} label={r.company} open={(k) => openGallery({ screens: r.screens, label: r.company, index: k })} />}
              </div>
            </div>
          </li>
        ))}
        {EARLIER.map(([role, company, year, note]) => (
          <li key={year} id={year === "2023" ? "earlier" : undefined} className="scroll-mt-24">
            <div className="group grid border-l border-line pl-5 transition-colors duration-300 hover:border-gold sm:grid-cols-8 sm:gap-6">
              <p className="mt-1 mb-2 font-mono text-xs uppercase tracking-wide text-dim sm:col-span-2">{year}</p>
              <div className="sm:col-span-6">
                <h3 className="leading-snug font-medium text-head">{role} · {company}</h3>
                <p className="mt-2 text-[0.9375rem]">{note}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <ul className="mt-12 space-y-2 border-t border-line pt-8" aria-label="Education">
        {EDUCATION.map(([school, prog, years]) => (
          <li key={school} className="grid gap-x-4 sm:grid-cols-8">
            <span className="font-mono text-xs uppercase tracking-wide leading-6 text-dim sm:col-span-2">{years}</span>
            <span className="sm:col-span-6"><span className="text-head">{school}</span> · {prog}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-h" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <SectionLabel id="projects">Projects</SectionLabel>
      <ul className="space-y-12">
        {PROJECTS.map((p) => (
          <li key={p.name}>
            <div className="group grid gap-4 border-l border-line pl-5 transition-colors duration-300 hover:border-gold sm:grid-cols-8 sm:gap-6">
              <div className="sm:order-2 sm:col-span-6">
                <h3 className="font-medium leading-snug text-head">
                  <a className="group/link inline-flex items-baseline gap-1 transition-colors hover:text-gold" href={p.links[0][1]} target="_blank" rel="noreferrer">
                    {p.name}
                    <Icon name="arrow" className="size-3.5 translate-y-px transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </h3>
                <p className="mt-2 text-[0.9375rem]">{p.desc}</p>
                {p.links.length > 1 && (
                  <p className="mt-2 flex gap-4 text-sm">
                    {p.links.map(([label, url]) => (
                      <a key={url} className="link inline-flex min-h-11 items-center gap-1.5" href={url} target="_blank" rel="noreferrer">
                        <Icon name="github" className="size-4" /> {label}
                      </a>
                    ))}
                  </p>
                )}
                <Pills items={p.stack.split(" · ")} />
              </div>
              <img
                src={p.img}
                alt={`${p.name} interface`}
                width="1280"
                height="622"
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-48 rounded border border-line object-cover object-left-top transition-colors group-hover:border-gold/50 sm:order-1 sm:col-span-2 sm:w-full sm:translate-y-1"
              />
            </div>
          </li>
        ))}
      </ul>
      <a href={LINKS.github} target="_blank" rel="noreferrer" className="group/link mt-12 inline-flex items-center gap-2 font-medium text-head transition-colors hover:text-gold">
        More on GitHub <Icon name="arrow" className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
      </a>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-h" className="scroll-mt-16 lg:scroll-mt-24">
      <h2 id="contact-h" className="text-[clamp(1.75rem,3vw,2.5rem)] leading-tight tracking-[-0.03em] text-head">
        <span className="font-extralight">Have a role or a product</span> <span className="font-semibold">in mind?</span>
      </h2>
      <p className="mt-4 max-w-md">Email is the fastest way to reach me.</p>
      <a
        href={`mailto:${EMAIL}`}
        className="group/link mt-8 inline-flex min-h-12 items-center gap-2 rounded-md border border-gold px-6 text-gold transition-colors hover:bg-gold hover:text-night"
      >
        {EMAIL}
        <Icon name="arrow" className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
      </a>
      <p className="mt-24 max-w-md pb-16 text-sm text-dim lg:pb-0">
        © {new Date().getFullYear()} Ouzy Maulana · Tangerang Selatan, Indonesia
      </p>
    </section>
  );
}

export default function App() {
  const active = useActiveSection();
  const [gallery, setGallery] = useState(null);
  const glow = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!fine.matches) return;
    const move = (e) => {
      glow.current?.style.setProperty("--x", `${e.clientX}px`);
      glow.current?.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <>
      <div ref={glow} className="spotlight pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      <div className="fixed inset-y-0 left-0 z-0 hidden w-7 border-r border-line lg:block" aria-hidden="true">
        <img src={batikStrip} alt="" className="size-full object-cover object-[30%_50%]" />
      </div>
      <img src={batikBand} alt="" aria-hidden="true" className="relative z-10 h-12 w-full object-cover lg:hidden" />
      <a href="#experience" className="sr-only z-30 rounded bg-gold px-3 py-2 text-night focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
        Skip to experience
      </a>
      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Identity active={active} />
          <main className="pt-24 lg:w-[52%] lg:py-24">
            <About openGallery={setGallery} />
            <Experience openGallery={setGallery} />
            <Projects />
            <Contact />
          </main>
        </div>
      </div>
      <Lightbox gallery={gallery} onClose={() => setGallery(null)} />
    </>
  );
}
