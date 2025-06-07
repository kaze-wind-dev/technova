import Image from "next/image";
import type { RecruitInfo } from "@/libs/utiles";
import RecruitTable from "../RecruitTable";

type Props = {
  recruitInfo: RecruitInfo[];
};

const RecruitItems = ({ recruitInfo }: Props) => {
  return (
    <div>
      {recruitInfo.map((recruit) => {
        return (
          <article
            className="flex items-center justify-center flex-wrap md:justify-between gap-y-8 md:odd:flex-row-reverse mb-12 lg:mb-16"
            key={recruit.id}
          >
            <div className="w-full md:w-1/2">
              <div className="mb-3 md:mb-6 lg:mb-8 pl-5 lg:pl-6 relative before:content-[''] before:w-[6px] lg:before:w-[8px] before:h-full before:rounded-full before:absolute before:top-0 before:left-0 before:bg-primary">
                <h3 className="font-bold text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] leading-normal tracking-widest">
                  {recruit.title}
                </h3>
              </div>
              <RecruitTable recruitInfo={recruit.recruitInfo} />
            </div>
            {recruit.thumbnail && recruit.thumbnail.url && (
              <figure className="w-full md:w-[45%] aspect-[8/5] bg-theme">
                <Image
                  src={recruit.thumbnail.url}
                  alt={recruit.title}
                  width={recruit.thumbnail.width}
                  height={recruit.thumbnail.height}
                />
              </figure>
            )}
          </article>
        );
      })}
    </div>
  );
};

export default RecruitItems;
