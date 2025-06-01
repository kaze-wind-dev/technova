import type { Work } from "@/libs/microcms";
import WorksCard from "../WorksCard/page";

type Props = {
  works: Work[];
};
const WorksList = ({ works }: Props) => {
  if (works.length == 0) {
    return <p className="text-center mx-center">現在、投稿はございません。</p>;
  }
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {works.map((article) => (
       <WorksCard works={article} key={article.id}/>
      ))}
    </ul>
  );
};

export default WorksList;
