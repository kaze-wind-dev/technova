import React from "react";
import Inner from "@/components/Inner";
import Section from "@/components/Section";
import LinkButton from "@/components/LinkButton";

type Props = {
  title: React.ReactNode;
  btnText: string;
};

const CtaSection = ({ title, btnText }: Props) => {
  return (
    <Section addClass="bg-gray">
      <Inner>
        <h2 className="text-bold leading-loose tracing-wider text-center font-bold text-[1.25rem] md:text-[1.75rem] lg:text-[2rem] whitespace-pre-wrap">
          {title}
        </h2>
        <LinkButton
          href="/contact"
          addClass="bg-primary text-white font-bold hover:bg-primary-hover btn-arrow-white mx-auto mt-8 mg:mt-9 lg:mt-10 text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem]"
        >
          <span>{btnText}</span>
        </LinkButton>
      </Inner>
    </Section>
  );
};

export default CtaSection;
