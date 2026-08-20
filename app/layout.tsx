import type { Metadata } from "next";
import { Archivo, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "./providers";

const display = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["wdth"],
});

const body = Newsreader({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akcel Graça — Computer engineering, Coimbra",
  description:
    "Full-stack developer and computer engineering student at the University of Coimbra. Cross-platform apps for iOS and Android, REST APIs, PostgreSQL and React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
