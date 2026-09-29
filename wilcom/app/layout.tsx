import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import Header from "./components/Header";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Wilcom",
  description: "CCTV, Software Development, and Consulting Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="min-h-full flex flex-col bg-neutral-950 text-neutral-100 antialiased"
        suppressHydrationWarning
      >
        <ClerkProvider>
          <Header />
          <main className="flex-1">{children}</main>
        </ClerkProvider>
        <Footer />
      </body>
    </html>
  );
}