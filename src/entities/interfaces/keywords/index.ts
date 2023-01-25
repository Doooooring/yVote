export type category =
  | 'human'
  | 'politics'
  | 'policy'
  | 'economy'
  | 'social'
  | 'organization'
  | 'etc';

export interface Keyword {
  _id: string;
  keyword: string;
  explain: string;
  category: category;
  recent: Boolean;
  news: Array<number>;
}

export interface KeywordToView
  extends Partial<Pick<Keyword, '_id' | 'keyword' | 'category' | 'recent'>> {}

export interface KeywordInHuman extends KeywordToView {
  category: 'human';
}
export interface KeywordInPolitics extends KeywordToView {
  category: 'politics';
}
export interface KeywordInPolicy extends KeywordToView {
  category: 'policy';
}
export interface KeywordInEconomy extends KeywordToView {
  category: 'economy';
}
export interface KeywordInSocial extends KeywordToView {
  category: 'social';
}
export interface KeywordInOrganization extends KeywordToView {
  category: 'organization';
}
export interface KeywordInEtc extends KeywordToView {
  category: 'etc';
}
