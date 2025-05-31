// import Image from "next/image";
import { getNewsList } from "@/libs/microcms";

import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import LinkButton from "@/components/LinkButton";

import Inner from "@/components/Inner";
import Section from "@/components/Section";
import NewsList from "@/components/NewsList";

export default async function Home() {
  const {contents:news} = await getNewsList({
      limit: 5,
    });
  return (
    <main>
      <Hero 
    pageTitle="未来を見据えたWeb戦略と開発力で、あなたのビジネスを加速させます。"
    pageDesc="Boost Your Future."
  pageRoot={true}
    image={{
      src: '/mainVisual-img.jpg',
      alt: "ファーストビュー", 
      width: 1512, 
      height: 694, 
    }
  }
      />
    <Section>
        <Inner>
          <SectionTitle
            mainTitle="お知らせ"
            subTitle="News"
            horizontal="center"
          />
          <NewsList news={news}/>

        </Inner>
      <LinkButton href="/news" addClass="bg-primary text-white font-bold hover:bg-primary-hover btn-arrow-white mx-auto mt-8 mg:10 lg:mt-12"><span>もっと見る</span></LinkButton>
      </Section>

    </main>
  );
}
