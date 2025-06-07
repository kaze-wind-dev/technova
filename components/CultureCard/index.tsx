import Image from "next/image";

type Props = {
  img?: {
    src: string;
    alt?: string;
    width: number;
    height: number;
  };
  title: string;
  text: string;
};

const CultureCard = ({ img, title, text }: Props) => {
  return (
    <li className="p-6 md:p-7 lg:p-8 bg-theme ">
      <div className="aspect-square mx-w-[100px] w-[40%] bg-gray mb-5 lg:mb-6 mx-auto">
        {/* <Image
                 src=""
            alt=""
            width={} 
            height={}
                /> */}
      </div>
      <h3 className="text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] leading-loose tracking-wider font-bold text-primary text-center mb-3">
        {title}
      </h3>
      <p className="text- tracking-wider leading-loose">{text}</p>
    </li>
  );
};

export default CultureCard;
