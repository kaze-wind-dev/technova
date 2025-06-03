import { getWorksList, getCategoryList } from "@/libs/microcms";

import { WORKS_LIST_LIMIT } from "@/constants";

import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Inner from "@/components/Inner";
import Section from "@/components/Section";
import CtaSection from "@/components/CtaSection";
import WorksList from "@/components/WorksList";
import Pagination from "@/components/Pagination";
import CategoryFilter from "@/components/CategoryFilter/page";

type Props = {
  params: {
    id: string;
    current: string;
  };
};

export default async function WorksListPage({ params }: Props) {
  const current = parseInt(params.current as string, 10);
  const id = params.id;

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: works, totalCount } = await getWorksList({
    limit: WORKS_LIST_LIMIT,
    filters: `category[equals]${id}`,
  });
  const { contents: categories } = await getCategoryList({
    filters: `contents[contains]works`, //APIの数が足らないためselectで抽出
  });
  return (
    <main>
      <Hero
        pageTitle="事例紹介"
        pageDesc={`私たちがこれまでに手がけたプロジェクトの一部をご紹介します。`}
      />
      <Section>
        <Inner>
          <SectionTitle
            mainTitle="事例紹介"
            subTitle="Works"
            horizontal="center"
          />
          <CategoryFilter
            categories={categories}
            basePath="works"
            currentId={id}
          />
          <WorksList works={works} />
          <Pagination
            totalCount={totalCount}
            prepage={WORKS_LIST_LIMIT}
            basePath={`works/category/${id}`}
          />
        </Inner>
      </Section>
      <CtaSection
        title={`「このようなサイトを作ってほしい」\n「自社にも導入したい」と思ったら、\nぜひお気軽にお問い合わせください。`}
        btnText="お問い合わせはこちらから"
      />
    </main>
  );
}
