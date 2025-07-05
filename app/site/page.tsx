import Link from "next/link";
import { Metadata } from "next";
import { FORM_URL } from "@/constants";
import Hero from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Inner from "@/components/Inner";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import CtaSection from "@/components/CtaSection";
import LinkButton from "@/components/LinkButton";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "サイトマップ",
  description:"TechNova株式会社のサイトマップページです。"

};

export default function SitePage() {
  return (
    <main>
      <Hero pageTitle="サイトマップ" pageDesc="" />
      <Breadcrumbs name="サイトマップ" slug="site" />
      <Section>
        <SectionTitle
            mainTitle="サイトマップコンテンツ"
            subTitle="Site Map"
            horizontal="center"
          />
        <Inner>
          <nav className="w-full mx-auto max-w-[960px]">
            <ul className="text-base">
              <li className=" border-b border-gray hover:border-primary hover:text-primary transition w-full">
                <Link
                  className="py-[1.25em] font-bold text-[1.125rem] sm:text-[1.25rem] md:text-[1.25rem] flex justify-between"
                  href="/"
                >
                  トップページ
                  <span className="font-sub text-[0.75em] md:hidden">Top</span>
                </Link>
              </li>
              <li className=" border-b border-gray hover:border-primary hover:text-primary transition w-full">
                <Link
                  className="py-[1.25em] font-bold text-[1.125rem] sm:text-[1.25rem] md:text-[1.25rem] flex justify-between"
                  href="/services"
                >
                  事業内容
                  <span className="font-sub text-[0.75em] md:hidden">
                    Business
                  </span>
                </Link>
              </li>
              <li className=" border-b border-gray hover:border-primary hover:text-primary transition w-full">
                <Link
                  className="py-[1.25em] font-bold text-[1.125rem] sm:text-[1.25rem] md:text-[1.25rem] flex justify-between"
                  href="/works"
                >
                  事例紹介
                  <span className="font-sub text-[0.75em] md:hidden">
                    Works
                  </span>
                </Link>
              </li>
              <li className=" border-b border-gray hover:border-primary hover:text-primary transition w-full">
                <Link
                  className="py-[1.25em] font-bold text-[1.125rem] sm:text-[1.25rem] md:text-[1.25rem] flex justify-between"
                  href="/company"
                >
                  会社概要
                  <span className="font-sub text-[0.75em] md:hidden">
                    Company
                  </span>
                </Link>
              </li>
              <li className=" border-b border-gray hover:border-primary hover:text-primary transition w-full">
                <Link
                  className="py-[1.25em] font-bold text-[1.125rem] sm:text-[1.25rem] md:text-[1.25rem] flex justify-between"
                  href="/recruit"
                >
                  採用情報
                  <span className="font-sub text-[0.75em] md:hidden">
                    Recruit
                  </span>
                </Link>
              </li>
              <li className=" border-b border-gray hover:border-primary hover:text-primary transition w-full">
                <Link
                  className="py-[1.25em] font-bold text-[1.125rem] sm:text-[1.25rem] md:text-[1.25rem] flex justify-between"
                  href="/site"
                >
                  サイトマップ
                  <span className="font-sub text-[0.75em] md:hidden">
                    Recruit
                  </span>
                </Link>
              </li>
              <li className=" border-b border-gray hover:border-primary hover:text-primary transition w-full">
                <Link
                  className="py-[1.25em] font-bold text-[1.125rem] sm:text-[1.25rem] md:text-[1.25rem] flex justify-between"
                  href="/privacy"
                >
                  プライバシーポリシー
                  <span className="font-sub text-[0.75em] md:hidden">
                    Recruit
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </Inner>
      </Section>

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
