import React from "react";
type Props = {
  href: string;
  addClass?: string; //addClassなければ
  blank?: string; //addClassなければ
  children: React.ReactNode;
};

const LinkButton = ({ href, addClass, blank, children }: Props) => {
  const btnClass = addClass
    ? `py-4 px-8 rounded-full transition ${addClass}`
    : "py-4 px-8 rounded-full transition";

  return (
    <a className={btnClass} href={href} target={blank}>
      {children}
    </a>
  );
};

export default LinkButton;
