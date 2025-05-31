type Props = {
  name: string;
  linkType?: boolean;
  href?: string;
};

const Category = ({ name, linkType = false, href }: Props) => {
  return linkType && href ? (
    <a
      href={href}
      className="bg-primary text-white font-bold px-4 py-2 inline-block rounded-full text-small md:text-base transition hover:bg-primary-hover"
    >
      {name}
    </a>
  ) : (
    <span className="bg-primary text-white font-bold px-4 py-2 inline-block rounded-full text-small md:text-base">
      {name}
    </span>
  );
};

export default Category;
