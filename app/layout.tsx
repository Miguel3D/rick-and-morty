import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rick and Morty",
  description:
    "Explora la lista de personajes de la serie Rick and Morty. Filtra por nombre, estado, especie y género, y disfruta de la paginación para navegar por los personajes.",
  keywords: "Rick and Morty, personajes",
  authors: [
    { name: "Miguel Moreno", url: "https://rick-and-morty-m.vercel.app/" },
  ],
  creator: "Miguel Moreno",
  openGraph: {
    title: "Rick and Morty",
    description:
      "Explora la lista de personajes de la serie Rick and Morty. Filtra por nombre, estado, especie y género.",
    url: "https://rick-and-morty-m.vercel.app/",
    siteName: "Rick and Morty",
    images: [
      {
        url: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        width: 800,
        height: 600,
        alt: "Personaje de Rick and Morty",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
