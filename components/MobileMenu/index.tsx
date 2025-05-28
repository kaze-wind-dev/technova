"use client";

import Link from "next/link";
import LinkButton from "@/components/LinkButton";
import { useState } from "react";

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
      <div className={`block lg:hidden bg-white fixed top-0 right-0 z-40 w-[80%] h-[100%] transition duration-300 ${
            isOpen ? " translate-x-0" : "translate-x-[100%]"
        }`}>
        <div className="py-16 px-[8%]">
          <div className="flex flex-col items-center text-center">
            <nav className="">
              <ul className="text-base sm:text-lg md:text-xl flex flex-col items-center text-center gap-3">
                <li>
                  <Link onClick={toggleMenu} href="/">トップページ</Link>
                </li>
                <li>
                  <Link onClick={toggleMenu} href="/services">事業内容</Link>
                </li>
                <li>
                  <Link onClick={toggleMenu} href="/works">事例紹介</Link>
                </li>
                <li>
                  <Link onClick={toggleMenu} href="/company">会社概要</Link>
                </li>
                <li>
                  <Link onClick={toggleMenu} href="/recruit">採用情報</Link>
                </li>
              </ul>
            </nav>
            <LinkButton
              href="/contact"
              addClass="bg-primary text-white font-bold hover:bg-primary-hover btn-arrow-white mt-12"
            >
              <span>お問い合わせはこちら</span>
            </LinkButton>
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
