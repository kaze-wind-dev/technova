// import Image from "next/image";
import { getNewsList, getCategoryList } from "@/libs/microcms";

import { NEWS_LIST_LIMIT } from "@/constants";

import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Inner from "@/components/Inner";
import Section from "@/components/Section";
import NewsList from "@/components/NewsList";
import Pagination from "@/components/Pagination";

import CategoryFilter from "@/components/CategoryFilter";

type Props = {
  params: {
    id: string;
  };
};

export default async function NewsListPage({ params }: Props) {
  const id = params.id;
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${id}`,
  });
  const { contents: categories } = await getCategoryList({
    filters: `contents[contains]news`, //APIの数が足らないためselectで抽出
  });
  return (
    <main>
      <Hero
        pageTitle="お知らせ"
        pageDesc={`TechNovaからのお知らせや最新情報をご案内します。サービス情報、実績公開、採用に関する情報などはこちらからご確認ください。`}
      />
      <Section>
        <Inner>
          <SectionTitle
            mainTitle="お知らせ一覧"
            subTitle="News"
            horizontal="center"
          />
          <CategoryFilter
            categories={categories}
            basePath="news"
            currentId={id}
          />
          <NewsList news={news} />
          <Pagination
            totalCount={totalCount}
            perpage={NEWS_LIST_LIMIT}
            basePath={`news/category/${id}`}
          />
        </Inner>
      </Section>
    </main>
  );
}
