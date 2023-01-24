import axios from 'axios';

import { Keyword } from '@interfaces/keywords';

import { HOST_URL } from '@assets/url';

interface KeywordWithCategory {
  _id: Keyword['category'];
  keywords: Array<Keyword>;
}

interface getKeywordsResponse {
  recent: Array<Keyword>;
  other: Array<KeywordWithCategory>;
}

class KeywordsServices {
  async getKeywords() {
    const response: getKeywordsResponse = await axios.get(
      `${HOST_URL}/keywords`,
    );
    return response;
  }

  async getKeywordsWithCategory() {}

  async getKeywordDetail(keyword: Keyword['keyword']) {}
}

export default new KeywordsServices();
