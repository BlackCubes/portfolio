import { ICategory } from './category';

type TMetaData = {
  slug: string;
  seo_title: string;
  search_description: string;
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

type TBodyData = Array<
  TBodyBlockQuoteData | TBodyImageWithCaptionData | TBodyParagraphData
>;

export interface IWork {
  id: number;
  uuid: string;
  meta: TMetaData;
  title: string;
  description: string;
  main_image: string | null;
  first_released_at: string;
  category: ICategory | null;
  body: TBodyData;
}
