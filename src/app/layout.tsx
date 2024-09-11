import type { Metadata } from "next";
import { Inter, Lora, Raleway } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-raleway",
});

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
      <body
        className={`${inter.className} ${lora.variable} ${raleway.variable} bg-background `}
      >
        <NavBar />
        <div className="fixed h-full lg:w-28 ml-1 lg:border-r-2 border-text"></div>
        <div className="fixed right-0 h-full lg:w-28 mr-1 lg:border-l-2 border-text"></div>

        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
