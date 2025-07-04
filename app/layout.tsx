import type { Metadata } from "next";
import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";

const Outfit = OutfitFont({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const Ovo = OvoFont({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Portfolio - DigitalNavyGuy",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${Ovo.className} ${Outfit.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
