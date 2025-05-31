import type { News } from "@/libs/microcms";

import DateText from "@/components/DateText";
import Category from "@/components/Category";

type Props = {
  news: News[];
};
const NewsList = async ({ news }: Props) => {
  if (news.length == 0) {
    return <p className="text-center mx-center">現在、投稿はございません。</p>;
  }
  return (
    <div className="mx-auto max-w-[960px]">
      {news.map((article) => (
        <article key={article.id} className="[&:not(:last-child)]:mb-3">
          <a
            href={`/news/${article.id}`}
            className="bg-theme py-4 px-6 md:py-6 md:px-8 block transition-opacity hover:opacity-70"
          >
            <div className="flex flex-wrap items-center justify-start gap-x-4 md:gap-x-5 lg:gap-x-6 gap-y-2">
              <DateText date={article.publishedAt} />
              <Category name={article.category.name} />
              <h3 className="text-small md:text-base tracking-wider font-bold text-ellipsis whitespace-nowrap overflow-hidden w-full md:w-auto">
                {article.title}
              </h3>
            </div>
          </a>
        </article>
      ))}
    </div>
  );
};

export default NewsList;
