import Link from "next/link";
import Section from "@/components/Section";
import Inner from "@/components/Inner";
import Hero from "@/components/Hero";

export default function Page() {
  return (
   <main>
      <Hero
        pageTitle="お問い合わせ"
        pageDesc="サービスに関するご相談・取材依頼・業務連携のご提案など、お気軽にご連絡ください。"
      />
      <Section>
        <Inner>
          <p className="mb-10 text-center leading-loose tracing-wider font-bold">
            サービスに関するご相談・取材依頼・業務連携のご提案などに関するお問い合わせを受け付けております。
            <br />
            ※採用に関するお問い合わせは、こちらからご連絡ください。
          </p>
          <form className="w-full max-w-[960px] mx-auto">
            <div className="border-b border-solid border-gray flex flex-center items-center  py-6 gap-6">
              <div className="font-bold leading-loose flex flex-center items-center justify-between w-[300px]">
                <label htmlFor="name">お名前</label>
                <span className="require">必須</span>
              </div>
              <div className="w-full">
                <input
                  id="name"
                  type="text"
                  className="px-4 py-4 rounded-s-md w-full bg-theme"
                />
              </div>
            </div>
            <div className="border-b border-solid border-gray flex flex-center items-center py-6 gap-6">
              <div className="font-bold leading-loose flex flex-center items-center justify-between w-[300px]">
                <label htmlFor="email">メールアドレス</label>
                <span className="require">必須</span>
              </div>
              <div className="w-full">
                <input
                  id="email"
                  type="email"
                  className="px-4 py-4 rounded-s-md w-full bg-theme"
                />
              </div>
            </div>
            <div className="border-b border-solid border-gray flex flex-center items-center py-6 gap-6">
              <div className="font-bold leading-loose flex flex-center items-center justify-between w-[300px]">
                <label htmlFor="corporate">会社名</label>
                <span className="">任意</span>
              </div>
              <div className="w-full">
                <input
                  id="corporate"
                  type="text"
                  className="px-4 py-4 rounded-s-md w-full bg-theme"
                />
              </div>
            </div>
            <div className="border-b border-solid border-gray flex flex-center items-center py-6 gap-6">
              <div className="font-bold leading-loose flex flex-center items-center justify-between w-[300px]">
                お問い合わせの種別
                <span className="">必須</span>
              </div>
              <div className="w-full">
                <label htmlFor="radio-content01">
                  <input id="radio-content01" type="radio" />
                  ご依頼について
                </label>
                <label htmlFor="radio-content02">
                  <input id="radio-content02" type="radio" />
                  その他
                </label>
              </div>
            </div>
            <div className="border-b border-solid border-gray flex flex-center items-center py-6 gap-6">
              <div className="font-bold leading-loose flex flex-center items-center justify-between w-[300px]">
                <label htmlFor="comment">
                  お問い合わせの内容
                  <span className="">必須</span>
                </label>
              </div>
              <div className="w-full">
                <textarea
                  name="comment"
                  id="comment"
                  className="px-4 py-4 rounded-s-md w-full bg-theme"
                ></textarea>
              </div>
            </div>
          </form>
        </Inner>
      </Section>
    </main>

  );
}
