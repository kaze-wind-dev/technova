import Link from "next/link";

import styles from "./index.module.css";

type Props = {
  name: string;
  path: string;
  category?: {
    id: string;
    name: string;
  };
};

export const Breadcrumbs = ({ name, path }: Props) => {
    return (

  <ul className={`${styles.breadcrumb} text-xs md:text-sm flex justify-end py-5 max-w-[1400px] w-[90%] mx-auto`}>
    <li>
      <Link href="/" className="transition hover:opacity-70">トップページ</Link>
    </li>
    <li>
      {name}
    </li>
  </ul>
    );
};
