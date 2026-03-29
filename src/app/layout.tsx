import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Néctar Colectivo | El Archivo Artesanal",
  description: "Boutique de miel ética y orgánica. Texturas físicas curadas en un espacio digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${notoSerif.variable} ${plusJakarta.variable}`}>
      <body className="antialiased selection:bg-accent-gold/30 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
