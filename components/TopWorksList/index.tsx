import type { Work } from "@/libs/microcms";
import TopWorksCard from "../TopWorksCard/page";

type Props = {
  works: Work[];
};
const TopWorksList = ({ works }: Props) => {
  if (works.length == 0) {
    return <p className="text-center mx-auto">現在、投稿はございません。</p>;
  }
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {works.map((article) => (
       <TopWorksCard works={article} key={article.id}/>
      ))}
    </ul>
  );
};

export default TopWorksList;
