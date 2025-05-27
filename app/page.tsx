// import Image from "next/image";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <main>
      <Hero 
    pageTitle="未来を見据えたWeb戦略と開発力で、あなたのビジネスを加速させます。"
    pageDesc="Boost Your Future."
  pageRoot={true}
    image={{
      src: '/mainVisual-img.jpg',
      alt: "ファーストビュー", 
      width: 1512, 
      height: 694, 
    }
  }
      />

    </main>
  );
}
