import axios from 'axios';

import { HOST_URL } from '@assets/url';
import { Preview } from '@interfaces/news';

class NewsServices {
  async getPreviews(curNum: number) {
    const response = await axios.get(`${HOST_URL}/news/preview?curNum=${curNum}`);
    const data: Array<Preview> = response.data;
    return data;
  }

  async getNewsContent() {
    return 0;
  }
}

export default new NewsServices();
