import { createClient } from "microcms-js-sdk";

// 使用する型
import type {
  MicroCMSQueries,
  MicroCMSImage,
  // MicroCMSContentId,
  MicroCMSListContent,
} from 'microcms-js-sdk';

// 環境変数のMICROCMS_SERVICE_DOMAINの設定確認
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

// 環境変数のMICROCMS_API_KEYの設定確認
if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

//　初期化
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});


export type News = {
  title: string;
  description: string;
  body: string;
  thumbnail?: MicroCMSImage;
  category:{
    id : string;
    name : string;
  };
} & MicroCMSListContent;


export type Category = {
  name: string;
  contents?: string;
} & MicroCMSListContent;

// お知らせ
export const getNewsList = async(queries?: MicroCMSQueries) => {
  const listData = await client.getList<News>({
    endpoint: "news",
    queries,
  });
  return listData;
}

export const getNewsDetail = async(
  contentId:string,
  queries?:MicroCMSQueries
)=>{
  const singleData = await client.getListDetail<News>({
  endpoint: "news",
    contentId,
    queries,
  });
  return singleData;
}

// カテゴリ
export const getCategoryList = async(queries?: MicroCMSQueries) => {
  const categoryList = await client.getList<Category>({
    endpoint: "categories",
    queries,
  });
  return categoryList;
}

export type Work = {
  title: string;
  description: string;
  body: string;
  thumbnail?: MicroCMSImage;
  images?: MicroCMSImage[];
  category:{
    id : string;
    name : string;
  };
} & MicroCMSListContent;

// 事例紹介
export const getWorksList = async(queries?: MicroCMSQueries) => {
  const listData = await client.getList<Work>({
    endpoint: "works",
    queries,
  });
  return listData;
}

export const getWorksDetail = async(
  contentId:string,
  queries?:MicroCMSQueries
)=>{
  const singleData = await client.getListDetail<Work>({
  endpoint: "works",
    contentId,
    queries,
  });
  return singleData;
}
