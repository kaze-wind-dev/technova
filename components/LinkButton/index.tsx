

import React from "react";
type Props = {
  href: string;
  addClass?: string; //addClassなければ
  blank?: boolean; 
  children: React.ReactNode;
};

const LinkButton = ({ href, addClass, blank=false, children }: Props) => {
  const btnClass = addClass
    ? `block w-fit py-[1em] px-[2em] rounded-full transition ${addClass}`
    : "block w-fit py-[1em] px-[2em] rounded-full transition";

  return (
    <a className={btnClass} href={href} target={blank ? "_blank" : ""}>
      {children}
    </a>
  );
};

export default LinkButton;
