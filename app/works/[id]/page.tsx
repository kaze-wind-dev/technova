import { getWorksDetail } from "@/libs/microcms";
import LinkButton from "@/components/LinkButton";
import WorksDetail from "@/components/WorksDetail";

type Props = {
  params: {
    id: string;
  };
};

export default async function WorksDetailPage({ params }: Props) {
  const data = await getWorksDetail(params.id);

  return (
    <main>
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
