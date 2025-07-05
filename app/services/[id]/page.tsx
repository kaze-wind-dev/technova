import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";
import Inner from "@/components/Inner";
import DateText from "@/components/DateText";
import { servicesData } from "@/libs/utiles";
import ReactMarkdown from "react-markdown";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import styles from "./index.module.css";

type Props = {
  params: {
    id: string;
  };
};
export function generateMetadata({ params }: Props):Metadata {
  const data = servicesData.find((service) => service.id == params.id);
  return {
    title: data?.title,
    description: data?.description,
    openGraph: {
      title: data?.title,
      description: data?.description,
      images: [
        {
          url: data?.thumbnail?.url ?? "ogp.jpg",
          width: data?.thumbnail?.width ?? 1200,
          height: data?.thumbnail?.height ?? 630,
          alt: data?.title ?? "TechNova株式会社 OGP画像",
        },
      ],
    },
  };
}
export default function ServiceDetailPage({ params }: Props) {
  const data = servicesData.find((service) => service.id == params.id);
  if (!data) {
    return notFound();
  }
  return (
    <main>
      <Breadcrumbs name="事業内容" slug="services" detail={data}/>
      <div className="py-16 md:py-20 lg:py-24">
        <article>
          <Inner>
            <header className="mb-10 md:mb-12 lg:mb-16">
              <div className="flex flex-col items-start  gap-2">
                <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-bold tracking-wider leading-relaxed">
                  {data.title}
                </h1>
                <DateText
                  date={data.publishedAt ?? data.updatedAt}
                  addClass="block w-fit ml-auto"
                />
              </div>
              <p className="mt-6 md:mt-7 lg:mt-8 text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] lg:leading-loose tracking-widest font-bold">
                {data.description}
              </p>
            </header>
            {data.thumbnail && (
              <Image
                src={data.thumbnail.url}
                alt={`サムネイル画像：${data.title}`}
                width={data.thumbnail.width}
                height={data.thumbnail.height}
                loading="lazy"
                className="mb-10 md:mb-12 lg:mb-16"
              />
            )}
            <div className={styles.detailBody}>
            <ReactMarkdown >{data.body}</ReactMarkdown>
            </div>
          </Inner>
        </article>
        <LinkButton
          href="/services"
          addClass="bg-primary text-white font-bold hover:bg-primary-hover mx-auto mt-10 md:mt-12 lg:mt-16"
        >
          一覧に戻る
        </LinkButton>
      </div>
    </main>
  );
}
