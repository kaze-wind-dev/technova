import { getNewsDetail } from "@/libs/microcms";
import LinkButton from "@/components/LinkButton";
import NewsDetail from "@/components/NewsDetail";

type Props = {
  params: {
    id: string;
  };
};

export default async function NewsDetailPage({ params }: Props) {
  const data = await getNewsDetail(params.id);

  return (
    <main>
      <div className="py-16 md:py-20 lg:py-24">
        <NewsDetail data={data} />
        <LinkButton
          href="/news"
          addClass="bg-primary text-white font-bold hover:bg-primary-hover mx-auto mt-10 md:mt-12 lg:mt-16"
        >
          一覧に戻る
        </LinkButton>
      </div>
    </main>
  );
}
