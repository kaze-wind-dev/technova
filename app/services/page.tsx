// import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Inner from "@/components/Inner";
import Section from "@/components/Section";

export default function ServicesPage() {
  return (
    <main>
      <Hero
        pageTitle="事業内容"
        pageDesc="TechNovaは、テクノロジーで課題を解決する4つのサービスを提供しています。"
      />
      <Section>
        <Inner>
          <SectionTitle
            mainTitle="事業内容"
            subTitle="Service"
            horizontal="center"
          />
          <article className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <figure className="bg-gray aspect-[8/5] w-full md:aspect-auto md:h-[375px] md:w-[45%]">
              {/* <img src="" alt="" /> */}
            </figure>
            <div className="w-full md:w-1/2">
              <div className="mb-8">
                <span className="font-sub font-bold text-xl mb-2">Service <span className="text-primary">01</span></span>
                <h3 className="font-bold text-2xl ">WEB制作事業</h3>
              </div>
              <div>
                <p className="leading-[2.5]">
                    概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります<br/>
                    概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります
                </p>
              </div>
              <div className="text-right">
              <a href="" className="">詳しく見る</a>
              </div>
            </div>
          </article>
        </Inner>
      </Section>
    </main>
  );
}
