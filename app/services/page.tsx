import Image from "next/image";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Inner from "@/components/Inner";
import Section from "@/components/Section";
import MoreBtn from "@/components/MoreBtn";
import CtaSection from "@/components/CtaSection";
import { servicesData } from "@/libs/utiles";
import type { Service } from "@/libs/utiles";
import LinkButton from "@/components/LinkButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FORM_URL } from "@/constants";

export const metadata: Metadata = {
  title: "事業内容",
  description:"TechNova株式会社の事業内容をご紹介いたします。"

};

type Props = {
  services: Service[];
};

const ServiceContents = ({ services }: Props) => {
  if (services.length == 0) {
    return <p className="text-center mx-auto">現在、投稿はございません。</p>;
  }
  return (
    <div className="flex flex-col flex-wrap gap-y-14 md:gap-y-16 lg:gap-y-18">
      {services.map((service, index) => (
        <article
          className="flex flex-col items-start gap-7 md:flex-row md:justify-between"
          key={service.id}
        >
          <figure className="bg-gray aspect-[8/5] w-full md:aspect-auto md:h-[375px] md:w-[45%]">
            <Image
              src={service.thumbnail?.url ?? "/no-img.jpg"}
              width={service.thumbnail?.width ?? 800}
              height={service.thumbnail?.height ?? 500}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="w-full md:w-1/2">
            <div className="mb-3 md:mb-6 lg:mb-8 pl-5 lg:pl-6 relative before:content-[''] before:w-[5px] before:h-full before:rounded-full before:absolute before:top-0 before:left-0 before:bg-primary">
              <span className="font-sub font-bold text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] mb-1">
                Service{" "}
                <span className="text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>
              <h3 className="font-bold text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] leading-normal tracking-widest">
                {service.title}
              </h3>
            </div>
            <div>
              <p className="leading-loose md:leading-[2.5]">
                {service.description}
              </p>
            </div>
            <div className="mt-6 md:mt-7 lg:mt-8 tracking-wider">
              <MoreBtn href={`/services/${service.id}`} />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default function ServicesPage() {
  return (
    <main>
      <Hero
        pageTitle="事業内容"
        pageDesc="TechNovaは、テクノロジーで課題を解決する4つのサービスを提供しています。"
      />
            <Breadcrumbs name="事業内容" slug="services"/>
    
      <Section>
        <Inner>
          <SectionTitle
            mainTitle="事業内容"
            subTitle="Service"
            horizontal="center"
          />
          <ServiceContents services={servicesData} />
        </Inner>
      </Section>
      <CtaSection
        title={`「業務内容について詳しく相談したい」\n「見積もりを取りたい」など、\nお気軽にお問い合わせください `}
        btn={
          <LinkButton
          href={FORM_URL}
          addClass="bg-primary text-white font-bold hover:bg-primary-hover btn-window-white mx-auto mt-8 mg:mt-9 lg:mt-10 text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem]"
          blank={true}
        >
          <span>お問い合わせはこちら</span>
        </LinkButton>
        }
      />
    </main>
  );
}
