import { News, NewsOrder } from '@entities/interfaces/news';

export type vacant = boolean | NewsOrder;
export type setVacant = (vacant: vacant) => void;
