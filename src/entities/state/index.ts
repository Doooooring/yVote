import { News, Preview } from '@entities/interfaces/news';
import {category, Keyword } from '@interfaces/keywords';

// news page State
export type curClicked = undefined | News['order'];
export type setCurClicked = (curClicked: curClicked) => void;

export type newsContent = undefined | News;
export type setNewsContent = (newsContent: newsContent) => void;

export type curPreviewsList = Preview[];
export type setCurPreviewsList = (curNewsList: curPreviewsList) => void;

// keyword page State
export interface recentKeyword extends Keyword {
  recent: true;
}
export type recentKeywords = Array<recentKeyword>;
export type setRecentKeywords = (recentKeyword: recentKeyword) => void;
