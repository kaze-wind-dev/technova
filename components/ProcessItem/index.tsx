import type { ProcessContent } from "@/libs/utiles";
import { numberFormat } from "@/libs/utiles";

type Props = {
  data: ProcessContent;
  index: number;
};

const ProcessItem = ({ data, index } : Props) => {
  return (
    <li className="bg-gray px-[5%] py-7 lg:px-10 lg:py-8 mb-5 last:mb-0">
      <div className="flex items-center flex-wrap lg:flex-nowrap  gap-y-3 gap-x-6 mb-6">
        <span className="lg:flex-shrink-0 font-sub font-bold text-center text-white bg-primary rounded-full px-6 py-2 text-[1rem] md:text-[1.125rem] lg:text-[1.25rem]">STEP {numberFormat(index)}</span>
        <h3 className="w-full font-bold text-[1.5rem] md:text-[1.75rem] lg:text-[2rem]">{data.title}</h3>
      </div>
      <p className="tracking-wider leading-loose">{data.content}</p>
    </li>
  );
};

export default ProcessItem;
