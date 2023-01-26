import axios from 'axios';

import { HOST_URL } from '@assets/url';
import { category, Keyword, KeywordOnDetail, KeywordToView } from '@interfaces/keywords';
import { Preview } from '@interfaces/news';

interface otherObject {
  _id: category;
  keywords: Array<KeywordToView>;
}

export interface getKeywordsResponse {
  recent: Array<KeywordToView>;
  other: Array<otherObject>;
}

interface getKeywordDetailResponse {
  keyword: KeywordOnDetail;
  previews: Array<Preview>;
}

class KeywordsServices {
  async getKeywords() {
    const response = await axios.get(`${HOST_URL}/keywords`);
    const keywords: getKeywordsResponse = response.data;
    return keywords;
  }

  async getKeywordsWithCategory() {
    return 0;
  }

  async getKeywordDetail(keyword: string, curNum: number) {
    const response = await axios.get(
      `${HOST_URL}/keywords/detail?keyName=${keyword}&curNum=${curNum}`,
    );
    const keywordDetail: getKeywordDetailResponse = response.data;
    return keywordDetail;
  }
}

export default new KeywordsServices();
