import type { Work } from "@/libs/microcms";
import Category from "@/components/Category";
import MoreBtn from "../MoreBtn";

type Props = {
  works: Work;
};

const WorksCard = ({ works }: Props) => {
  return (
    <li className="py-8 px-6 lg:py-10 lg:px-8 bg-gray">
      <div className="bg-gray aspect-[8/5] w-full mb-4 lg:mb-5">
        {/* <img src="" alt="" /> */}
      </div>
      <Category name={works.category.name} />
      <h3 className="text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] tracking-wider leading-normal mb-2 lg:mb-3 mt-3 lg:mt-5 font-bold line-clamp-1">
        {works.title}
      </h3>
      <p className="leading-loose mb-3 lg:mb-4 line-clamp-3 text-[0.8125rem] lg:text-[0.875rem]">{works.description}</p>
      <MoreBtn href={`/works/${works.id}`} />
    </li>
  );
};

export default WorksCard;
