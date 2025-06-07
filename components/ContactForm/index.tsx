const ContactForm = () => {
  return (
    <form className="w-full max-w-[960px] mx-auto" >
      <div className="border-b border-solid border-gray flex flex-center items-center py-6 gap-6 flex-wrap lg:flex-nowrap">
        <div className="font-bold leading-loose flex flex-center items-center justify-between w-full lg:w-[360px]">
          <label htmlFor="name">お名前</label>
          <span className="bg-red-500 text-white rounded-sm inline-block px-3 py-1 text-sm">必須</span>
        </div>
        <div className="w-full">
          <input
            id="name"
            type="text"
            className="px-4 py-4 rounded-s-md w-full bg-theme"
          />
        </div>
      </div>
      <div className="border-b border-solid border-gray flex flex-center items-center py-6 gap-6 flex-wrap lg:flex-nowrap">
        <div className="font-bold leading-loose flex flex-center items-center justify-between w-full lg:w-[360px]">
          <label htmlFor="email">メールアドレス</label>
          <span className="bg-red-500 text-white rounded-sm inline-block px-3 py-1 text-sm">必須</span>
        </div>
        <div className="w-full">
          <input
            id="email"
            type="email"
            className="px-4 py-4 rounded-s-md w-full bg-theme"
          />
        </div>
      </div>
      <div className="border-b border-solid border-gray flex flex-center items-center py-6 gap-6 flex-wrap lg:flex-nowrap">
        <div className="font-bold leading-loose flex flex-center items-center justify-between w-full lg:w-[360px]">
          <label htmlFor="corporate">会社名</label>
          <span className="bg-blue-500 text-white rounded-sm inline-block px-3 py-1 text-sm">任意</span>

        </div>
        <div className="w-full">
          <input
            id="corporate"
            type="text"
            className="px-4 py-4 rounded-s-md w-full bg-theme"
          />
        </div>
      </div>
      <div className="border-b border-solid border-gray flex flex-center items-center py-6 gap-6 flex-wrap lg:flex-nowrap">
        <div className="font-bold leading-loose flex flex-center items-center justify-between w-full lg:w-[360px]">
          <label htmlFor="comment">
            お問い合わせの内容</label>
          <span className="bg-red-500 text-white rounded-sm inline-block px-3 py-1 text-sm">必須</span>
        </div>
        <div className="w-full">
          <textarea
            name="comment"
            id="comment"
            className="px-4 py-4 rounded-s-md w-full h-[150px] resize-none bg-theme "
          ></textarea>
        </div>
      </div>
      <div className="text-center mt-10">
        <input type="submit" value="送信する" className="bg-primary text-white hover:bg-primary-hover py-4 px-6 rounded-md cursor-pointer" />
      </div>
    </form>
  );
};

export default ContactForm;
