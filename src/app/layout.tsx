import type { Metadata } from "next";
import { Space_Grotesk, Roboto_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Leon Tan - Technical Product Manager",
  description:
    "Portfolio of Leon Tan — Technical Product Manager and software engineer with a Master's in Computer Science from UIUC. Bridging engineering and business to build products that solve real problems.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${robotoMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
