import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "HousePet — Proteção, Adoção e Localização de Animais",
    template: "%s | HousePet",
  },
  description:
    "Plataforma que reúne denúncias de maus-tratos, adoção responsável e localização de animais desaparecidos em um único ambiente organizado e seguro.",
  keywords: [
    "adoção de animais",
    "animais desaparecidos",
    "maus-tratos animais",
    "pets",
    "proteção animal",
    "HousePet",
  ],
  metadataBase: new URL("https://housepet.vercel.app"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "HousePet",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-dvh flex flex-col">{children}</body>
    </html>
  );
}
