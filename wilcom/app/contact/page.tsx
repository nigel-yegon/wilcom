import type { Metadata } from "next";

async function submitAcmeQuoteRequest(formData: FormData) {
  "use server";

  const requiredFields = ["name", "email", "service", "message"];
  const missingField = requiredFields.some((field) => {
    const value = formData.get(field);
    return typeof value !== "string" || value.trim() === "";
  });

  if (missingField) {
    throw new Error("Please complete all required fields.");
  }
}

export const metadata: Metadata = {
  title: "Request a Quote | Wilcom",
  description:
    "Get in touch for CCTV installation, custom software development, or IT consulting. We'll respond within one business day.",
};

const contactDetails = [
  {
    label: "Email",
    value: "hello@wilcom.co.ke",
    href: "mailto:hello@wilcom.co.ke",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+254 722 719 412",
    href: "tel:+254722719412",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
  {
    label: "Office",
    value: "Nairobi, Kenya",
    href: "#map",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Hours",
    value: "Mon–Fri · 8am–6pm EAT",
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const serviceOptions = [
  "CCTV & Security Systems",
  "Software Development",
  "Consulting Services",
  "Multiple / Not sure yet",
];

const budgetRanges = [
  "Under KES 100,000",
  "KES 100,000 – 500,000",
  "KES 500,000 – 2M",
  "KES 2M+",
  "Not sure yet",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-10 text-center">
        <span className="inline-block rounded-full border border-neutral-800 bg-neutral-900 px-4 py-1 text-xs font-medium uppercase tracking-widest text-neutral-400">
          Get In Touch
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
          Request a{" "}
          <span className="bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Quote
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-neutral-400">
          Tell us about your project — whether it's securing a site, building
          software, or planning your next IT move. We'll respond within one
          business day.
        </p>
      </section>

      {/* Main grid: form + sidebar */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* ---------- FORM ---------- */}
          <form
            action={submitAcmeQuoteRequest}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Wilson Kerebei"
                  className="input"
                />
              </Field>

              <Field label="Company" htmlFor="company">
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Wilcom Systems Limited"
                  className="input"
                />
              </Field>

              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="hello@wilcom.co.ke"
                  className="input"
                />
              </Field>

              <Field label="Phone" htmlFor="phone">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+254 722 719 412"
                  className="input"
                />
              </Field>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <Field label="Service needed" htmlFor="service">
                <select id="service" name="service" required className="input">
                  <option value="">Select a service…</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Estimated budget" htmlFor="budget">
                <select id="budget" name="budget" className="input">
                  <option value="">Select a range…</option>
                  {budgetRanges.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Project details" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell us what you need — e.g. '16-camera setup across two floors' or 'a booking system for our clinic'."
                  className="input resize-none"
                />
              </Field>
            </div>

            {/* Timeline — handy for all three services */}
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-neutral-300">
                Preferred timeline
              </label>
              <div className="flex flex-wrap gap-3">
                {["ASAP", "1–3 months", "3–6 months", "Just exploring"].map(
                  (t) => (
                    <label
                      key={t}
                      className="cursor-pointer rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-neutral-300 transition has-checked:border-blue-500 has-checked:bg-blue-500/10 has-checked:text-white"
                    >
                      <input
                        type="radio"
                        name="timeline"
                        value={t}
                        className="sr-only"
                      />
                      {t}
                    </label>
                  )
                )}
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 sm:w-auto"
            >
              Send request
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            <p className="mt-4 text-xs text-neutral-500">
              We'll never share your details. Expect a reply within one business
              day.
            </p>
          </form>

          {/* ---------- SIDEBAR ---------- */}
          <aside className="space-y-6">
            {/* Contact details */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
              <h2 className="text-lg font-semibold text-white">
                Contact details
              </h2>
              <ul className="mt-5 space-y-4">
                {contactDetails.map((c) => (
                  <li key={c.label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-800 text-neutral-300">
                      {c.icon}
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-neutral-500">
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="text-sm text-neutral-200 hover:text-white"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-sm text-neutral-200">{c.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service quick links */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
              <h2 className="text-lg font-semibold text-white">
                Not sure where to start?
              </h2>
              <p className="mt-2 text-sm text-neutral-400">
                Jump straight to the service you're interested in:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  { href: "/services#cctv", label: "CCTV & Security Systems" },
                  { href: "/services#software", label: "Software Development" },
                  { href: "/services#consulting", label: "Consulting Services" },
                ].map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="flex items-center justify-between rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-neutral-300 transition hover:border-neutral-700 hover:text-white"
                    >
                      {l.label}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Response promise */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </span>
                <p className="text-sm text-emerald-300">
                  <strong className="text-emerald-200">
                    Response within 1 business day.
                  </strong>{" "}
                  Free initial consultation — no obligation.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

/* ---------- Small helpers ---------- */

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-medium text-neutral-300"
      >
        {label}
      </label>
      {children}
    </div>
  );
}