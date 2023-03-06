import { useMemo, useRef } from 'react';
import styled from 'styled-components';

import { useAnimationEnd } from '@entities/hook/useAnimationEnd';
import { useCause } from '@entities/hook/useCause';
import { useOnScreen } from '@entities/hook/useOnScreen';

export default function Intent() {
  const intentViewer = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(intentViewer);
  const mainSentencePopUpEnd = useAnimationEnd(isOnScreen);

  //type effect
  // const [firstInd, firstComment, firstEnd] = useTypeEffect(
  //   '감정에 휘둘리지 않고 차분히 생각하기 위해서는 환경 조성이 중요하다.',
  //   30,
  //   mainSentencePopUpEnd,
  // );

  // const [secondInd, secondComment, secondEnd] = useTypeEffect(
  //   '공부를 시작하기 전에 휴대폰을 끄고 책상을 정리하는 것과 같은 이치이다.',
  //   30,
  //   firstEnd,
  // );

  return (
    <Wrapper>
      <Column>
        <SubSentenceWrapper state={mainSentencePopUpEnd}>
          <QuotationUp>{`"`}</QuotationUp>
          <SubSentence>
            {'감정에 휘둘리지 않고 차분히 생각하기 위해서는 환경 조성이 중요하다.'}
          </SubSentence>
          <SubSentence>
            {'공부를 시작하기 전에 휴대폰을 끄고 책상을 정리하는 것과 같은 이치이다.'}
          </SubSentence>
          <QuotationDown>{`"`}</QuotationDown>
        </SubSentenceWrapper>
      </Column>
      <Viewer ref={intentViewer} />
    </Wrapper>
  );
}

interface HighlightProps {
  color: string;
  str: string;
}

function Highlight({ color, str }: HighlightProps) {
  return (
    <span
      style={{
        color: color,
      }}
    >
      {str}
    </span>
  );
}

interface ImageBoxProps {
  cause:
    | 'covid'
    | 'avoid_arguments'
    | 'excessive_news'
    | 'negative_mood'
    | 'unessential'
    | 'untrustworthy';
  width: number;
  height: number;
  state: boolean;
}

const Wrapper = styled.div`
  width: 100%;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  position: relative;
  background-color: rgb(61, 152, 247, 0.3); ;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
`;

interface CauseImageProps {
  width: number;
  height: number;
  state: boolean;
}

const CauseImage = styled.img<CauseImageProps>`
  width: ${({ width, state }) => (state ? `${width}px` : 0)};
  height: ${({ height, state }) => (state ? `${height}px` : 0)};
  opacity: ${({ state }) => (state ? 1 : 0)};
  transition-duration: 0.5s;
`;

const Viewer = styled.div`
  height: 30px;
`;

const Comp = styled.div`
  display: inline-block;
  transition-duration: 0.6s;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface MainSentenceWrapper {
  state: boolean;
}

const MainSentenceWrapper = styled(Column)<MainSentenceWrapper>`
  border: 4px dashed rgb(200, 200, 200);
  border-radius: 30px;
  padding: 20px;
  margin-bottom: 50px;
  opacity: ${({ state }) => (state ? 1 : 0)};
  transition-duration: 1s;
`;

const MainSentence = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 5px;
`;

interface SubSentenceWrapperProps {
  state: boolean;
}

const SubSentenceWrapper = styled(Column)<SubSentenceWrapperProps>`
  height: 80px;
  opacity: ${({ state }) => (state ? 1 : 0)};
  transition-duration: 1s;
`;

const SubSentence = styled.p`
  height: 30px;
  font-size: 25px;
  margin-bottom: 5px;
  color: rgb(100, 100, 100);
  font-weight: 600;
`;

const Quotation = styled.p`
  font-size: 35px;
  color: rgb(120, 120, 120);
`;

const QuotationUp = styled(Quotation)``;

const QuotationDown = styled(Quotation)`
  margin-top: 10px;
`;
