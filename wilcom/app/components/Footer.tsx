import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <p className="text-lg font-semibold text-white">Wilcom Systems</p>
            <p className="mt-3 text-sm text-neutral-400">
              ICT infrastructure, security, software, and retail automation —
              trusted since 2008.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-semibold text-white">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-white">Clients</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-sm font-semibold text-white">Solutions</p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              <li>Networking & Infrastructure</li>
              <li>CCTV & Surveillance</li>
              <li>Software Development</li>
              <li>Retail POS & Automation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-neutral-400">
              <li>
                2nd Floor, Elyzee Plaza<br />
                Kilimani Road, Nairobi
              </li>
              <li>
                <a href="tel:+254202396916" className="hover:text-white">
                  +254 020 2396916/7
                </a>
              </li>
              <li>
                <a href="tel:+254205288878" className="hover:text-white">
                  +254 020 5288878
                </a>
              </li>
              <li>
                <a href="mailto:sales@wilcom.co.ke" className="hover:text-white">
                  sales@wilcom.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Wilcom Systems Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}