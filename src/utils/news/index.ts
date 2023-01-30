import axios from 'axios';

import { HOST_URL } from '@assets/url';
import { News, Preview } from '@interfaces/news';

class NewsServices {
  async getPreviews(curNum: number, keyword: string | null = null) {
    const response = await axios.get(
      `${HOST_URL}/news/preview?curNum=${curNum}&keyword=${keyword}`,
    );
    const data: Array<Preview> = response.data;
    return data;
  }

  async getNewsContent(id: Preview['_id']) {
    const response = await axios.get(`${HOST_URL}/news/detail?id=${id}`);
    const data: News = response.data;
    return data;
  }
}

export default new NewsServices();
