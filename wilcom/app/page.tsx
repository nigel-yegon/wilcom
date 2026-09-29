import Link from "next/link";

/* ---------- Data pulled from the company profile ---------- */

const highlights = [
  {
    label: "Established",
    value: "2008",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    label: "Solutions",
    value: "12+",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="m2 17 10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    label: "Clients",
    value: "Retail · Govt · Hospitality",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Support",
    value: "24/7 After-Sales",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 2a10 10 0 0 0-10 10v4a2 2 0 0 0 2 2h2v-6H4v-0a8 8 0 0 1 16 0v0h-2v6h2a2 2 0 0 0 2-2v-4A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
];

const services = [
  {
    id: "networking",
    title: "ICT Infrastructure",
    description:
      "Design and implementation of complex LANs supporting data, voice, and video — structured cabling, fiber, IP telephony, firewalls, and clean power systems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <rect x="2" y="14" width="20" height="6" rx="2" />
        <path d="M6 14V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6" />
        <circle cx="6" cy="17" r="1" />
        <circle cx="12" cy="17" r="1" />
        <circle cx="18" cy="17" r="1" />
      </svg>
    ),
  },
  {
    id: "cctv",
    title: "Security & Surveillance",
    description:
      "Digital and IP CCTV, biometric access control, license plate recognition, and video analytics — integrated with POS and central monitoring stations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M2 7.5 20 3l1.5 5L3.5 12.5 2 7.5Z" />
        <path d="M22 8v6" />
        <path d="M5 12v3a4 4 0 0 0 4 4h2" />
        <circle cx="12" cy="19" r="2" />
      </svg>
    ),
  },
  {
    id: "software",
    title: "Software Development",
    description:
      "Custom web and mobile apps, HR & payroll systems, hotel & restaurant management, and e-government platforms — built to match your business processes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <polyline points="8 6 3 12 8 18" />
        <polyline points="16 6 21 12 16 18" />
        <line x1="13" y1="4" x2="11" y2="20" />
      </svg>
    ),
  },
  {
    id: "retail",
    title: "Retail Automation",
    description:
      "Complete POS solutions — retail-hardened hardware, software customization, professional installation, training, and ongoing support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
        <circle cx="9" cy="20" r="1.5" />
        <circle cx="18" cy="20" r="1.5" />
        <path d="M7 13 5.4 5" />
      </svg>
    ),
  },
  {
    id: "consulting",
    title: "Technology Consulting",
    description:
      "Strategic guidance on ICT infrastructure, banking & government solutions, and digital transformation — with a focus on ROI and long-term value.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M12 2a7 7 0 0 0-4 12.7V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.3A7 7 0 0 0 12 2Z" />
        <path d="M9 22h6" />
        <path d="M10 17h4" />
      </svg>
    ),
  },
  {
    id: "egov",
    title: "e-Government & Banking",
    description:
      "Municipal and county management systems, payment integration, ETRs, and secure banking solutions for public and private institutions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M3 21h18M5 21V10l7-5 7 5v11" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
];

const coreValues = [
  "High ethical standards with all clients",
  "Integrity with clients and suppliers",
  "Right solutions with professionalism",
  "Efficient after-sales services",
  "Uncompromising customer satisfaction",
];

/* ---------- Page ---------- */

export default function HomePage() {
  return (
    <main className="bg-neutral-950 text-neutral-100">

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden">
        {/* Soft gradient glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 text-center">
          <span className="inline-block rounded-full border border-neutral-800 bg-neutral-900 px-4 py-1 text-xs font-medium uppercase tracking-widest text-neutral-400">
            Established 2008 · Nairobi, Kenya
          </span>

          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            ICT Solutions That{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Power Your Business
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
            Wilcom Systems delivers reliable, scalable, and robust technology —
            from network infrastructure and surveillance to custom software and
            retail automation. State-of-the-art solutions, on time, each time.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Request a Quote
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-neutral-200 transition hover:border-neutral-700 hover:text-white"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- QUICK STATS ---------- */}
      <section className="border-y border-neutral-800 bg-neutral-900/30">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label} className="flex items-center gap-3">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-800 text-blue-400">
                {h.icon}
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  {h.label}
                </p>
                <p className="text-sm font-semibold text-white">{h.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-blue-400">
              About Wilcom
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              A partner in ICT, not just a supplier
            </h2>
            <p className="mt-5 text-neutral-400">
              Wilcom Systems was established in 2008 by experienced
              professionals with an intensive background in the ICT industry.
              Our portfolio supports clients in ICT infrastructure, security
              surveillance, retail and hospitality automation, e-government,
              consulting, and software development.
            </p>
            <p className="mt-4 text-neutral-400">
              We thrive on customer satisfaction — delivered through high-quality
              products, professional installation, and efficient after-sales
              service.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  Our Vision
                </p>
                <p className="mt-1.5 text-sm text-neutral-200">
                  To be the leading distributor and reseller of computer
                  electronics, achieving recognition as a provider of ICT
                  solutions by leveraging our core strengths.
                </p>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  Our Mission
                </p>
                <p className="mt-1.5 text-sm text-neutral-200">
                  To supply and maintain high-quality POS hardware, software, and
                  computer electronics — coupled with efficient after-sales
                  service, achieving our business objectives through
                  state-of-the-art solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Core values */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
            <h3 className="text-lg font-semibold text-white">Our Core Values</h3>
            <ul className="mt-6 space-y-4">
              {coreValues.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-sm text-neutral-300">{value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
              <p className="text-xs uppercase tracking-wide text-blue-400">
                Quality Policy
              </p>
              <p className="mt-2 text-sm italic text-neutral-300">
                "We will provide reliable, scalable and robust solutions,
                products and services to our customers, on time, each time."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="border-t border-neutral-800 bg-neutral-900/20">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-widest text-blue-400">
              What We Do
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Products & Solutions
            </h2>
            <p className="mt-4 text-neutral-400">
              A full portfolio of ICT products and services — designed,
              installed, and supported by certified professionals.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.id}
                id={s.id}
                className="group flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/50 p-7 transition hover:border-neutral-700 hover:bg-neutral-900"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-400">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {s.description}
                </p>
                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition group-hover:gap-3"
                >
                  Learn more
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-br from-blue-500/10 via-neutral-900 to-violet-500/10 p-10 text-center sm:p-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to upgrade your ICT?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-400">
            Contact us for product information, pricing, and ordering. We'll
            respond within one business day.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+254202396916"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-neutral-200 transition hover:border-neutral-700 hover:text-white"
            >
              Call +254 020 2396916
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}