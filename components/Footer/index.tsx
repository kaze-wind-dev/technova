import Image from "next/image";
import Link from "next/link";
import LinkButton from "@/components/LinkButton";

import { RECRUIT_URL, FORM_URL, SNS_LIST } from "@/constants";

const Footer = () => {
  return (
    <footer className="py-16 md:py-18  lg:py-20 bg-primary text-white">
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mx-auto w-[90%] ">
        <div className="flex flex-col items-center md:items-start justify-between mb-8 md:mb-0">
          <div className="w-[164px] mb-6 md:mb-8 md:w-[200px] lg:w-[236px]">
            <Link href="/">
              <Image
                src="/logo-white.png"
                alt="株式会社TechNovaのロゴ"
                width={236}
                height={67}
              />
            </Link>
          </div>
          {SNS_LIST && (
            <ul className="flex items-center justify-start gap-4">
              {SNS_LIST.map((sns) => (
                <li className="w-6" key={sns.service}>
                  <Link
                    href={sns.url}
                    target="_blank"
                    className="hover:opacity-70 transition-opacity"
                  >
                    <Image
                      src={sns.icon.src}
                      alt={sns.service}
                      width={sns.icon.width}
                      height={sns.icon.height}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex flex-col items-center md:items-end w-full md:w-auto">
          <nav className="w-full">
            <ul className="text-base sm:text-lg md:text-xl flex flex-col md:flex-row md:justify-end gap-y-3 gap-x-6">
              <li className="py-3 md:p-0 border-b md:border-none border-white w-full md:w-auto">
                <Link
                  className="text-white font-bold text-[1.125rem] sm:text-[1.25rem] md:text-[1rem] flex justify-between"
                  href="/"
                >
                  トップページ
                  <span className="font-sub text-[0.75em] md:hidden">Top</span>
                </Link>
              </li>
              <li className="py-3 md:p-0 border-b md:border-none border-white w-full md:w-auto">
                <Link
                  className="text-white font-bold text-[1.125rem] sm:text-[1.25rem] md:text-[1rem] flex justify-between"
                  href="/services"
                >
                  事業内容
                  <span className="font-sub text-[0.75em] md:hidden">Business</span>
                </Link>
              </li>
              <li className="py-3 md:p-0 border-b md:border-none border-white w-full md:w-auto">
                <Link
                  className="text-white font-bold text-[1.125rem] sm:text-[1.25rem] md:text-[1rem] flex justify-between"
                  href="/works"
                >
                  事例紹介<span className="font-sub text-[0.75em] md:hidden">Works</span>
                </Link>
              </li>
              <li className="py-3 md:p-0 border-b md:border-none border-white w-full md:w-auto">
                <Link
                  className="text-white font-bold text-[1.125rem] sm:text-[1.25rem] md:text-[1rem] flex justify-between"
                  href="/company"
                >
                  会社概要
                  <span className="font-sub text-[0.75em] md:hidden">Company</span>
                </Link>
              </li>
     <li className="py-3 md:p-0 border-b md:border-none border-white w-full md:w-auto">
                <Link
                  className="text-white font-bold text-[1.125rem] sm:text-[1.25rem] md:text-[1rem] flex justify-between"
                  href="/recruit"
                >
                  採用情報
                  <span className="font-sub text-[0.75em] md:hidden">Recruit</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col gap-x-4 lg:gap-x-6 gap-y-4 mt-8 md:flex-row ">
            
            <LinkButton
              href={FORM_URL}
              addClass="bg-white text-primary font-bold hover:opacity-70 transition btn-window-primary"
              blank={true}
            >
              <span>お問い合わせはこちら</span>
            </LinkButton>
            <LinkButton
              href={RECRUIT_URL}
              addClass="bg-white text-primary font-bold hover:opacity-70 transition btn-window-primary"
              blank={true}
            >
              <span>採用のご応募はこちら</span>
            </LinkButton>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap flex-col md:flex-row gap-y-6 w-[90%] mx-auto mt-10 md:mt-16">
        <ul className="flex flex-row gap-3 text-[11px] md:text-sm">
          <li>
            <Link href="/privacy" className="underline">
              プライバシーポリシー
            </Link>
          </li>
          <li>
            <Link href="/site" className="underline">
              サイトマップ
            </Link>
          </li>
        </ul>
        <p>
          <small className="text-[11px] md:text-sm">
            &copy; 2025 TechNova Co., Ltd
          </small>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
