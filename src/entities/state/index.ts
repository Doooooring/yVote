import { News, Preview } from '@entities/interfaces/news';

export type curClicked = undefined | News['order'];
export type setCurClicked = (curClicked: curClicked) => void;

export type newsContent = undefined | News;
export type setNewsContent = (newsContent: newsContent) => void;

export type curPreviewsList = Preview[];
export type setCurPreviewsList = (curNewsList: curPreviewsList) => void;
