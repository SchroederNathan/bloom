import type { Metadata } from "next";
import { Inter, Lora, Raleway } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lora" });
const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-raleway" });

export const metadata: Metadata = {
  title: "Bloom",
  description: "Bloom is a design inspiration tool for creatives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className} ${lora.variable} ${raleway.variable} bg-background `}>{children}</body>
    </html>
  );
}
