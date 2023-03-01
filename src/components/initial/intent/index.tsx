import { useMemo, useRef } from 'react';
import styled from 'styled-components';

import { useAnimationEnd } from '@entities/hook/useAnimationEnd';
import { useCause } from '@entities/hook/useCause';
import { useOnScreen } from '@entities/hook/useOnScreen';
import { useTypeEffect } from '@entities/hook/useTypeEffect';

export default function Intent() {
  const intentViewer = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(intentViewer);

  const imagePopUpEnd = useAnimationEnd(isOnScreen);
  const mainSentencePopUpEnd = useAnimationEnd(imagePopUpEnd);

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

  const colorMap = useMemo(() => {
    return {
      covid: 'rgb(102, 166, 174)',
      avoid_arguments: 'rgb(160, 181, 128)',
      excessive_news: 'rgb(168, 161, 121)',
      negative_mood: 'rgb(194, 119, 73)',
      unessential: 'rgb(151, 69, 53)',
      untrustworthy: 'rgb(100, 47, 76)',
    };
  }, []);

  const ImageSize = useMemo(() => {
    return 90;
  }, []);

  return (
    <Wrapper>
      <Row>
        <Comp>
          <ImageBox
            cause={'avoid_arguments'}
            width={ImageSize}
            height={ImageSize}
            state={isOnScreen}
          />
        </Comp>
        <Comp>
          <ImageBox cause={'unessential'} width={ImageSize} height={ImageSize} state={isOnScreen} />
        </Comp>
        <Comp>
          <ImageBox
            cause={'excessive_news'}
            width={ImageSize}
            height={ImageSize}
            state={isOnScreen}
          />
        </Comp>
        <Comp>
          <ImageBox cause={'covid'} width={ImageSize} height={ImageSize} state={isOnScreen} />
        </Comp>
        <Comp>
          <ImageBox
            cause={'negative_mood'}
            width={ImageSize}
            height={ImageSize}
            state={isOnScreen}
          />
        </Comp>
        <Comp>
          <ImageBox
            cause={'untrustworthy'}
            width={ImageSize}
            height={ImageSize}
            state={isOnScreen}
          />
        </Comp>
      </Row>
      <Viewer ref={intentViewer} />
      <Column>
        <MainSentenceWrapper state={imagePopUpEnd}>
          <MainSentence>
            <Highlight color={colorMap['avoid_arguments']} str={'미래를 위한 논의'} />
            에
            <Highlight color={colorMap['unessential']} str={' 도움이 되는 '} />
            <Highlight color={colorMap['excessive_news']} str={'최소한의 '} />
            <Highlight color={colorMap['covid']} str={'정치 뉴스'} />
            만을
          </MainSentence>
          <MainSentence>
            <Highlight color={colorMap['negative_mood']} str={'보기 좋게 '} />
            제공하는
            <Highlight color={colorMap['untrustworthy']} str={' 이성적인 '} />
            서비스가 필요하다!
          </MainSentence>
        </MainSentenceWrapper>
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

function ImageBox({ cause, width, height, state }: ImageBoxProps) {
  const [percent, curImage, curTitle, curColor] = useCause(cause);

  return (
    <ImageWrapper>
      <CauseImage src={curImage} width={width} height={height} state={state} />
    </ImageWrapper>
  );
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
  background-color: rgba(100, 100, 100, 0.1);
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
