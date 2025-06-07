// import Image from "next/image";
import { RECRUIT_URL } from "@/constants";
import { recruitData,processData } from "@/libs/utiles";
import Hero from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import Inner from "@/components/Inner";
import Section from "@/components/Section";
import CtaSection from "@/components/CtaSection";
import LinkButton from "@/components/LinkButton";
import CultureCard from "@/components/CultureCard";
import RecruitItems from "@/components/RecruitItems";
import ProcessList from "@/components/ProcessList";

export default function RecruitPage() {
  return (
    <main>
      <Hero
        pageTitle="採用情報"
        pageDesc="「テクノロジーで課題を解決する」その力を、私たちと一緒に。"
      />
      <Breadcrumbs name="採用情報" slug="recruit" />
      <Section>
        <Inner>
          <div className="flex flex-wrap gap-y-8 items-center justify-center lg:items-start lg:justify-between ">
            <div className="md:w-full lg:w-[45%]">
              <SectionTitle
                mainTitle="TechNovaで働く魅力"
                subTitle="Culture"
                horizontal="left"
              />
              <p className="leading-[2.5] tracking-wider">
                TechNovaでは、「働きやすさ」と「成長できる環境」を両立する文化を大切にしています。
                <br />
                技術的な挑戦を楽しめることはもちろん、
                <br />
                チームとの協力や自己裁量のある働き方も重視しています。
                <br />
                あなたらしく、そして長く働ける環境を用意しています。
              </p>
            </div>
            <figure className="bg-gray aspect-[8/5] w-full lg:w-1/2 "></figure>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6 mt-12 md:mt-14 lg:mt-16">
            <CultureCard
              // img={{ src: "" }}
              title={"フラットなチーム文化"}
              text={"職種や役職に関係なく意見を出し合える環境があります。"}
            />
            <CultureCard
              // img={{ src: "" }}
              title={"リモートワーク制度"}
              text={
                "全国どこからでも勤務可能。オンラインでのコミュニケーション体制も整っています。"
              }
            />
            <CultureCard
              // img={{ src: "" }}
              title={"フレックスタイム制"}
              text={"柔軟な勤務時間で、自分のペースに合わせて働けます。"}
            />
            <CultureCard
              // img={{ src: "" }}
              title={"自己学習支援"}
              text={
                "書籍購入補助・勉強会参加など、スキルアップを会社がバックアップします。"
              }
            />
          </ul>
        </Inner>
      </Section>
      <Section addClass="bg-gray">
        <Inner>
          <SectionTitle
            mainTitle="募集要項"
            subTitle="Position"
            horizontal="center"
          />
          <RecruitItems recruitInfo={recruitData} />
        </Inner>
      </Section>
      <Section>
        <Inner>
          <SectionTitle
            mainTitle="選考フロー"
            subTitle="Process"
            horizontal="center"
          />
          <p className="leading-[2.5] tracing-wider text-center">
            TechNovaでは、応募者の皆さまとフラットに対話し、スキルや価値観を丁寧に確認する選考を行っています。
          </p>
          <p className="leading-[2.5] tracing-wider text-center mb-8 lg:mb-10">
            以下のようなステップで進めていきますので、ご不明点があればお気軽にご相談ください。
          </p>
          <ProcessList process={processData}/>
        </Inner>
      </Section>
       <CtaSection
        title={`私たちの考えや事業に興味を持ってくださった方は、\nぜひお気軽にご応募ください。\nまずはカジュアルな面談からでも構いません。\nあなたのご経験や想いを、私たちに聞かせてください。`}
        btn={
          <LinkButton
          href={RECRUIT_URL}
          addClass="bg-primary text-white font-bold hover:bg-primary-hover btn-window-white mx-auto mt-8 mg:mt-9 lg:mt-10 text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem]"
          blank={true}
        >
          <span>ご応募はこちら</span>
        </LinkButton>
        }
      />
    </main>
  );
}
