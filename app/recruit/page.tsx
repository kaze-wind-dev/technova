import Image from "next/image";
// import { companyData } from "@/libs/utiles";

import Hero from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import Inner from "@/components/Inner";
import Section from "@/components/Section";

import CultureCard from "@/components/CultureCard";

export default function RecruitPage() {
  return (
    <main>
      <Hero
        pageTitle="採用情報"
        pageDesc="「テクノロジーで課題を解決する」その力を、私たちと一緒に。"
      />
      <Breadcrumbs name="採用情報" path="/recruit/" />
      <Section>
        <Inner>
          <div className="flex flex-wrap gap-y-8 items-center justify-center lg:items-start lg:justify-between ">
            <div className="md:w-full lg:w-[45%]">
              <SectionTitle
                mainTitle="TecgBivaで働く魅力"
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
          <div>
            <article className="flex items-center justify-center flex-wrap md:justify-between gap-y-8 lg:flex-row-reverse mb-12 lg:mb-16">
              <div className="w-full md:w-1/2">
                <div className="mb-3 md:mb-6 lg:mb-8 pl-5 lg:pl-6 relative before:content-[''] before:w-[6px] lg:before:w-[8px] before:h-full before:rounded-full before:absolute before:top-0 before:left-0 before:bg-primary">
                  <h3 className="font-bold text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] leading-normal tracking-widest">
                    フロントエンドエンジニア
                  </h3>
                </div>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-solid border-gray">
                      <th className="font-bold leading-loose tracking-wider w-[100px] text-left py-[1.25em] ">
                        業務内容
                      </th>
                      <td className="font-bold leading-loose tracking-wider text-left pl-[1.25em] py-[1.25em]">
                        Next.js・TypeScriptを用いたWebアプリケーションの開発
                        <br />
                        UIコンポーネント設計、CMS連携、パフォーマンス最適化など
                      </td>
                    </tr>
                    <tr className="border-b border-solid border-gray">
                      <th className="font-bold leading-loose tracking-wider w-[100px] text-left py-[1.25em] ">
                        歓迎スキル
                      </th>
                      <td className="font-bold leading-loose tracking-wider text-left pl-[1.25em] py-[1.25em]">
                        React／Tailwind CSS／microCMS経験
                        <br />
                        UI/UXへの関心と提案力
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <figure className="w-full md:w-[45%] aspect-[8/5] bg-theme">
                {/* <Image
                 src=""
            alt=""
            width={} 
            height={}
                /> */}
              </figure>
            </article>
            <article className="flex items-center justify-center flex-wrap md:justify-between gap-y-8 mb-12 lg:mb-16">
              <div className="w-full md:w-1/2">
                <div className="mb-3 md:mb-6 lg:mb-8 pl-5 lg:pl-6 relative before:content-[''] before:w-[6px] lg:before:w-[8px] before:h-full before:rounded-full before:absolute before:top-0 before:left-0 before:bg-primary">
                  <h3 className="font-bold text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] leading-normal tracking-widest">
                    バックエンドエンジニア
                  </h3>
                </div>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-solid border-gray">
                      <th className="font-bold leading-loose tracking-wider w-[100px] text-left py-[1.25em] ">
                        業務内容
                      </th>
                      <td className="font-bold leading-loose tracking-wider text-left pl-[1.25em] py-[1.25em]">
                        Node.js／Laravelなどを用いたAPI・サーバーサイド設計
                        <br />
                        データベース設計、インフラ連携（AWS, Firebase）
                      </td>
                    </tr>
                    <tr className="border-b border-solid border-gray">
                      <th className="font-bold leading-loose tracking-wider w-[100px] text-left py-[1.25em] ">
                        歓迎スキル
                      </th>
                      <td className="font-bold leading-loose tracking-wider text-left pl-[1.25em] py-[1.25em]">
                        REST API設計経験／MySQL or Firestore経験
                        <br />
                        セキュリティやパフォーマンスに関する知見
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <figure className="w-full md:w-[45%] aspect-[8/5] bg-theme">
                {/* <Image
                 src=""
            alt=""
            width={} 
            height={}
                /> */}
              </figure>
            </article>
            <article className="flex items-center justify-center flex-wrap gap-y-8 lg:flex-row-reverse md:justify-between mb-12 lg:mb-16">
              <div className="w-full md:w-1/2">
                <div className="mb-3 md:mb-6 lg:mb-8 pl-5 lg:pl-6 relative before:content-[''] before:w-[6px] lg:before:w-[8px] before:h-full before:rounded-full before:absolute before:top-0 before:left-0 before:bg-primary">
                  <h3 className="font-bold text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] leading-normal tracking-widest">
                    UI/UXデザイナー
                  </h3>
                </div>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-solid border-gray">
                      <th className="font-bold leading-loose tracking-wider w-[100px] text-left py-[1.25em] ">
                        業務内容
                      </th>
                      <td className="font-bold leading-loose tracking-wider text-left pl-[1.25em] py-[1.25em]">
                        Figmaを使用したWeb UI設計・プロトタイピング
                        <br />
                        エンジニアと連携した開発プロセス設計
                      </td>
                    </tr>
                    <tr className="border-b border-solid border-gray">
                      <th className="font-bold leading-loose tracking-wider w-[100px] text-left py-[1.25em] ">
                        歓迎スキル
                      </th>
                      <td className="font-bold leading-loose tracking-wider text-left pl-[1.25em] py-[1.25em]">
                        ユーザーリサーチ／アクセシビリティ設計
                        <br />
                        Atomic Designの理解
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <figure className="w-full md:w-[45%] aspect-[8/5] bg-theme">
                {/* <Image
                 src=""
            alt=""
            width={} 
            height={}
                /> */}
              </figure>
            </article>
            <article className="flex items-center justify-center flex-wrap md:justify-between gap-y-8 ">
              <div className="w-full md:w-1/2">
                <div className="mb-3 md:mb-6 lg:mb-8 pl-5 lg:pl-6 relative before:content-[''] before:w-[6px] lg:before:w-[8px] before:h-full before:rounded-full before:absolute before:top-0 before:left-0 before:bg-primary">
                  <h3 className="font-bold text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] leading-normal tracking-widest">
                    プロジェクトマネージャー（PM）
                  </h3>
                </div>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-solid border-gray">
                      <th className="font-bold leading-loose tracking-wider w-[100px] text-left py-[1.25em] ">
                        業務内容
                      </th>
                      <td className="font-bold leading-loose tracking-wider text-left pl-[1.25em] py-[1.25em]">
                        プロジェクトの要件定義〜進行管理
                        <br />
                        顧客対応、タスク管理、品質・進行のコントロール
                      </td>
                    </tr>
                    <tr className="border-b border-solid border-gray">
                      <th className="font-bold leading-loose tracking-wider w-[100px] text-left py-[1.25em] ">
                        歓迎スキル
                      </th>
                      <td className="font-bold leading-loose tracking-wider text-left pl-[1.25em] py-[1.25em]">
                        Web開発の基礎知識／チーム開発経験
                        <br />
                        Notion、Slack、GitHub などの業務ツール活用力
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <figure className="w-full md:w-[45%] aspect-[8/5] bg-theme">
                {/* <Image
                 src=""
            alt=""
            width={} 
            height={}
                /> */}
              </figure>
            </article>
          </div>
        </Inner>
      </Section>
    </main>
  );
}
