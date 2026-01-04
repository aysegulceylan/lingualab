import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// DİKKAT: components klasörü app'in içinde olduğu için ./ kullanıyoruz
import Navbar from "./components/Navbar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LinguaLab",
  description: "Profesyonel Çeviri Platformu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}