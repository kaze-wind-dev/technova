import Image from "next/image";
type Props = {
  pageTitle: string;
  pageDesc: string;
  pageRoot?: boolean;
  image: {
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
          <div className="absolute bottom-24 left-[5%] z-20 flex flex-col gap-y-6 flex-wrap " >
            <h1 className="text-[80px] leading-[1.25em] font-sub ">{pageTitle}</h1>
            <p className="text-[32px] leading-[1.5em]">{pageDesc}</p>
          </div>
        <Image
          src={image?.src}
          alt={image?.alt}
          width={image?.width}
          height={image?.height}
          className="w-full h-full object-cover object-center"
        />
        </div>
      </section>
    );
  } else {
    return (
      <section>
        <div className="w-[90%] mx-auto py-16 md:py-20 lg:py-24">
          <h1>{pageTitle}</h1>
          <p>{pageDesc}</p>
        </div>
      </section>
    );
  }
};
export default Hero;
