import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Wilcom",
  description:
    "CCTV installation, custom software development, and IT consulting services.",
};

type Service = {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  accent: string;
};

const services: Service[] = [
  {
    title: "CCTV & Security Systems",
    description:
      "End-to-end surveillance solutions — from site survey and installation to remote monitoring and maintenance. We secure what matters most.",
    features: [
      "HD & IP camera installation",
      "Remote monitoring & mobile access",
      "Access control & alarm integration",
      "Annual maintenance contracts",
    ],
    accent: "from-blue-500 to-cyan-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M2 7.5 20 3l1.5 5L3.5 12.5 2 7.5Z" />
        <path d="M22 8v6" />
        <path d="M5 12v3a4 4 0 0 0 4 4h2" />
        <circle cx="12" cy="19" r="2" />
      </svg>
    ),
  },
  {
    title: "Software Development",
    description:
      "Custom web, mobile, and backend systems built to fit your business — not the other way around. Scalable, secure, and maintainable.",
    features: [
      "Web & mobile applications",
      "APIs & system integrations",
      "Cloud deployment & DevOps",
      "UI/UX design & prototyping",
    ],
    accent: "from-violet-500 to-fuchsia-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <polyline points="8 6 3 12 8 18" />
        <polyline points="16 6 21 12 16 18" />
        <line x1="13" y1="4" x2="11" y2="20" />
      </svg>
    ),
  },
  {
    title: "Consulting Services",
    description:
      "Strategic technology guidance to help you choose the right tools, streamline operations, and stay ahead of the curve.",
    features: [
      "IT strategy & roadmap",
      "Security audits & compliance",
      "Digital transformation",
      "Systems analysis & optimization",
    ],
    accent: "from-emerald-500 to-teal-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M12 2a7 7 0 0 0-4 12.7V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.3A7 7 0 0 0 12 2Z" />
        <path d="M9 22h6" />
        <path d="M10 17h4" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-12 text-center">
        <span className="inline-block rounded-full border border-neutral-800 bg-neutral-900 px-4 py-1 text-xs font-medium uppercase tracking-widest text-neutral-400">
          What We Do
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
          Services Built Around{" "}
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Your Needs
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-neutral-400">
          From securing your premises to building the software that runs your
          business — we deliver solutions that scale with you.
        </p>
      </section>

      {/* Service cards */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 transition hover:border-neutral-700 hover:bg-neutral-900"
            >
              {/* Icon */}
              <div
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} text-white shadow-lg`}
              >
                {service.icon}
              </div>

              {/* Title & description */}
              <h2 className="text-xl font-semibold text-white">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                {service.description}
              </p>

              {/* Feature list */}
              <ul className="mt-6 space-y-2 text-sm text-neutral-300">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition group-hover:gap-3"
              >
                Request a quote
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}