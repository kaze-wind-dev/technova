import { notFound } from "next/navigation";
import { getNewsList, getCategoryList } from "@/libs/microcms";

import { NEWS_LIST_LIMIT } from "@/constants";

import SectionTitle from "@/components/SectionTitle";
import Inner from "@/components/Inner";
import Section from "@/components/Section";
import NewsList from "@/components/NewsList";
import Pagination from "@/components/Pagination";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import CategoryFilter from "@/components/CategoryFilter";

type Props = {
  params: {
    id: string;
    current: string;
  };
};

export default async function NewsPageId({ params }: Props) {
  const current = parseInt(params.current as string, 10);
  const id = params.id;

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
    filters: `category[equals]${id}`,
  });
  const { contents: categories } = await getCategoryList({
    filters: `contents[contains]news`, //APIの数が足らないためselectで抽出
  });
  const currentCategory = categories.find(
    (category) => category.id === params.id
  );
  return (
    <>
      <Breadcrumbs name="お知らせ" slug="news" category={currentCategory} />

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
            current={current}
          />
        </Inner>
      </Section>
    </>
  );
}
