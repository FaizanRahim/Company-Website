import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NorsTack — IT Solutions & Digital Engineering",
  description:
    "NorsTack builds web platforms, cloud infrastructure, and digital products for growing businesses.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-ink font-body text-mist antialiased">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br from-[#141d17] via-[#0b0d0b] to-[#0b0d0b]" />
        <div className="mx-auto max-w-7xl px-4 pt-6 md:px-8">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
