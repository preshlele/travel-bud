import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Components/Footer";
import Card from "./Components/Card";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "travel-budz",
  description: "Your imagination is your only limit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative overflow-hidden">{children}</main>
        {/* <Card /> */}
        <Footer />
      </body>
    </html>
  );
}
