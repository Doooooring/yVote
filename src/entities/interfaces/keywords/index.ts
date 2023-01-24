export enum category {
  human = '인물',
  politics = '정치',
  policy = '정책 및 제도',
  economy = '경제',
  social = '사회',
  organizatioin = '단체',
  etc = '기타',
}

export interface Keyword {
  _id: string;
  keyword: string;
  explain: string;
  category: category;
  recent: Boolean;
  news: Array<number>;
}

export interface KeywordToView extends Partial<Pick<Keyword, 'keyword' | 'category' | 'recent'>> {}

export interface KeywordInHuman extends KeywordToView {
  category: category.human;
}

export interface KeywordInPolitics extends KeywordToView {
  category: category.politics;
}
export interface KeywordInPolicy extends KeywordToView {
  category: category.policy;
}
export interface KeywordInEconomy extends KeywordToView {
  category: category.economy;
}
export interface KeywordInSocial extends KeywordToView {
  category: category.social;
}
export interface KeywordInOrganization extends KeywordToView {
  category: category.organizatioin;
}
export interface KeywordInEtc extends KeywordToView {
  category: category.etc;
}
