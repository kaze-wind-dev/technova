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
  metadataBase: new URL("https://technova-khaki.vercel.app"),
  title: {
    default: "テクノロジーで、次の一手を。",
    template: "%s | テクノロジーで、次の一手を。",
  },
  description:
    "TechNova株式会社は、Web制作・クラウド構築・システム開発を通じて、企業の課題を解決するITソリューション企業です。",
  keywords: [
    "TechNova株式会社",
    "テックノヴァ",
    "ITソリューション",
    "Web制作",
    "システム開発",
    "クラウドソリューション事業",
    "デジタルマーケティング支援",
  ],
  openGraph: {
    type: "website",
    siteName: "TechNova株式会社",
    images: [
      {
        url: "ogp.jpg",
        width: 1200,
        height: 630,
        alt: "TechNova株式会社 OGP画像",
      },
    ],
  },
  robots: "noindex", //公式サイトではないため、クローラー拒否
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${zenKakuGothicNew.variable} ${outfit.variable} `}
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
