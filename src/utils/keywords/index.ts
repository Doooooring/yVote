import axios from 'axios';

import { category, Keyword, KeywordToView } from '@interfaces/keywords';

import { HOST_URL } from '@assets/url';

interface otherObject {
  _id: category;
  keywords: Array<KeywordToView>;
}

export interface getKeywordsResponse {
  recent: Array<KeywordToView>;
  other: Array<otherObject>;
}

interface getKeywordDetailResponse {}

class KeywordsServices {
  async getKeywords() {
    const response: getKeywordsResponse = await axios.get(`${HOST_URL}/keywords`);
    return response;
  }

  async getKeywordsWithCategory() {}

  async getKeywordDetail(keyword: Keyword['keyword']) {
    const response: getKeywordDetailResponse = await axios.get(`${HOST_URL}/keywords/detail`);
  }
}

export default new KeywordsServices();
