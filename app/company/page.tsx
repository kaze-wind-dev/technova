import { Metadata } from "next";
import { companyData } from "@/libs/utiles";
import Hero from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import Inner from "@/components/Inner";
import Section from "@/components/Section";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "会社概要",
  description:"ビジョンやミッション、会社概要についてご紹介します。"
};

export default function CompanyPage() {
  return (
    <main>
      <Hero
        pageTitle="会社概要"
        pageDesc="TechNovaは、テクノロジーの力で社会とビジネスの未来を創るITソリューション企業です。"
      />
      <Breadcrumbs name="会社概要" slug="company"/>
      <Section>
        <Inner>
          <SectionTitle
            mainTitle="ビジョン・ミッション"
            subTitle="Mission"
            horizontal="center"
          />
          <figure className="bg-gray aspect-[8/5] md:aspect-auto md:h-[420px] w-full">
            {/* <img className="" src="" alt="" /> */}
          </figure>
          <div className="flex flex-col lg:flex-row items-center gap-y-8 lg:items-start justify-start lg:justify-between mt-12 lg:mt-16 ">
            <dl className="w-full lg:w-[48%]">
              <div className="leading-normal mb-[2em]">
                <dt className="tracing-wider text-[16px] md:text-[18px] lg:text-[20px] font-bold text-primary mb-2 flex items-center">
                  <span className="inline-block w-[1em] h-[2px] bg-primary mr-[1em]"></span>
                  ミッション
                </dt>
                <dd className="tracking-wider text-[22px] md:text-[24px] lg:text-[28px] font-bold">
                  「テクノロジーで、次の一手を。」
                </dd>
              </div>
              <div className="leading-normal">
                <dt className="tracing-wider text-[16px] md:text-[18px] lg:text-[20px] font-bold text-primary mb-2 flex items-center">
                  <span className="inline-block w-[1em] h-[2px] bg-primary mr-[1em]"></span>
                  ビジョン
                </dt>
                <dd className="tracking-wider text-[22px] md:text-[24px] lg:text-[28px] font-bold">
                  「すべての企業の“技術パートナー”に」
                </dd>
              </div>
            </dl>
            <div className="leading-[2.5] tracking-wider font-medium w-full lg:w-[50%]">
              <p className="mb-[1.5em]">
                私たちTechNovaは「テクノロジーで、次の一手を。」をミッションに掲げ、
                <br />
                Web制作、クラウド構築、システム開発などを通じて、
                <br />
                企業や社会の課題を技術の力で解決しています。
              </p>
              <p className="mb-[1.5em]">
                変化の速い時代だからこそ、私たちは“柔軟さ”と“誠実さ”を大切にしながら、
                <br />
                クライアントと同じ視点で未来を描くパートナーでありたいと考えています。
              </p>
              <p className="mb-[1.5em]">
                私たちのビジョンは、
                <br />
                「すべての企業に、技術で寄り添える存在であること」。
              </p>
              <p>
                その実現のために、日々進化する技術と向き合い、
                <br />
                「つくる」を超えて「支える」存在として挑戦し続けます。
              </p>
            </div>
          </div>
        </Inner>
      </Section>
      <Section addClass="bg-theme">
        <Inner>
          <SectionTitle
            mainTitle="会社概要"
            subTitle="Company"
            horizontal="center"
          />
            <table className="w-full mx-auto max-w-[960px]">
              <tbody>
          {
                
            companyData.map((info)=>{
              return(
              <tr className="border-b border-solid border-gray" key={info.id}>
                <th className="font-bold leading-loose tracking-wider w-[120px] text-left py-[1.25em] ">
                  {info.name}
                </th>
                <td className="font-bold leading-loose tracking-wider text-left pl-[1.25em] py-[1.25em]">
                  {info.content}
                </td>
              </tr>
              )
            })} 
            </tbody>
          </table>
        </Inner>
      </Section>
      <div className="h-[56.25vw] min-h-[200px] lg:h-[400px]">
      <iframe className="w-full h-full object-cover" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15875.537652599105!2d139.7142617821329!3d35.64224896620565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b4046e3f71d%3A0x85ab1d92ef294edf!2z5oG15q-U5a-_6aeF!5e0!3m2!1sja!2sjp!4v1748961563843!5m2!1sja!2sjp" width="600" height="450" loading="lazy"></iframe>
      </div>
    </main>
  );

}
