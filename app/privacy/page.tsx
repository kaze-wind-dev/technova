import { Metadata } from "next";
import Hero from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Inner from "@/components/Inner";
import Section from "@/components/Section";

export const revalidate = 604800;

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "TechNova株式会社のプライバシーポリシーページです",
};

export default function RecruitPage() {
  return (
    <main>
      <Hero
        pageTitle="プライバシーポリシー"
        pageDesc="このサイトは架空のサイトであり、本サイトに記載されている「TechNova株式会社」は存在しません"
      />
      <Breadcrumbs name="プライバシーポリシー" slug="privacy" />
      <Section>
        <Inner>
          <p className="my-4 leading-loose tracing-wider">
            TechNova株式会社（以下、「当社」といいます）は、お客様の個人情報の保護を最重要と考え、以下の方針に基づき個人情報の適切な管理と運用を行います。
          </p>

          <section className="my-16">
            <h3 className="font-bold text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] leading-normal tracking-widest mb-3 md:mb-6 lg:mb-8 pl-5 lg:pl-6 relative before:content-[''] before:w-[6px] lg:before:w-[8px] before:h-full before:rounded-full before:absolute before:top-0 before:left-0 before:bg-primary">
              1. 法令等の遵守
            </h3>
            <p className="my-4 leading-loose tracing-wider">
              当社は、個人情報の保護に関する法律その他関連法令およびガイドラインを遵守し、個人情報を適切に取り扱います。
            </p>
          </section>
          <hr className="border-gray my-16" />

          <section className="my-16">
            <h3 className="font-bold text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] leading-normal tracking-widest mb-3 md:mb-6 lg:mb-8 pl-5 lg:pl-6 relative before:content-[''] before:w-[6px] lg:before:w-[8px] before:h-full before:rounded-full before:absolute before:top-0 before:left-0 before:bg-primary">
              2. 個人情報の取得
            </h3>
            <p className="my-4 leading-loose tracing-wider">
              当社は、お問い合わせフォーム、サービス申込、採用応募等を通じて、以下のような個人情報を取得することがあります。
            </p>
            <ul>
              <li className="my-2">
                <span className="inline-block w-2 h-1 bg-black rounded-full mr-4"></span>
                氏名、会社名、部署名、役職
              </li>
              <li className="my-2">
                <span className="inline-block w-2 h-1 bg-black rounded-full mr-4"></span>
                メールアドレス、電話番号、住所
              </li>
              <li className="my-2">
                <span className="inline-block w-2 h-1 bg-black rounded-full mr-4"></span>
                サービス内容に関するご相談内容や履歴
              </li>
              <li className="my-2">
                <span className="inline-block w-2 h-1 bg-black rounded-full mr-4"></span>
                その他、業務遂行に必要な情報
              </li>
            </ul>
          </section>
          <hr className="border-gray my-16" />

          <section className="my-16">
            <h3 className="font-bold text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] leading-normal tracking-widest mb-3 md:mb-6 lg:mb-8 pl-5 lg:pl-6 relative before:content-[''] before:w-[6px] lg:before:w-[8px] before:h-full before:rounded-full before:absolute before:top-0 before:left-0 before:bg-primary">
              3. 利用目的
            </h3>
            <p className="my-4 leading-loose tracing-wider">
              当社は、取得した個人情報を以下の目的で利用します。
            </p>
            <ul>
              <li className="my-2">
                <span className="inline-block w-2 h-1 bg-black rounded-full mr-4"></span>
                お問い合わせへの対応、資料送付
              </li>
              <li className="my-2">
                <span className="inline-block w-2 h-1 bg-black rounded-full mr-4"></span>
                サービスの提供、契約の履行
              </li>
              <li className="my-2">
                <span className="inline-block w-2 h-1 bg-black rounded-full mr-4"></span>
                メンテナンスや重要なお知らせ等の連絡
              </li>
              <li className="my-2">
                <span className="inline-block w-2 h-1 bg-black rounded-full mr-4"></span>
                採用に関する選考および連絡
              </li>
              <li className="my-2">
                <span className="inline-block w-2 h-1 bg-black rounded-full mr-4"></span>
                その他、事前に明示した目的のため
              </li>
            </ul>
          </section>
          <hr className="border-gray my-16" />

          <section className="my-16">
            <h3 className="font-bold text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] leading-normal tracking-widest mb-3 md:mb-6 lg:mb-8 pl-5 lg:pl-6 relative before:content-[''] before:w-[6px] lg:before:w-[8px] before:h-full before:rounded-full before:absolute before:top-0 before:left-0 before:bg-primary">
              4. 個人情報の第三者提供
            </h3>
            <p className="my-4 leading-loose tracing-wider">
              当社は、以下の場合を除き、取得した個人情報を第三者に提供することはありません。
            </p>
            <ul>
              <li className="my-2">
                <span className="inline-block w-2 h-1 bg-black rounded-full mr-4"></span>
                本人の同意がある場合
              </li>
              <li className="my-2">
                <span className="inline-block w-2 h-1 bg-black rounded-full mr-4"></span>
                法令に基づき開示が求められる場合
              </li>
              <li className="my-2">
                <span className="inline-block w-2 h-1 bg-black rounded-full mr-4"></span>
                外部委託先（業務委託先）に業務の一部を委託する場合（委託先は適切に管理・監督します）
              </li>
            </ul>
          </section>
          <hr className="border-gray my-16" />

          <section className="my-16">
            <h3 className="font-bold text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] leading-normal tracking-widest mb-3 md:mb-6 lg:mb-8 pl-5 lg:pl-6 relative before:content-[''] before:w-[6px] lg:before:w-[8px] before:h-full before:rounded-full before:absolute before:top-0 before:left-0 before:bg-primary">
              5. 安全管理措置
            </h3>
            <p className="my-4 leading-loose tracing-wider">
              当社は、個人情報の漏えい、滅失、き損等を防止するため、適切な安全管理措置を講じます。
              また、個人情報を取り扱う従業者に対しても、必要かつ適切な監督を行います。
            </p>
          </section>
          <hr className="border-gray my-16" />

          <section className="my-16">
            <h3 className="font-bold text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] leading-normal tracking-widest mb-3 md:mb-6 lg:mb-8 pl-5 lg:pl-6 relative before:content-[''] before:w-[6px] lg:before:w-[8px] before:h-full before:rounded-full before:absolute before:top-0 before:left-0 before:bg-primary">
              6. 開示・訂正・削除等の請求
            </h3>
            <p className="my-4 leading-loose tracing-wider">
              ご本人またはその代理人から、個人情報の開示、訂正、追加、削除、利用停止等を希望される場合は、当社所定の方法により速やかに対応いたします。
            </p>
          </section>
          <hr className="border-gray my-16" />

          <section className="my-16">
            <h3 className="font-bold text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] leading-normal tracking-widest mb-3 md:mb-6 lg:mb-8 pl-5 lg:pl-6 relative before:content-[''] before:w-[6px] lg:before:w-[8px] before:h-full before:rounded-full before:absolute before:top-0 before:left-0 before:bg-primary">
              7. クッキー（Cookie）等の利用について
            </h3>
            <p className="my-4 leading-loose tracing-wider">
              当社Webサイトでは、利用状況の把握やサービス改善のため、クッキー（Cookie）等の技術を利用することがあります。
              ユーザーはブラウザの設定によりクッキーの使用を制限または無効にすることができます。
            </p>
          </section>
          <hr className="border-gray my-16" />

          <section className="my-16">
            <h3 className="font-bold text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] leading-normal tracking-widest mb-3 md:mb-6 lg:mb-8 pl-5 lg:pl-6 relative before:content-[''] before:w-[6px] lg:before:w-[8px] before:h-full before:rounded-full before:absolute before:top-0 before:left-0 before:bg-primary">
              8. プライバシーポリシーの変更
            </h3>
            <p className="my-4 leading-loose tracing-wider">
              本ポリシーの内容は、法令の改正や当社サービス内容の変更に応じて、事前の予告なく改定することがあります。
              変更後の内容は当社Webサイト上に掲載した時点から適用されます。
            </p>
          </section>
          <hr className="border-gray my-16" />

          <section className="my-16">
            <h3 className="font-bold text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] leading-normal tracking-widest mb-3 md:mb-6 lg:mb-8 pl-5 lg:pl-6 relative before:content-[''] before:w-[6px] lg:before:w-[8px] before:h-full before:rounded-full before:absolute before:top-0 before:left-0 before:bg-primary">
              9. お問い合わせ窓口
            </h3>
            <p className="my-4 leading-loose tracing-wider">
              個人情報に関するお問い合わせ、ご相談は以下までご連絡ください。
            </p>
            <address className="not-italic">
              <p className="my-2">
                <span className="inline-block w-2 h-1 bg-black rounded-full mr-4"></span>
                TechNova株式会社
                <br />
              </p>
              <p className="my-2">
                <span className="inline-block w-2 h-1 bg-black rounded-full mr-4"></span>
                〒150-0013 東京都渋谷区恵比寿1-23-45 テックノヴァビル6F
                <br />
              </p>
              <p className="my-2">
                <span className="inline-block w-2 h-1 bg-black rounded-full mr-4"></span>
                TEL：<a href="tel:03-1234-5678">03-1234-5678</a>
                （平日10:00〜18:00）
              </p>
            </address>
          </section>
          <hr className="border-gray my-16" />

          <p className="text-right">制定日：2025年6月1日</p>
        </Inner>
      </Section>
    </main>
  );
}
