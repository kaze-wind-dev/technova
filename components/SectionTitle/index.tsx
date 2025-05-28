type Props = {
  mainTitle: string;
  subTitle: string;
  horizontal?: "center" | "left" | "right";
};

const SectionTitle = ({
  mainTitle,
  subTitle,
  horizontal = "center",
}: Props) => {
  let items = "items-center";
  let text = "text-center";
  if (horizontal === "left") {
    items = "items-start";
    text = "text-left";
  } else if (horizontal === "right") {
    items = "items-end";
    text = "text-right";
  }
  return (
    <h2
      className={`flex flex-col ${items} ${text} font-bold gap-2 md:gap-3 text-[20px] md:text-[22px] lg:text-[24px] mb-10 md:mb-12 lg:mb-14`}
    >
      <span className="font-sub text-primary tracking-normal leading-tight text-[2.5em] md:text-[3em]">
        {subTitle}
      </span>
      <span className="tracking-widest leading-normal">{mainTitle}</span>
    </h2>
  );
};

export default SectionTitle;
