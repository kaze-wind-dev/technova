import { Metadata } from "next";
import { getNewsDetail } from "@/libs/microcms";
import LinkButton from "@/components/LinkButton";
import NewsDetail from "@/components/NewsDetail";
import { Breadcrumbs } from "@/components/Breadcrumbs";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getNewsDetail(params.id);
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [
        {
          url: data.thumbnail?.url ?? "ogp.jpg",
          width: data.thumbnail?.width ?? 1200,
          height: data.thumbnail?.height ?? 630,
          alt: data.title ?? "TechNova株式会社 OGP画像",
        },
      ],
    },
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const data = await getNewsDetail(params.id);
  return (
    <>
      <Breadcrumbs
        name="お知らせ"
        slug="news"
        category={data.category}
        detail={data}
      />
      <div className="py-16 md:py-20 lg:py-24">
        <NewsDetail data={data} />
        <LinkButton
          href="/news"
          addClass="bg-primary text-white font-bold hover:bg-primary-hover mx-auto mt-10 md:mt-12 lg:mt-16"
        >
          一覧に戻る
        </LinkButton>
      </div>
    </>
  );
}
