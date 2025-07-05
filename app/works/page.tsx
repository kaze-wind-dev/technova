import { Metadata } from "next";
import { getWorksList, getCategoryList } from "@/libs/microcms";

import { WORKS_LIST_LIMIT } from "@/constants";

import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Inner from "@/components/Inner";
import Section from "@/components/Section";
import CtaSection from "@/components/CtaSection";
import WorksList from "@/components/WorksList";
import Pagination from "@/components/Pagination";
import CategoryFilter from "@/components/CategoryFilter";
import LinkButton from "@/components/LinkButton";
import { FORM_URL } from "@/constants";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "事例紹介",
  description:"TechNova株式会社の事例紹介ページです。"
};

export default async function WorksListPage() {
  const { contents: works, totalCount } = await getWorksList({
    limit: WORKS_LIST_LIMIT,
  });
  const { contents: categories } = await getCategoryList({
    filters: `contents[contains]works`, //APIの数が足らないためselectの値で分離・抽出
  });
  return (
    <main>
      <Hero
        pageTitle="事例紹介"
        pageDesc={`私たちがこれまでに手がけたプロジェクトの一部をご紹介します。`}
      />
      <Breadcrumbs name="事例紹介" slug="works" />
      <Section>
        <Inner>
          <SectionTitle
            mainTitle="事例紹介"
            subTitle="Works"
            horizontal="center"
          />
          <CategoryFilter categories={categories} basePath="works" />
          <WorksList works={works} />
          <Pagination
            totalCount={totalCount}
            perpage={WORKS_LIST_LIMIT}
            basePath="works"
          />
        </Inner>
      </Section>
      <CtaSection
        title={`「このようなサイトを作ってほしい」\n「自社にも導入したい」と思ったら、\nぜひお気軽にお問い合わせください。`}
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
