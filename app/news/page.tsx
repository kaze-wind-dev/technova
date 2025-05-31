// import Image from "next/image";
import { getNewsList } from "@/libs/microcms";

import { NEWS_LIST_LIMIT } from "@/constants";

import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Inner from "@/components/Inner";
import Section from "@/components/Section";
import NewsList from "@/components/NewsList";
import Pagination from "@/components/Pagination";


export default async function NewsListPage() {
  const {contents:news, totalCount} = await getNewsList({
    limit:  NEWS_LIST_LIMIT,
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
          <NewsList news={news}/>
          <Pagination totalCount={totalCount} prepage={NEWS_LIST_LIMIT} basePath="news"/>
        </Inner>
      </Section>
    </main>
  );
}
