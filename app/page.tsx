import Image from "next/image";
import Link from "next/link";
import { getNewsList, getWorksList } from "@/libs/microcms";
import { servicesData } from "@/libs/utiles";
import { FORM_URL, RECRUIT_URL } from "@/constants";

import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import LinkButton from "@/components/LinkButton";
import Inner from "@/components/Inner";
import Section from "@/components/Section";
import ServiceList from "@/components/ServiceList/page";
import NewsList from "@/components/NewsList";
import TopWorksList from "@/components/TopWorksList";

export default async function Home() {
  const { contents: news } = await getNewsList({
    limit: 5,
  });
  const { contents: works } = await getWorksList({
    limit: 3,
  });
  return (
    <main>
      <Hero
        pageTitle="Boost Your Future."
        pageDesc={`未来を見据えたWeb戦略と開発力で、\nあなたのビジネスを加速させます。`}
        pageRoot={true}
        image={{
          src: "/mainVisual-img.jpg",
          alt: "ファーストビュー",
          width: 1512,
          height: 694,
        }}
      />
      <Section>
        <Inner>
          <SectionTitle
            mainTitle="事業内容"
            subTitle="Service"
            horizontal="center"
          />
          <ServiceList services={servicesData} />
        </Inner>
        <LinkButton
          href="/services"
          addClass="bg-primary text-white font-bold hover:bg-primary-hover btn-arrow-white mx-auto mt-8 md:mt-10 lg:mt-12"
        >
          <span>もっと見る</span>
        </LinkButton>
      </Section>
      <Section addClass="bg-gray">
        <Inner>
          <SectionTitle
            mainTitle="事例紹介"
            subTitle="Works"
            horizontal="center"
          />
          <TopWorksList works={works} />
        </Inner>
        <LinkButton
          href="/services"
          addClass="bg-primary text-white font-bold hover:bg-primary-hover btn-arrow-white mx-auto mt-8 md:mt-10 lg:mt-12"
        >
          <span>もっと見る</span>
        </LinkButton>
      </Section>
      <Section>
        <Inner>
          <SectionTitle
            mainTitle="お知らせ"
            subTitle="News"
            horizontal="center"
          />
          <NewsList news={news} />
        </Inner>
        <LinkButton
          href="/news"
          addClass="bg-primary text-white font-bold hover:bg-primary-hover btn-arrow-white mx-auto mt-8 md:mt-10 lg:mt-12"
        >
          <span>もっと見る</span>
        </LinkButton>
      </Section>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Link
          href={FORM_URL}
          className="py-16 md:py-20 lg:py-24 flex items-center justify-center flex-col text-center overflow-hidden relative transition hover:opacity-70 lg:h-[500px]"
          target="_blank"
        >
          <h2 className="font-sub text-white tracking-normal leading-tight text-[3rem] md:text-[4rem] lg:text-[6rem] mb-6 md:mb-7 lg:mb-8">
            Contact us
          </h2>
          <p className="font-bold text-white tracking-wider leading-loose text-[1rem] md:text-[1.25rem] lg:text-[1.5rem]">
            「業務内容について詳しく相談したい」
            <br />
            「見積もりを取りたい」など、
            <br />
            お気軽にお問い合わせください
          </p>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
            <Image
              src="/link_form.jpg"
              width={756}
              height={500}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        </Link>
        <Link
          href={RECRUIT_URL}
          className="py-16 md:py-20 lg:py-24 flex items-center justify-center flex-col text-center overflow-hidden relative transition hover:opacity-70 lg:h-[500px] "
          target="_blank"
        >
          <h2 className="font-sub text-white tracking-normal leading-tight text-[3rem] md:text-[4rem] lg:text-[6rem] mb-6 md:mb-7 lg:mb-8">
            Rectuit
          </h2>
          <p className="font-bold text-white tracking-wider leading-loose text-[1rem] md:text-[1.25rem] lg:text-[1.5rem]">
            TechNovaの採用情報は
            <br />
            こちらからご確認・ご応募ください
          </p>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
            <Image
              src="/link_recruit.jpg"
              width={756}
              height={500}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        </Link>
      </div>
    </main>
  );
}
