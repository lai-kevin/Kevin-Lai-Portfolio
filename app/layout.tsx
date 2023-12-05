import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Dela_Gothic_One } from "next/font/google";

const inter = Dela_Gothic_One({ 
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Kevin Lai",
  description: "A Portfolio Website for Kevin Lai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
