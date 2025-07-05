
import Image from "next/image";
import Inner from "@/components/Inner";
import DateText from "@/components/DateText";
import Category from "@/components/Category";
import type { Work } from "@/libs/microcms";
import styles from "./index.module.css";

type Props = {
  data: Work;
};

const WorksDetail = ({ data }: Props) => {
  
  return (
    <article>
      <Inner>
        <header className="mb-10 md:mb-12 lg:mb-16">
          <div className="flex flex-col items-start gap-2">
            <Category
              name={data.category.name}
              href={`/works/category/${data.category.id}`}
            />
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
          />
        )}
        <div
          className={styles.detailBody}
          dangerouslySetInnerHTML={{ __html: data.body }}
        />

        {data.images && (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {data.images.map((image, index) => {
              return (
                <div className="aspect-[4/3]" key={`${image.url}-${index}`}>
                  <Image
                    src={image.url}
                    alt={`サムネイル画像：${image.alt && data.title}`}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              );
            })}
          </div>
        )}
      </Inner>
    </article>
  );
};

export default WorksDetail;
