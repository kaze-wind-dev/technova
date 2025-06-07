import Image from "next/image";
import style from "./index.module.css";

type Props = {
  pageTitle: string;
  pageDesc?: string;
  pageRoot?: boolean;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};
const Hero = ({ pageTitle, pageDesc, pageRoot = false, image }: Props) => {
  if (pageRoot) {
    return (
      <section className="text-white font-bold relative h-[600px] lg:h-[654px]">
        <div className={style.copy}>
          <div className="absolute bottom-[12%] lg:bottom-24 left-[5%] z-20 flex flex-col gap-y-6 flex-wrap">
            <h1 className="text-[3.5rem] md:text-[4.25rem] lg:text-[5rem] leading-tight font-sub font-bold tracking-widest whitespace-pre-wrap ">
              {pageTitle}
            </h1>
            {
              pageDesc && (
            <p className="text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] leading-normal whitespace-pre-wrap">
              {pageDesc}
            </p>
              )
            }
          </div>
        </div>
        {image && (
          <Image
            src={image?.src}
            alt={image?.alt}
            width={image?.width}
            height={image?.height}
            className="w-full h-full object-cover object-center"
          />
        )}
      </section>
    );
  } else {
    return (
      <section>
        <div className="w-[90%] mx-auto py-16 md:py-20 lg:py-24 font-bold">
          <h1 className="text-[2rem] sm:[2.25rem] md:text-[2.5rem] lg:text-[3rem] relative pl-[0.75em] font-bold tracking-wider">
            <span className="w-[0.5em] h-[0.5em] rounded-[4px] md:rounded-md bg-primary rotate-45 block absolute top-[0.75em] left-0 -translate-y-2/4"></span>
            {pageTitle}
          </h1>
          <p className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 leading-loose whitespace-pre-wrap">{pageDesc}</p>
        </div>
        {image && (
          <Image
            src={image?.src}
            alt={image?.alt}
            width={image?.width}
            height={image?.height}
            className="w-full h-full object-cover object-center"
          />
        )}
      </section>
    );
  }
};
export default Hero;
