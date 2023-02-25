import { useMemo } from 'react';

import avoidArgumentsImg from '@assets/img/avoid_arguments.png';
import covidImg from '@assets/img/covid.png';
import excessiveNewsImg from '@assets/img/excessive_news.png';
import negativeMoodImg from '@assets/img/negative_mood.png';
import unessentialImg from '@assets/img/unessential.png';
import untrustworthyImg from '@assets/img/untrustworthy.png';

const imgMap = {
  covid: covidImg,
  avoid_arguments: avoidArgumentsImg,
  excessive_news: excessiveNewsImg,
  negative_mood: negativeMoodImg,
  unessential: unessentialImg,
  untrustworthy: untrustworthyImg,
};

const percentMap = {
  covid: 43,
  avoid_arguments: 17,
  excessive_news: 29,
  negative_mood: 36,
  unessential: 16,
  untrustworthy: 29,
};

const colorMap = {
  covid: 'rgb(102, 166, 174)',
  avoid_arguments: 'rgb(160, 181, 128)',
  excessive_news: 'rgb(168, 161, 121)',
  negative_mood: 'rgb(194, 119, 73)',
  unessential: 'rgb(151, 69, 53)',
  untrustworthy: 'rgb(100, 47, 76)',
};

const titleMap = {
  covid: `"맨날 코로나랑 정치 애기 뿐이라.."`,
  avoid_arguments: `"논쟁에 참여하고 싶지 않습니다"`,
  excessive_news: `"그냥 너무 많아요.. 어디서 부터 읽어야 할지 모르겠어요"`,
  negative_mood: `"매번 부정적 기사 뿐이라 괜히 기분 안좋아"`,
  unessential: `"그거 알아서 뭐함. 알빠노?"`,
  untrustworthy: `"가짜뉴스니.. 팩트체크니.. 말도 다 다르고 뭐가 뭔지 모르겠네요."`,
};

export function useCause(
  cause:
    | 'covid'
    | 'avoid_arguments'
    | 'excessive_news'
    | 'negative_mood'
    | 'unessential'
    | 'untrustworthy',
): [number, string, string, string] {
  const percent = useMemo(() => percentMap[cause], []);
  const curImage = useMemo(() => imgMap[cause], []);
  const curTitle = useMemo(() => titleMap[cause], []);
  const curColor = useMemo(() => colorMap[cause], []);

  return [percent, curImage, curTitle, curColor];
}
