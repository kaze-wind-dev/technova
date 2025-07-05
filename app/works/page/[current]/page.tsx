import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWorksList, getCategoryList } from "@/libs/microcms";
import { WORKS_LIST_LIMIT } from "@/constants";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Inner from "@/components/Inner";
import Section from "@/components/Section";
import WorksList from "@/components/WorksList";
import Pagination from "@/components/Pagination";
import CategoryFilter from "@/components/CategoryFilter";
import { FORM_URL } from "@/constants";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import LinkButton from "@/components/LinkButton";

type Props = {
  params: {
    current: string;
  };
};
export const metadata: Metadata = {
  title: "事例紹介",
  description:"TechNova株式会社の事例紹介ページです。"
};
export default async function WorksPageId({ params }: Props) {
  console.log(params);
  const current = parseInt(params.current as string, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: works, totalCount } = await getWorksList({
    limit: WORKS_LIST_LIMIT,
    offset: WORKS_LIST_LIMIT * (current - 1),
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
            current={current}
          />
        </Inner>
      </Section>
    </main>
  );
}
