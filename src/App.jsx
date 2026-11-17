import portrait from "./img/ouzy.jpg";
import foodieOrder from "./img/foodieOrder.jpg";
import ecommerce from "./img/e-commerce.jpg";
import uranus from "./img/uranus-cafe.jpg";

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
    shot: null, // import a screenshot and set it here to show it
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
    summary: "Web applications for a securities firm, built on a micro-frontend architecture.",
    stack: ["React", "TypeScript", "Webpack", "Micro Frontend"],
    shot: null,
    shipped: [
      ["Micro frontends", "React and TypeScript apps on a Webpack-based micro-frontend architecture, built for scalability and maintainability."],
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
  ["Frameworks", "SvelteKit, React, Next.js, Express, Node, Laravel, CodeIgniter"],
  ["UI & state", "Tailwind CSS, Material UI, Bootstrap, Redux, Zustand"],
  ["Workflow", "Git, GitHub, GitLab, Jira, Figma, Postman, REST APIs, JWT"],
];

const EDUCATION = [
  ["Binus University", "S1 Computer Science", "2024–Now"],
  ["Binar Academy", "Front End Engineering", "2023–2024"],
  ["Politeknik Aceh", "D3 Information Technology", "2019–2022"],
];

/* ---------- pieces ---------- */

function Arrow({ className = "" }) {
  return (
    <svg className={`size-[0.8em] ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7" /><path d="M8 7h9v9" />
    </svg>
  );
}

const wrap = "mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12";
const grid = "grid grid-cols-1 gap-x-8 lg:grid-cols-12";

function Section({ id, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className={`${wrap} pt-24 sm:pt-32 lg:pt-40`}>
      <div className={grid}>
        <h2 id={`${id}-h`} className="mb-10 text-[clamp(2.5rem,4vw,3.5rem)] leading-none font-[300] tracking-[-0.03em] lg:sticky lg:top-24 lg:col-span-3 lg:mb-0 lg:self-start">
          {title}
        </h2>
        <div className="lg:col-span-9">{children}</div>
      </div>
    </section>
  );
}

/* ---------- sections ---------- */

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-rule bg-paper">
      <div className={`${wrap} flex h-16 items-center justify-between`}>
        <a href="#top" className="text-[0.95rem] font-medium tracking-[-0.01em]">Ouzy<span className="max-[380px]:sr-only"> Maulana</span></a>
        <nav aria-label="Sections" className="flex text-[0.95rem] text-graphite">
          {[["Experience", "#experience"], ["Projects", "#projects"], ["Contact", "#contact"]].map(([label, href]) => (
            <a key={href} href={href} className="flex min-h-11 items-center px-2 text-[0.875rem] transition-colors hover:text-ink sm:px-3.5 sm:text-[0.95rem] last:pr-0">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className={`${wrap} pt-14 sm:pt-20 lg:pt-12`}>
      <div className={`${grid} items-center gap-y-12`}>
        <div className="lg:col-span-7 lg:pb-4">
          <h1 className="text-[clamp(3.5rem,8vw,6rem)] leading-[0.95] font-[300] tracking-[-0.04em]">
            <span className="block animate-rise">Ouzy</span>
            <span className="block animate-rise [animation-delay:90ms]">Maulana</span>
          </h1>
          <p className="mt-8 max-w-[30ch] animate-rise text-[clamp(1.375rem,2.2vw,1.875rem)] leading-[1.3] font-[350] tracking-[-0.015em] [animation-delay:180ms]">
            Frontend developer building merchant and internal backoffice systems for fintech.
          </p>
          <p className="mt-6 animate-rise text-graphite [animation-delay:260ms]">
            Open to new roles and freelance work
          </p>
          <div className="mt-10 flex animate-rise flex-wrap items-center gap-x-7 gap-y-3 [animation-delay:340ms]">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[3px] bg-ink px-6 max-sm:w-full text-paper transition-[background-color,transform] duration-200 hover:bg-accent active:translate-y-px"
            >
              Email me <Arrow />
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="link inline-flex min-h-11 items-center gap-1.5">LinkedIn <Arrow /></a>
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="link inline-flex min-h-11 items-center gap-1.5">GitHub <Arrow /></a>
          </div>
        </div>
        <figure className="animate-rise [animation-delay:160ms] lg:col-span-4 lg:col-start-9">
          <img
            src={portrait}
            alt="Ouzy Maulana wearing a batik shirt"
            width="720"
            height="1008"
            fetchPriority="high"
            className="aspect-[4/5] w-full object-cover object-[50%_30%]"
          />
          <figcaption className="mt-3 text-sm text-quiet">Tangerang Selatan, Indonesia</figcaption>
        </figure>
      </div>

      <ol className="mt-16 sm:mt-20 lg:mt-12" aria-label="Career index">
        {[...ROLES.map((r) => [r.company, r.role, r.years, `#${r.id}`]), ["Solusi Pembayaran Elektronik", "Engineering Intern", "2021 · 2023", "#earlier"]].map(
          ([company, role, years, href], i) => (
            <li key={company} className="relative">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px origin-left animate-draw bg-rule"
                style={{ animationDelay: `${400 + i * 120}ms` }}
              />
              <a href={href} className="group grid grid-cols-[1fr_auto] gap-x-6 py-5 sm:grid-cols-12 sm:gap-x-8">
                <span className="text-[1.125rem] font-medium tracking-[-0.01em] transition-colors group-hover:text-accent sm:col-span-5">{company}</span>
                <span className="hidden text-graphite sm:col-span-4 sm:block">{role}</span>
                <span className="text-right text-graphite tabular-nums sm:col-span-3">{years}</span>
              </a>
            </li>
          )
        )}
      </ol>
      <div className="h-px bg-rule" />
    </section>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-20 sm:space-y-24">
        {ROLES.map((r) => (
          <article key={r.company} id={r.id}>
            <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-[clamp(1.625rem,2.4vw,1.875rem)] leading-tight font-[400] tracking-[-0.025em]">{r.company}</h3>
              <p className="text-graphite tabular-nums">{r.period}</p>
            </header>
            <p className="mt-2 text-graphite">{r.role} · {r.legal} · {r.place}</p>
            <p className="mt-6 max-w-[58ch] text-[1.1875rem] leading-relaxed">{r.summary}</p>
            {r.shot && <img src={r.shot} alt={`${r.company} application`} loading="lazy" className="mt-10 w-full border border-rule" />}
            <dl className="mt-10 border-t border-rule">
              {r.shipped.map(([k, v]) => (
                <div key={k} className="grid gap-x-8 gap-y-1 border-b border-rule py-4 sm:grid-cols-[13rem_1fr]">
                  <dt className="font-medium">{k}</dt>
                  <dd className="max-w-[60ch] text-graphite">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-sm text-quiet">{r.stack.join(" · ")}</p>
          </article>
        ))}

        <div id="earlier">
          <h3 className="mb-6 text-sm font-medium text-quiet">Earlier</h3>
          <ul className="border-t border-rule">
            {EARLIER.map(([role, company, year, note]) => (
              <li key={year} className="grid gap-x-8 gap-y-1 border-b border-rule py-5 sm:grid-cols-[13rem_1fr_auto]">
                <span className="font-medium">{role}</span>
                <span className="text-graphite">
                  {company}
                  <span className="mt-1 block max-w-[56ch] text-[0.95rem] text-quiet">{note}</span>
                </span>
                <span className="text-graphite tabular-nums sm:text-right">{year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Project({ p, large }) {
  return (
    <article className={large ? "sm:col-span-2" : ""}>
      <div className="overflow-hidden border border-rule bg-plate">
        <img
          src={p.img}
          alt={`${p.name} interface`}
          width="1280"
          height="622"
          loading="lazy"
          decoding="async"
          className="aspect-[1280/622] w-full object-cover object-top transition-transform duration-700 ease-out-expo hover:scale-[1.02]"
        />
      </div>
      <div className={`mt-5 ${large ? "grid gap-x-8 gap-y-3 lg:grid-cols-[1fr_1.4fr]" : "space-y-3"}`}>
        <h3 className="text-[1.5rem] leading-tight font-[400] tracking-[-0.02em]">{p.name}</h3>
        <div className="space-y-3">
          <p className="max-w-[52ch] text-graphite">{p.desc}</p>
          <p className="text-sm text-quiet">{p.stack}</p>
          <p className="flex flex-wrap gap-x-6">
            {p.links.map(([label, url]) => (
              <a key={url} href={url} target="_blank" rel="noreferrer" className="link inline-flex min-h-11 items-center gap-1.5">
                {label} on GitHub <Arrow />
              </a>
            ))}
          </p>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2">
        {PROJECTS.map((p, i) => <Project key={p.name} p={p} large={i === 0} />)}
      </div>
    </Section>
  );
}

function Background() {
  return (
    <Section id="background" title="Background">
      <div className="grid gap-x-8 gap-y-14 xl:grid-cols-[1.3fr_1fr]">
        <div>
          <h3 className="mb-4 text-sm font-medium text-quiet">Stack</h3>
          <dl className="border-t border-rule">
            {STACK.map(([k, v]) => (
              <div key={k} className="grid gap-x-8 gap-y-1 border-b border-rule py-4 sm:grid-cols-[9rem_1fr]">
                <dt className="font-medium">{k}</dt>
                <dd className="text-graphite">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-medium text-quiet">Education</h3>
          <ul className="border-t border-rule">
            {EDUCATION.map(([school, prog, years]) => (
              <li key={school} className="grid grid-cols-[1fr_auto] gap-x-6 border-b border-rule py-4">
                <span className="font-medium">{school}</span>
                <span className="text-graphite tabular-nums">{years}</span>
                <span className="text-graphite">{prog}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <footer id="contact" className={`${wrap} pt-32 pb-10 sm:pt-44`}>
      <div className="border-t border-ink pt-14 sm:pt-20">
        <h2 className="max-w-[16ch] text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] font-[300] tracking-[-0.035em]">
          Have a role or a product in mind?
        </h2>
        <a
          href={`mailto:${EMAIL}`}
          className="link mt-10 inline-flex items-center gap-3 text-[clamp(1.25rem,3vw,2rem)] font-[350] tracking-[-0.015em] break-all"
        >
          {EMAIL} <Arrow />
        </a>
        <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-2 text-graphite">
          <li><a className="link inline-flex min-h-11 items-center" href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a className="link inline-flex min-h-11 items-center" href={LINKS.github} target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a className="link inline-flex min-h-11 items-center" href={LINKS.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
          <li className="inline-flex min-h-11 items-center">Tangerang Selatan, Indonesia</li>
        </ul>
        <p className="mt-20 text-sm text-quiet">© {new Date().getFullYear()} Ouzy Maulana</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a href="#experience" className="sr-only z-20 bg-ink px-3 py-2 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
        Skip to experience
      </a>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Background />
      </main>
      <Contact />
    </>
  );
}
