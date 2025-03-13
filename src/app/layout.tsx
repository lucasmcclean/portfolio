import type { Metadata } from "next";
import { Roboto, Exo_2 } from "next/font/google";
import "./globals.css";

const robotoSans = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-sans",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-exo2",
})

export const metadata: Metadata = {
  title: "Lucas McClean",
  description: "Add a description here.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" dir="ltr" className={`${robotoSans.variable} ${exo2.variable}`} >

      <body>{children}</body>

    </html >
  );
}
