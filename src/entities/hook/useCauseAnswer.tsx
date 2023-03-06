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

const colorMap = {
  covid: 'rgb(102, 166, 174)',
  avoid_arguments: 'rgb(160, 181, 128)',
  excessive_news: 'rgb(168, 161, 121)',
  negative_mood: 'rgb(194, 119, 73)',
  unessential: 'rgb(151, 69, 53)',
  untrustworthy: 'rgb(100, 47, 76)',
};

const titleMap = {
  covid: `"정치 뉴스 싫어요, 어려워요"`,
  avoid_arguments: `""`,
  excessive_news: `""`,
  negative_mood: `""`,
  unessential: `""`,
  untrustworthy: `""`,
};

const answerMap = {
  covid: `사람들이 가장 싫어하는 뉴스 분야는 정치라고 합니다. 그럼에도 불구하고 우리의 삶과 가장 직접적으로 연결되는 뉴스는 정치입니다. 이러한 아쉬운 결과가 나오는 데에는 어떠한 요인이 있었을까요?`,
  avoid_arguments: `놀랍게도(놀랍지 않나?) 정치 뉴스의 대부분은 상대편에 대한 네거티브입니다. 왜냐하면 정치인 입장에서는 상대 정치인에 대한 네거티브가 가장 효과적이며, 언론사의 입장에서는 자극적인 네거티브 기사가 클릭수에 가장 직접적인 도움이 되기 때문입니다. 한편, 모든 정치적 결정에는 비용이 존재하기 때문에, 실제로 꽤 잘한 결정임에도 불구하고 상대의 결정에 따르는 비용을 강조하며 비판하기 마련입니다.`,
  excessive_news: `정치 뉴스는 한번 읽기 시작하면 끝이 없기도 합니다. 각종 의혹, 수사, 재판의 진행상황 그리고 심지어는 정치인의 발언 하나하나까지 개별적인 기사로 나오기도 합니다. 이는 과거와 달리 무제한으로, 실시간으로 뉴스를 업로드할 수 있는 온라인 매체의 발전과 함께 심화된 문제입니다. 이렇게 끊임 없이 쏟아지는 정치 뉴스를 우리느 (어떤 기준으로) 어디까지 읽고 끊어야하나 고민이 될 수 밖에 없습니다.`,
  negative_mood: `얼굴 붉히는 일이 없는 환경의 뉴스 서비스 부재`,
  unessential: `차분하게 내 생각을 정리할 수 있는 환경의 뉴스 서비스 부재`,
  untrustworthy: ``,
};

export function useCauseAnswer(
  cause:
    | 'covid'
    | 'avoid_arguments'
    | 'excessive_news'
    | 'negative_mood'
    | 'unessential'
    | 'untrustworthy',
): [string, string, string, string] {
  const curImage = useMemo(() => imgMap[cause], []);
  const curTitle = useMemo(() => titleMap[cause], []);
  const curColor = useMemo(() => colorMap[cause], []);
  const curAnswer = useMemo(() => answerMap[cause], []);

  return [curImage, curTitle, curColor, curAnswer];
}
