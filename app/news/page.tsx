// import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
export default function Home() {
  return (
    <main>
      <Hero
        pageTitle="お知らせ"
        pageDesc={`TechNovaからのお知らせや最新情報をご案内します。\nサービス情報、実績公開、採用に関する情報などはこちらからご確認ください。`}
      />
      <section className="py-16 md:py-20 lg:py-24">
        <div className="w-[90%] mx-auto max-w-[1400px]">
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
        </div>
      </section>
    </main>
  );
}
