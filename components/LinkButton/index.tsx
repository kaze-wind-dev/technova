import React from "react";
type Props = {
  href: string;
  addClass?: string; //addClassなければ
  children: React.ReactNode;
};

const LinkButton = ({ href, addClass, children }: Props) => {
  const btnClass = addClass
    ? `py-4 px-8 rounded-full transition ${addClass}`
    : "py-4 px-8 rounded-full transition";
  return (
    <a className={btnClass} href={href}>
      {children}
    </a>
  );
};

export default LinkButton;
