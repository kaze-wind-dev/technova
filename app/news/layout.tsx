import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CtaSection from "@/components/CtaSection";
import LinkButton from "@/components/LinkButton";
import { FORM_URL } from "@/constants";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "お知らせ",
  description: "TechNovaからのお知らせや最新情報をご案内します。",
};

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Hero
        pageTitle="お知らせ"
        pageDesc={`TechNovaからのお知らせや最新情報をご案内します。サービス情報、実績公開、採用に関する情報などはこちらからご確認ください。`}
      />
      {children}
      <CtaSection
        title={`「自社にも導入してみたい」「詳しく話を聞いてみたい」\nと感じた方は、ぜひお気軽にご相談ください。\nご要望に応じて、最適なご提案をさせていただきます。`}
        btn={
          <LinkButton
            href={FORM_URL}
            addClass="bg-primary text-white font-bold hover:bg-primary-hover btn-window-white mx-auto mt-8 mg:mt-9 lg:mt-10 text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem]"
            blank={true}
          >
            <span>お問い合わせはこちら</span>
          </LinkButton>
        }
      />
    </main>
  );
}
