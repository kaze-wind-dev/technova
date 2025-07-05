import { getNewsList, getCategoryList } from "@/libs/microcms";
import { NEWS_LIST_LIMIT } from "@/constants";
import SectionTitle from "@/components/SectionTitle";
import Inner from "@/components/Inner";
import Section from "@/components/Section";
import NewsList from "@/components/NewsList";
import Pagination from "@/components/Pagination";
import CategoryFilter from "@/components/CategoryFilter";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default async function NewsListPage() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });
  const { contents: categories } = await getCategoryList({
    filters: `contents[contains]news`, //APIの数が足らないためselectの値で分離・抽出
  });
  return (
    <>
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
    </>
  );
}
