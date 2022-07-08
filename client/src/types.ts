
export interface IState {
  loading: boolean;
  data: any;
  error: boolean;
  search: string;
  count: number;
  sorted: boolean;
}



export type bookType = {
  _id?: string;
  title: string;
  isbn?: string;
  publisherDate?: string;
  publisher?: string;
  thumbnailUrl?: string;
  shortDescription?: string;
  longDescription?: string;
  category?: string[];
  isReserved?: boolean;
  isBorrowed?: boolean;
  authors?: string[];
};

export type statusType = "LOADING" | "SUCCEEDED" | "FAILED" | "IDLE"

export type authorType = {
  _id: string;
  name: string;
  email: string;
  books: string[];
};
export type selectOptionsType= {
  value: string;
  label: string;
}

export type categoryType= {
  _id: string;
  name: string;
  books?:string[]
}
export type bookProfilePropsType = {
  setTitle: (value:string) => void,
  setAuthors: (value:any) => void,
  setDescription:(value:string)=>void,
}
export type publishDetailsType = {

  setCategory: (value: any) => void;
  setHeadline: (value: string) => void;
  headline: string;
};
export type publishType = {
  setPublishDate: (value: string) => void;
setIsbn: (value: string) => void;
  setPublisher:(value:string)=>void
};