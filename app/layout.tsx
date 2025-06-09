import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--tn-font-base",
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--tn-font-sub",
});

export const metadata: Metadata = {
  title: "TechNova株式会社｜テクノロジーで、次の一手を。",
  description:
    "TechNova株式会社は、Web制作・クラウド構築・システム開発を通じて、企業の課題を解決するITソリューション企業です。",
  robots: "noindex"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${zenKakuGothicNew.variable} ${outfit.variable} ` }
    >
      <body className="tracking-wider leading-normal font-medium font-base text-sm lg:text-base">
        <div className="overflow-hidden">
        <Header />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
