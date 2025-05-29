import Image from "next/image";
type Props = {
  pageTitle: string;
  pageDesc: string;
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
      <section className="text-white font-bold relative">
        <div className="">
          <div className="absolute bottom-24 left-[5%] z-20 flex flex-col gap-y-6 flex-wrap ">
            <h1 className="text-[80px] leading-[1.25em] font-sub ">
              {pageTitle}
            </h1>
            <p className="text-[32px] leading-[1.5em]">{pageDesc}</p>
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
        </div>
      </section>
    );
  } else {
    return (
      <section>
        <div className="w-[90%] mx-auto py-16 md:py-20 lg:py-24 font-bold">
          <h1 className="text-6xl relative pl-[0.75em]"><span className="w-[0.5em] h-[0.5em] rounded-md bg-primary rotate-45 block absolute top-1/2 left-0 -translate-y-2/4"></span>{pageTitle}</h1>
          <p className="mt-6 leading-loose">{pageDesc}</p>
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
