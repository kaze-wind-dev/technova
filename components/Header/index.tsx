import Image from "next/image";
import Link from "next/link";
import LinkButton from "@/components/LinkButton";
import MobileMenu from "@/components/MobileMenu";
import { FORM_URL } from "@/constants";

const Header = () => {
  return (
    <header className="py-3 px-4 lg:px-6 lg:py-4 xl:px-8" >
      <div className="flex flex-row items-center justify-between">
      <div className="w-[164px] md:w-[200px] lg:w-[236px]"> 
        <Link href="/" >
          <Image
            src="/logo.png"
            alt="株式会社TechNovaのロゴ"
            width={236}
            height={67}
          />
        </Link>
      </div>
      <nav className="hidden lg:block">
        <ul className="flex flex-row items-center justify-center xl:gap-6 gap-5 font-bold">
          <li>
            <Link href="/">トップページ</Link>
          </li>
          <li>
            <Link href="/services">事業内容</Link>
          </li>
          <li>
            <Link href="/works">事例紹介</Link>
          </li>
          <li>
            <Link href="/company">会社概要</Link>
          </li>
          <li>
            <Link href="/recruit">採用情報</Link>
          </li>
        </ul>
      </nav>
      <LinkButton href={FORM_URL} addClass="bg-primary text-white font-bold hover:bg-primary-hover btn-window-white hidden lg:block" blank={true}><span>お問い合わせはこちら</span></LinkButton>
      <MobileMenu/>
      </div>
    </header>
  );
};
export default Header;
