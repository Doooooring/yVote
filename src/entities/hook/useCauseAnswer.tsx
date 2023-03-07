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
  avoid_arguments: `"정치를 알게 되면 세상의 절반과 불편해지는 느낌이에요"`,
  excessive_news: `"너무 많아서 내용을 따라가기 버거워요"`,
  negative_mood: `"정치 뉴스를 보고 나면 기분이 안 좋아요"`,
  unessential: `"그래서 결국 뭐가 달라지는지 궁금하네요."`,
  untrustworthy: `"언론사마다 말이 달라서 섣불리 신뢰하기 두려워요"`,
};

const answerMap = {
  covid: `사람들이 가장 싫어하는 뉴스 분야는 정치라고 합니다. 그럼에도 불구하고 우리의 삶과 가장 직접적으로 연결되는 뉴스는 정치입니다. 이러한 아쉬운 결과가 나오는 데에는 어떠한 요인이 있었을까요?`,
  avoid_arguments: `많은 사람들에게 정치 는 피곤하고 소모적인 논쟁의 대명사입니다. 정치 이야기가 시작되면 언론에서 본 정보를 바탕으로 각자가 지지하지 않는 진영에 대한 조롱과 비난이 이어집니다. 하지만 누군가를 미워하는 것은 정치의 본질이 아니며 생산적인 논의에 큰 도움이 되지도 않습니다. 그렇기 때문에 저희는 사람을 미워하게 만드는 대신 건설적인 논의를 이끌어내는 뉴스 서비스를 만들 수 있을지 고민하게 되었습니다`,
  excessive_news: `정치 뉴스는 각종 의혹 수사 재판의 진행 상황 그리고 심지어 정치인들의 발언 하나까지 모두 개별적인 기사로 나오기 때문에 양이 방대합니다. 이는 과거와는 달리 무제한으로 그리고 실시간으로 뉴스가 업로드되는 온라인 매체의 발전과 함께 탄생한 문제입니다. 한편 그 양을 필요한 만큼으로 줄이려는 노력은 부족했기 때문에 뉴스를 보는 시간이 아까운 현대인들에게는 부담스러운 영역으로 인식되고 있습니다`,
  negative_mood: `대부분의 정치 뉴스는 정치인들에 대한 부정적인 내용입니다. 정치인들은 상대 정치인의 이미지를 깎아먹는 것이 가장 효과적인 전략이라고 생각하며 언론사들은 그러한 내용을 담은 자극적인 기사가 클릭 수에 가장 직접적인 도움이 된다고 생각합니다. 하지만 최선의 정치적 결정조차도 그에 따르는 비용만 강조된다면 부정적인 뉴스가 될 수가 있기에 구조적으로 정치 뉴스는 부정적인 내용이 많을 수밖에 없었던 것입니다`,
  unessential: `사실 뉴스 구독 뿐 만 아니라 정치 참여와 관련된 모든 행위에 대해 이 의문이 드는 것은 부정할 수 없는 사실입니다. 나 한명의 참여가 결과를 바꿀 가능성은 희박합니다. 그럼에도 불구하고 많은 사람들이 여전히 투표 등 정치적 행동에 참여하고 있습니다. 이러한 노력들이 헛되지 않도록 하기 위해 이 서비스를 통해 여러분에게 다음의 질문을 던집니다. 투표하기 전에 생각했나요?`,
  untrustworthy: `최근 가짜 뉴스가 사회적 문제로 대두되고 팩트 체크 서비스가 유행이지만 사실 신흥매체의 개인 소규모 언론을 제외한 대부분의 기성 언론은 없는 말을 지어내지 않습니다. 언론사별로 말이 다른 경우는 일반적으로 정보의 정확성 문제가 아니라 가치관의 차이때문에 발생합니다. 그렇기 때문에 지금 우리에게 필요한 것은 팩트 체크 서비스가 아니라 스스로가 중요하게 생각하는 가치를 생각해볼 수 있는 환경과 경험입니다`,
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
