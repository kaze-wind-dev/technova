import LinkButton from "@/components/LinkButton";
import SectionTitle from "@/components/SectionTitle";
export default function Home() {
  return (
    <main>
      <section className="py-16 md:py-20 lg:py-24">
        <div className="w-[90%] mx-auto max-w-[1400px]">
          <SectionTitle
            mainTitle="お探しのページは見つかりませんでした"
            subTitle="Not Found"
            horizontal="center"
          />
          <div className="leading-loose tracking-wider font-medium text-center">
            <p>
              申し訳ありません。アクセスいただいたページは存在しないか、移動または削除された可能性があります。
              <br />
              お手数ですが、トップページまたはメニューから目的のページをご確認ください。
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 md:gap-6 mt-8 md:mt-10">
            <LinkButton
              href="/"
              addClass="bg-primary text-white font-bold hover:bg-primary-hover btn-arrow-white hidden lg:block"
            >
              <span>トップページに戻る</span>
            </LinkButton>
            <LinkButton
              href="/contact"
              addClass="bg-primary text-white font-bold hover:bg-primary-hover btn-arrow-white hidden lg:block"
            >
              <span>お問い合わせはこちら</span>
            </LinkButton>
            <LinkButton
              href="/site"
              addClass="bg-primary text-white font-bold hover:bg-primary-hover btn-arrow-white hidden lg:block"
            >
              <span>サイトマップ</span>
            </LinkButton>
          </div>
        </div>
      </section>
    </main>
  );
}
