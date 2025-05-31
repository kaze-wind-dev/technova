import Link from "next/link";

type Props = {
  totalCount: number;
  basePath?: string;
  prepage?: number;
  current?: number;
};

const Pagination = ({ totalCount,
     basePath,
      prepage = 10 ,
       current=1}: Props) => {
  const pages = Array.from(
    { length: Math.ceil(totalCount / prepage) },
    (_, i) => i + 1
  );

  return (
    pages.length !== 1 && (
    <nav className="mt-10 md:mt-12 lg:mt-14">
    <ul className="flex items-center justify-center flx-wrap font-bold gap-2 md:gap-3 ">
        {pages.map((page)=>(
        <li key={page} >
            {current !== page ?(
                <Link href={`/${basePath}/page/${page}`} className="w-9 h-9 md:w-12 md:h-12 grid place-content-center rounded-md bg-gray transition hover:bg-primary hover:text-white">{page}</Link>
            ) : (
                <span className="w-9 h-9 md:w-12 md:h-12 grid place-content-center rounded-md bg-primary text-white">{page}</span>
            )}
        </li>
        ))}
    </ul>
    </nav>
    )
  );
};

export default Pagination;
