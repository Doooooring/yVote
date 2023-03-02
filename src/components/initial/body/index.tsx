import { useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '@assets/img/yvote.png';
import { useAnimationEnd } from '@entities/hook/useAnimationEnd';
import { useOnScreen } from '@entities/hook/useOnScreen';

function AnswerBox(color: string, title: string) {
  return (
    <BoxWrapper color={color}>
      <BoxHeader color={color}>{title}</BoxHeader>
      <BoxBody></BoxBody>
    </BoxWrapper>
  );
}

export default function InitialBody() {
  const navigation = useNavigate();

  const firstComp = useRef(null);
  const firstCompOn = useOnScreen(firstComp);
  const firstCompImgEnd = useAnimationEnd(firstCompOn);
  const firstHeaderEnd = useAnimationEnd(firstCompImgEnd);
  const firstBodyEnd = useAnimationEnd(firstHeaderEnd);
  const firstButtonEnd = useAnimationEnd(firstBodyEnd);

  const colorMap: {
    [key: string]: string;
    covid: string;
    avoid_arguments: string;
    excessive_news: string;
    negative_mood: string;
    unessential: string;
    untrustworthy: string;
  } = useMemo(() => {
    return {
      covid: 'rgb(102, 166, 174)',
      avoid_arguments: 'rgb(160, 181, 128)',
      excessive_news: 'rgb(168, 161, 121)',
      negative_mood: 'rgb(194, 119, 73)',
      unessential: 'rgb(151, 69, 53)',
      untrustworthy: 'rgb(100, 47, 76)',
    };
  }, []);

  return (
    <Wrapper>
      <FirstComp ref={firstComp}>
        <ImgWrapper>
          <LogoImg src={Logo} alt={'hmm'} width="500px" height="500px" state={firstCompImgEnd} />
        </ImgWrapper>
        <FirstBodyWrapper>
          <FirstHeader state={firstHeaderEnd}>
            <Highlight>와이보트</Highlight>는 어떤 서비스 인가요?
          </FirstHeader>
          <FirstBody
            state={firstBodyEnd}
          >{`와이보트는 기성언론의 한계점을 극복하기 위해 시작한 뉴스 큐레이션 서비스입니다. 한계점은 뭐고(자극적 트래픽 유도 ${'->'} 정치적 무관심), 그것을 해결하기 위해 객관적인 기준으로 뉴스 필터링하고 가공하여 접근성을 높인다`}</FirstBody>
          <ButtonWrapper state={firstButtonEnd}>
            <NewsButton
              onClick={() => {
                navigation('/news');
              }}
            >
              뉴스 모아보기
            </NewsButton>
            <KeywordButton
              onClick={() => {
                navigation('/keywords');
              }}
            >
              키워드 모아보기
            </KeywordButton>
          </ButtonWrapper>
        </FirstBodyWrapper>
      </FirstComp>

      {Object.keys(colorMap).map((key) => {
        return AnswerBox(colorMap[key], '테스트 문구');
      })}
    </Wrapper>
  );
}

const Highlight = styled.span`
  color: rgb(61, 152, 247);
  font-weight: 700;
  transition-duration: 0.5s;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled(Column)`
  align-items: center;
  height: 12000px;
  gap: 20px;
`;

const FirstComp = styled(Row)`
  background: transparent;
`;

const ImgWrapper = styled(Column)`
  align-items: center;
  justify-content: center;
`;

interface LogoImgProps {
  state: boolean;
}

const LogoImg = styled.img<LogoImgProps>`
  width: ${({ width, state }) => (state ? `${width}px` : 0)};
  height: ${({ height, state }) => (state ? `${height}px` : 0)};
  opacity: ${({ state }) => (state ? 1 : 0)};
  transition-duration: 1s;
`;

const FirstBodyWrapper = styled(Column)`
  height: 500px;
  width: 500px;
  padding-top: 100px;
`;

interface FirstHeader {
  state: boolean;
}

const FirstHeader = styled.h1<FirstHeader>`
  display: inline;
  width: 400px;
  opacity: ${({ state }) => (state ? 1 : 0)};
  border-bottom: 3px solid rgb(61, 152, 247);
  transition-duration: 1s;
`;

interface FirstBody {
  state: boolean;
}

const FirstBody = styled.div<FirstBody>`
  font-size: 20px;
  padding-top: 20px;
  margin-bottom: 40px;
  opacity: ${({ state }) => (state ? 1 : 0)};
  transition-duration: 1s;
`;

interface ButtonWrapperProps {
  state: boolean;
}

const ButtonWrapper = styled(Row)<ButtonWrapperProps>`
  opacity: ${({ state }) => (state ? 1 : 0)};
  gap: 30px;
  transition-duration: 1s;
`;

const NavigationButton = styled.button`
  width: 130px;
  height: 55px;
  border: 0;
  border-radius: 20px;
  box-shadow: 0 0 20px -10px black;
  color: white;
  font-size: 15px;
  font-weight: 700;
  background-color: rgba(61, 152, 247);
  opacity: 0.5;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const NewsButton = styled(NavigationButton)``;

const KeywordButton = styled(NavigationButton)``;

interface BoxWrapper {
  color: string;
}

const BoxWrapper = styled.div<BoxWrapper>`
  width: 400px;
  height: 400px;
  border-radius: 20px;
  box-shadow: 0 0 15px -10px black;
  overflow: hidden;
`;

interface BoxHeader {
  color: string;
}

const BoxHeader = styled(Row)<BoxHeader>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  color: white;
  font-size: 30px;
  font-weight: 600;
  background-color: ${({ color }) => color};
  padding-left: 20px;
`;

const BoxBody = styled.div``;
