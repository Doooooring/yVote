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
  keyword: string;
  explain: string;
  category: category;
  recent: Boolean;
  news: Array<number>;
}

export interface KeywordInHuman extends Keyword {
  category: category.human;
}

export interface KeywordInPolitics extends Keyword {
  category: category.politics;
}
export interface KeywordInPolicy extends Keyword {
  category: category.policy;
}
export interface KeywordInEconomy extends Keyword {
  category: category.economy;
}
export interface KeywordInSocial extends Keyword {
  category: category.social;
}
export interface KeywordInOrganization extends Keyword {
  category: category.organizatioin;
}
export interface KeywordInEtc extends Keyword {
  category: category.etc;
}
