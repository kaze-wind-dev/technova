"use client";

import { useState } from "react";
import Link from "next/link";
import { RECRUIT_URL,FORM_URL } from "@/constants";
import LinkButton from "@/components/LinkButton";


const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);
  return (
    <>
      <button
        onClick={toggleMenu}
        className="bg-primary block lg:hidden w-12 h-12 fixed top-3 right-4 z-50 rounded-lg"
        aria-label="モバイルメニューを開く"
      >
        <span className={`block bg-white h-[2px] w-8 absolute inset-x-2 transition duration-300 ${
            isOpen ? "rotate-45 top-6" : "top-4 "
        }`}></span>
        <span className={`block bg-white h-[2px] w-8 absolute inset-x-2 top-6 transition duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
        }`}></span>
        <span className={`block bg-white h-[2px] w-8 absolute inset-x-2 transition duration-300 ${
            isOpen ? "-rotate-45 top-6" : "top-8 "
        }`}></span>
      </button>
      <div
      onClick={toggleMenu}
      className={`block lg:hidden cursor-pointer bg-black fixed inset-0 z-30 w-[100%] h-[100%] transition duration-300  ${
            isOpen ? "opacity-90 visible " : "opacity-0 invisible"
        }`}></div>
      <div className={`block lg:hidden bg-primary fixed top-0 right-0 z-40 max-w-[325px] sm:max-w-[400px] md:max-w-[540px] w-[86%] h-[100%] transition duration-300 ${
            isOpen ? " translate-x-0" : "translate-x-[100%]"
        }`}>
        <div className="py-16 px-[8%]">
          <div className="flex flex-col items-start">
            <nav className="w-full">
              <ul className="text-base sm:text-lg md:text-xl flex flex-col gap-5 w-full">
                <li className="py-3 border-b border-white w-full">
                  <Link className="text-white font-bold text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] flex justify-between" onClick={toggleMenu} href="/">トップページ<span className="font-sub text-[0.75em]">Top</span></Link>
                </li>
                <li className="py-3 border-b border-white w-full">
                  <Link className="text-white font-bold text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] flex justify-between" onClick={toggleMenu} href="/services">事業内容<span className="font-sub text-[0.75em]">Business</span></Link>
                </li>
                <li className="py-3 border-b border-white w-full">
                  <Link className="text-white font-bold text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] flex justify-between" onClick={toggleMenu} href="/works">事例紹介<span className="font-sub text-[0.75em]">Works</span></Link>
                </li>
                <li className="py-3 border-b border-white w-full">
                  <Link className="text-white font-bold text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] flex justify-between" onClick={toggleMenu} href="/company">会社概要<span className="font-sub text-[0.75em]">Company</span></Link>
                </li>
                <li className="py-3 border-b border-white w-full">
                  <Link className="text-white font-bold text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] flex justify-between" onClick={toggleMenu} href="/recruit">採用情報<span className="font-sub text-[0.75em]">Recruit</span></Link>
                </li>
              </ul>
            </nav>
            <LinkButton
              href={FORM_URL}
              addClass="bg-white text-primary font-bold hover:theme text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] btn-window-primary mt-12 w-full text-center"
            >
              <span>お問い合わせはこちら</span>
            </LinkButton>
            <LinkButton
              href={RECRUIT_URL}
              addClass="bg-white text-primary font-bold hover:theme text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] btn-window-primary mt-4 w-full text-center"
            >
              <span>採用のご応募はこちら</span>
            </LinkButton>
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
