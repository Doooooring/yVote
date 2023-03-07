import { useMemo, useRef } from 'react';
import styled from 'styled-components';

import quoteDown from '@assets/img/quoteDown.png';
import quoteUpper from '@assets/img/quoteUp.png';
import { useAnimationEnd } from '@entities/hook/useAnimationEnd';
import { useOnScreen } from '@entities/hook/useOnScreen';

export default function Intent() {
  const intentViewer = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(intentViewer);
  const mainSentencePopUpEnd = useAnimationEnd(isOnScreen, 50);
  const topLineEnd = useAnimationEnd(mainSentencePopUpEnd, 300);
  const quoteUpperEnd = useAnimationEnd(mainSentencePopUpEnd, 40);
  const rightLineEnd = useAnimationEnd(topLineEnd, 300);
  const bottomLineEnd = useAnimationEnd(rightLineEnd, 300);
  const quoteUnderEnd = useAnimationEnd(bottomLineEnd, 40);
  const leftLineEnd = useAnimationEnd(bottomLineEnd, 300);
  const sentenceUpEnd = useAnimationEnd(leftLineEnd);
  const sentenceDownEnd = useAnimationEnd(sentenceUpEnd);

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
          <SubSentence state={sentenceUpEnd}>
            {'감정에 휘둘리지 않고 차분히 생각하기 위해서는 환경 조성이 중요하다'}
          </SubSentence>
          <SubSentence state={sentenceDownEnd}>
            {'공부를 시작하기 전에 휴대폰을 끄고 책상을 정리하는 것과 같은 이치이다'}
          </SubSentence>
          <Top state={topLineEnd}></Top>
          <Right state={rightLineEnd}></Right>
          <Bottom state={bottomLineEnd}></Bottom>
          <Left state={leftLineEnd}></Left>
          <QuoteUpper state={quoteUpperEnd}>
            <img src={quoteUpper} width="80px" height="80px" />
          </QuoteUpper>
          <QuoteUnder state={quoteUnderEnd}>
            <img src={quoteDown} width="80px" height="80px" />
          </QuoteUnder>
        </SubSentenceWrapper>
      </Column>
      <Viewer ref={intentViewer} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-width: 800px;
  height: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
`;

const Viewer = styled.div`
  height: 30px;
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
  margin-bottom: 0px;
  opacity: ${({ state }) => (state ? 1 : 0)};
  transition-duration: 1s;
`;

interface SubSentenceWrapperProps {
  state: boolean;
}

const SubSentenceWrapper = styled(Column)<SubSentenceWrapperProps>`
  width: 1200px;
  height: 300px;
  opacity: ${({ state }) => (state ? 1 : 0)};
  transition-duration: 1s;
  padding: 40px;
  border-radius: 50px;
  gap: 30px;
  position: relative;
`;

interface SubSentenceProps {
  state: boolean;
}

const SubSentence = styled.p<SubSentenceProps>`
  opacity: ${({ state }) => (state ? 1 : 0)};
  transform: ${({ state }) => (state ? `translateY(0)` : `translateY(30px)`)};
  transition-duration: 1s;
  height: 30px;
  font-size: 35px;
  color: rgb(123, 174, 229);
  font-weight: 700;
`;

interface Border {
  state: boolean;
}

const Border = styled.span<Border>`
  background-color: rgb(123, 174, 229);
  position: absolute;
`;

const Horizontal = styled(Border)`
  height: 5px;
  width: ${({ state }) => (state ? '1200px' : '0px')};
  transition-duration: 0.4s;
`;
const Vertical = styled(Border)`
  width: 5px;
  height: ${({ state }) => (state ? '300px' : '0px')};
  transition-duration: 0.4s;
`;

const Top = styled(Horizontal)`
  top: 0;
  left: 0;
`;
const Right = styled(Vertical)`
  top: 0;
  right: 0;
`;
const Bottom = styled(Horizontal)`
  bottom: 0;
  right: 0;
`;
const Left = styled(Vertical)`
  bottom: 0;
  left: 0;
`;

interface Quote {
  state: boolean;
}

const Quote = styled.div<Quote>`
  position: absolute;
  text-align: center;
  width: 90px;
  height: 90px;
  background-color: rgb(245, 245, 245);
  opacity: ${({ state }) => (state ? 1 : 0)};
`;

const QuoteUpper = styled(Quote)`
  top: -40px;
  left: 50px;
`;

const QuoteUnder = styled(Quote)`
  bottom: -40px;
  right: 50px;
`;
