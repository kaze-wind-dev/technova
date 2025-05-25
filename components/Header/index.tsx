import Image from "next/image";
import Link from "next/link";
import LinkButton from "../LinkButton";

const Header = () => {
  return (
    <header className="md:py-4 md:px-8" >
      <div className="flex flex-row items-center justify-between">
      <h1 className="logo">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="株式会社TechNovaのロゴ"
            width={236}
            height={67}
          />
        </Link>
      </h1>
      <nav>
        <ul className="flex flex-row items-center justify-center gap-6">
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
      <LinkButton href="/contact" addClass="bg-primary text-white hover:bg-primary-hover btn-arrow-white"><span>お問い合わせはこちら</span></LinkButton>
      </div>
    </header>
  );
};
export default Header;
