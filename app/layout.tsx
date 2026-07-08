import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andre Goldberg",
  description:
    "Learning how great software is built — one project, one conversation, and one challenge at a time.",
  openGraph: {
    title: "Andre Goldberg",
    description:
      "Learning how great software is built — one project, one conversation, and one challenge at a time.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andre Goldberg",
    description:
      "Learning how great software is built — one project, one conversation, and one challenge at a time.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body
        className="min-h-screen"
        style={{
          fontFamily: "var(--font-inter, var(--font-sans))",
        }}
      >
        {children}
      </body>
    </html>
  );
}
