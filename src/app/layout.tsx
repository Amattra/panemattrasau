import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Panificio a Mattra | Pane Mattrasau - Pane Artigianale Calabrese",
  description: "Pane artigianale realizzato con grani antichi del Mediterraneo e lievitazione naturale. Ispirato al pane arabo, realizzato con tecniche sarde e tradizione calabrese. Santa Domenica Talao (CS).",
  keywords: ["pane artigianale", "panificio calabrese", "pane mattrasau", "grani antichi", "lievitazione naturale", "Santa Domenica Talao"],
  authors: [{ name: "Panificio a Mattra" }],
  openGraph: {
    title: "Panificio a Mattra | Pane Mattrasau",
    description: "Pane artigianale con grani antichi e lievitazione naturale. Tradizione calabrese dal 1980.",
    url: "https://www.panemattrasau.it",
    siteName: "Panificio a Mattra",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
