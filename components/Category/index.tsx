import Link from "next/link";

type Props = {
  name: string;
  href?: string;
};

const Category = ({ name, href }: Props) => {
  return href ? (
    <Link
      href={href}
      className="bg-primary text-white font-bold px-4 py-2 inline-block rounded-full text-small md:text-base transition hover:bg-primary-hover"
    >
      {name}
    </Link>
  ) : (
    <span className="bg-primary text-white font-bold px-4 py-2 inline-block rounded-full text-small md:text-base">
      {name}
    </span>
  );
};

export default Category;
