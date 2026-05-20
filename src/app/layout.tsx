import type { Metadata } from "next";

import {
  Inter,
  Inter_Tight,
} from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({
  variable: "--font-inter",

  subsets: ["latin"],

  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",

  subsets: ["latin"],

  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Renta Fácil",

    template:
      "%s | Renta Fácil",
  },

  description:
    "Plataforma moderna para renta segura de propiedades.",

  keywords: [
    "renta de propiedades",
    "apartamentos",
    "casas",
    "proptech",
    "alquiler",
    "colombia",
    "renta fácil",
  ],

  authors: [
    {
      name:
        "Dreiser Morales",
    },
  ],

  creator:
    "Dreiser Morales",

  metadataBase: new URL(
    "https://rentafacil.com"
  ),

  openGraph: {
    title: "Renta Fácil",

    description:
      "Plataforma moderna para renta segura de propiedades.",

    siteName:
      "Renta Fácil",

    locale: "es_CO",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Renta Fácil",

    description:
      "Plataforma moderna para renta segura de propiedades.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}