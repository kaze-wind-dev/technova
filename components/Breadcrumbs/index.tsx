import Link from "next/link";

import styles from "./index.module.css";

type Props = {
  name: string;
  slug: string;
  category?: {
    id: string;
    name: string;
  };
  detail?: {
    id: string;
    title: string;
  };
};

export const Breadcrumbs = ({ name, slug, category, detail }: Props) => {
  return (
    <nav aria-label="breadcrumb" className="max-w-[1400px] w-[90%] mx-auto">
      <ul
        className={`${styles.breadcrumb} text-xs md:text-sm flex justify-end py-5 `}
      >
        <li>
          <Link href="/" className="transition hover:opacity-70">
            トップページ
          </Link>
        </li>
        {!category && !detail && <li>{name}</li>}
        {category && detail && (
          <>
            <li>
              <Link href={`/${slug}/`} className="transition hover:opacity-70">
                {name}
              </Link>
            </li>
            <li>
              <Link
                href={`/${slug}/category/${category.id}`}
                className="transition hover:opacity-70"
              >
                {category.name}
              </Link>
            </li>
            <li>{detail.title}</li>
          </>
        )}
        {category && !detail && (
          <>
            <li>
              <Link href={`/${slug}/`} className="transition hover:opacity-70">
                {name}
              </Link>
            </li>
            <li>{category.name}</li>
          </>
        )}
        {!category && detail && (
          <>
            <li>
              <Link href={`/${slug}/`} className="transition hover:opacity-70">
                {name}
              </Link>
            </li>
            <li>{detail.title}</li>
          </>
        )}
      </ul>
    </nav>
  );
};
