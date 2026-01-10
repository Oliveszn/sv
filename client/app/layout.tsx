import type { Metadata } from "next";
import { Inter, Anton, Bebas_Neue, Playfair_Display } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/Common/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seyi Vibes",
  description: "Fan website of Seyi Vibes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} ${bebas.variable} ${playfair.variable} antialiased`}
    >
      <body
        className="flex flex-col min-h-screen"
        suppressHydrationWarning={true}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
