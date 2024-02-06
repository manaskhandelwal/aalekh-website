import type { Metadata } from "next";

import "../styles/main.scss";
import { CORMORANT_GARAMOND } from "@/app/fonts";

export const metadata: Metadata = {
  title: "Aalekh - Carnival of Books",
  description:
    "AALKEH is Bennett University’s annual literary fest that aims to showcase ‘the Power of Ink’. The two-day bilingual fest’s essence and spirit is to promote reading, writing, and learning with publishing support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={CORMORANT_GARAMOND.className}>{children}</body>
    </html>
  );
}
