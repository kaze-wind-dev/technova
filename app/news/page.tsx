// import Image from "next/image";
import { Metadata } from "next";
import { getNewsList, getCategoryList } from "@/libs/microcms";
import { NEWS_LIST_LIMIT } from "@/constants";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Inner from "@/components/Inner";
import Section from "@/components/Section";
import NewsList from "@/components/NewsList";
import Pagination from "@/components/Pagination";
import CategoryFilter from "@/components/CategoryFilter";
import CtaSection from "@/components/CtaSection";
import LinkButton from "@/components/LinkButton";
import { FORM_URL } from "@/constants";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "お知らせ",
  description:"TechNovaからのお知らせや最新情報をご案内します。"

};

export default async function NewsListPage() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });
  const { contents: categories } = await getCategoryList({
    filters: `contents[contains]news`, //APIの数が足らないためselectの値で分離・抽出
  });
  return (
    <main>
      <Hero
        pageTitle="お知らせ"
        pageDesc={`TechNovaからのお知らせや最新情報をご案内します。`}
      />
      <Breadcrumbs name="お知らせ" slug="news" />
      <Section>
        <Inner>
          <SectionTitle
            mainTitle="お知らせ一覧"
            subTitle="News"
            horizontal="center"
          />
          <CategoryFilter categories={categories} basePath="news" />
          <NewsList news={news} />
          <Pagination
            totalCount={totalCount}
            perpage={NEWS_LIST_LIMIT}
            basePath="news"
          />
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
