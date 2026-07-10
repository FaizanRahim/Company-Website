import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXA — Digital Agency",
  description: "We build digital experiences that drive online success.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
