import Image from "next/image";
import Link from "next/link";
import LinkButton from "@/components/LinkButton";

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
          <ul className="flex items-center justify-start gap-4">
            <li className="w-6">
              <Link
                href="/"
                target="_blank"
                className="hover:opacity-70 transition-opacity"
              >
                <Image
                  src="/icon-x-white.svg"
                  alt="Xのアイコン"
                  width={30}
                  height={31}
                />
              </Link>
            </li>
            <li className="w-6">
              <Link
                href="/"
                target="_blank"
                className="hover:opacity-70 transition-opacity"
              >
                <Image
                  src="/icon-facebook-white.svg"
                  alt="Facebookのアイコン"
                  width={30}
                  height={30}
                />
              </Link>
            </li>
            <li className="w-6">
              <Link
                href="/"
                target="_blank"
                className="hover:opacity-70 transition-opacity"
              >
                <Image
                  src="/icon-instagram-white.svg"
                  alt="Instagramのアイコン"
                  width={30}
                  height={30}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <nav>
            <ul className="flex flex-col flex-wrap items-center text-center font-bold gap-2 md:flex-row md:gap-6 mx-auto ">
              <li className="w-32 md:w-auto">
                <Link href="/">トップページ</Link>
              </li>
              <li className="w-32 md:w-auto">
                <Link href="/services">事業内容</Link>
              </li>
              <li className="w-32 md:w-auto">
                <Link href="/works">事例紹介</Link>
              </li>
              <li className="w-32 md:w-auto">
                <Link href="/company">会社概要</Link>
              </li>
              <li className="w-32 md:w-auto">
                <Link href="/recruit">採用情報</Link>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col gap-x-4 lg:gap-x-6 gap-y-4 mt-8 md:flex-row ">
            <LinkButton
              href="/contact"
              addClass="bg-white text-primary font-bold hover:opacity-70 transition btn-arrow-primary"
            >
              <span>お問い合わせはこちら</span>
            </LinkButton>
            <LinkButton
              href="/"
              addClass="bg-white text-primary font-bold hover:opacity-70 transition btn-window-primary"
              blank="_blank"
            >
              <span>採用のご応募はこちら</span>
            </LinkButton>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-y-6 w-[90%] mx-auto mt-10 md:mt-16">
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
