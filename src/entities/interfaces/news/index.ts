type Press = '조선' | '중앙' | '동아' | '한겨례' | '한경' | '매경';

export interface News {
  order: Number;
  title: String;
  summary: String;
  news: Array<{ date: Date; title: String; link: String }>;
  journals: Array<{ press: Press; title: String; link: String }>;
  keywords: Array<String>;
  state: Boolean;
  opinions: {
    left: String;
    right: String;
  };
  votes: {
    left: Number;
    right: Number;
  };
}

export interface Preview
  extends Partial<
    Pick<News, 'order' | 'title' | 'summary' | 'keywords' | 'state'>
  > {}
