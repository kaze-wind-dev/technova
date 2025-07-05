import { Metadata } from "next";
import { getWorksDetail } from "@/libs/microcms";
import LinkButton from "@/components/LinkButton";
import WorksDetail from "@/components/WorksDetail";
import { Breadcrumbs } from "@/components/Breadcrumbs";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getWorksDetail(params.id);
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
export default async function WorksDetailPage({ params }: Props) {
  const data = await getWorksDetail(params.id);

  return (
    <main>
      <Breadcrumbs name="事例紹介" slug="works" category={data.category} detail={data}/>
      <div className="py-16 md:py-20 lg:py-24">
        <WorksDetail data={data} />
        <LinkButton
          href="/works"
          addClass="bg-primary text-white font-bold hover:bg-primary-hover mx-auto mt-10 md:mt-12 lg:mt-16"
        >
          一覧に戻る
        </LinkButton>
      </div>
    </main>
  );
}
