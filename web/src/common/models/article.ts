import { ICategory } from './category';
import { ITag } from './tag';

type TMetaData = {
  slug: string;
  seo_title: string;
  search_description: string;
  first_published_at: string;
};

type TBodyParagraphData = {
  id: string;
  type: string;
  value: string;
};

type TBodyImageWithCaptionData = {
  id: string;
  type: string;
  value: {
    image: string | null;
    caption: string;
  };
};

type TBodyBlockQuoteData = {
  id: string;
  type: string;
  value: string;
};

type TBodyCodeData = {
  id: string;
  type: string;
  value: {
    language: string;
    code: string;
  };
};

type TBodyEquationData = {
  id: string;
  type: string;
  value: string;
};

type TBodyData = Array<
  | TBodyBlockQuoteData
  | TBodyCodeData
  | TBodyEquationData
  | TBodyImageWithCaptionData
  | TBodyParagraphData
>;

export interface IArticle {
  id: number;
  meta: TMetaData;
  title: string;
  uuid: string;
  description: string;
  header_image: string | null;
  tags: ITag[] | [];
  categories: ICategory[] | [];
  body: TBodyData;
  reading_time: number;
}
