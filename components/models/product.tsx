export type ProductItem = {
  archived: boolean;
  cover: Array<object>;
  created_by: Array<object>;
  created_time: string;
  icon: null | string;
  id: string;
  last_edited_by: Array<object>;
  last_edited_time: string;
  object: string;
  parent: Array<object>;
  properties: Array<object>;
  url: string;
  results: Array<object>;
};

export type ProductItemList = Array<ProductItem>;
