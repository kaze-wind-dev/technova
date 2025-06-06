import type { Category } from "@/libs/microcms";

import LinkButton from "../LinkButton";

type Props = {
  categories: Category[];
  basePath?: string;
  currentId?: string;
};

const CategoryFilter = ({
  categories,
  basePath = "news",
  currentId,
}: Props) => {
  return (
    <ul className="flex items-center justify-start gap-3 md:gap-4 lg:gap-5 mb-10 md:mb-12 lg:mb-14">
      {categories.map((category) =>
        currentId === category.id ? (
          <li key={category.id}>
          <span
            className="block w-fit py-[1em] px-[2em] rounded-full bg-primary text-white font-bold"
            aria-current="page"
          >
            {category.name}
          </span>
          </li>
        ) : (
          <li key={category.id}>
            <LinkButton
              addClass="bg-gray-medium text-black font-bold hover:bg-primary hover:text-white"
              href={`/${basePath}/category/${category.id}`}
            >
              {category.name}
            </LinkButton>
          </li>
        )
      )}
    </ul>
  );
};

export default CategoryFilter;
