import { url } from "inspector";

export const companyData = [
  {
    id: 1,
    name: "会社名",
    title: "TechNova株式会社",
  },
  {
    id: 2,
    name: "設立",
    title: "2015年4月",
  },
  {
    id: 3,

    name: "所在地",
    title: "東京都渋谷区恵比寿…",
  },
  {
    id: 4,
    name: "代表者",
    title: "代表取締役 山田 太郎",
  },
  {
    id: 5,
    name: "従業員数",
    title: "75名（2025年現在）",
  },
  {
    id: 6,
    name: "事業内容",
    title: "Web制作、システム開発、クラウド構築、DX支援",
  },
  {
    id: 7,
    name: "主要取引先",
    title: "中堅企業、スタートアップ、自治体等",
  },
];

export type Service = {
  id: string | number;
  title?: string;
  description?: string;
  body?: string;
  thumbnail?: {
    url?: string;
    width?: string;
    height?: string;
  };
  publishedAt?: string;
  updatedAt?: string;
};

export const servicesData = [
  {
    id: "1",
    title: "WEB制作事業",
    description:
      "概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります\n概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります",
    body: "<h1>h1タイトル</h1><h2>h2タイトル</h2><h3>h3タイトル</h3><p>概要文が入ります概要文が入ります概要文が入ります概要文が入ります<br/>概要文が入ります概要文が入ります</p>",
    thumbnail: {
      // url: "",
      // width: "",
      // height: "",
    },
    publishedAt: "9999/12/12",
    updatedAt: "9999/12/12",
  },
  {
    id: "2",
    title: "システム開発事業",
    description:
      "概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります\n概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります",
    body: "<h1>h1タイトル</h1><h2>h2タイトル</h2><h3>h3タイトル</h3><p>概要文が入ります概要文が入ります概要文が入ります概要文が入ります<br/>概要文が入ります概要文が入ります</p>",
    thumbnail: {
      // url: "",
      // width: "",
      // height: "",
    },
    publishedAt: "9999/12/12",
    updatedAt: "9999/12/12",
  },
  {
    id: "3",
    title: "クラウドソリューション事業",
    description:
      "概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります\n概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります",
    body: "<h1>h1タイトル</h1><h2>h2タイトル</h2><h3>h3タイトル</h3><p>概要文が入ります概要文が入ります概要文が入ります概要文が入ります<br/>概要文が入ります概要文が入ります</p>",
    thumbnail: {
      // url: "",
      // width: "",
      // height: "",
    },
    publishedAt: "9999/12/12",
    updatedAt: "9999/12/12",
  },
  {
    id: "4",
    title: "事業名が入ります",
    description:
      "概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります\n概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります概要文が入ります",
    body: "<h1>h1タイトル</h1><h2>h2タイトル</h2><h3>h3タイトル</h3><p>概要文が入ります概要文が入ります概要文が入ります概要文が入ります<br/>概要文が入ります概要文が入ります</p>",
    thumbnail: {
      // url: "",
      // width: "",
      // height: "",
    },
    publishedAt: "9999/12/12",
    updatedAt: "9999/12/12",
  },
];

export const dateFormat = (date: string | Date, format?: string) => {
  return new Date(date).toLocaleDateString("ja-JP").split("/").join(format);
};
