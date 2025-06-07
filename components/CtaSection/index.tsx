import React from "react";
import Inner from "@/components/Inner";
import Section from "@/components/Section";
import LinkButton from "@/components/LinkButton";

import { FORM_URL } from "@/constants";

type Props = {
  title: React.ReactNode;
  btn?: React.ReactNode;
};

const CtaSection = ({ title, btn }: Props) => {
  return (
    <Section addClass="bg-gray">
      <Inner>
        <h2 className="text-bold leading-loose tracing-wider text-center font-bold text-[1.25rem] md:text-[1.75rem] lg:text-[2rem] whitespace-pre-wrap">
          {title}
        </h2>
        {btn}
      </Inner>
    </Section>
  );
};
 
export default CtaSection;
