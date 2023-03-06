import { useRef } from 'react';
import styled, { keyframes } from 'styled-components';

import { useAnimationEnd } from '@entities/hook/useAnimationEnd';
import { useCauseAnswer } from '@entities/hook/useCauseAnswer';
import { useOnScreen } from '@entities/hook/useOnScreen';

interface AnswerProps {
  cause:
    | 'covid'
    | 'avoid_arguments'
    | 'excessive_news'
    | 'negative_mood'
    | 'unessential'
    | 'untrustworthy';
  left: boolean;
}

export default function AnswerLabel({ cause, left }: AnswerProps) {
  const viewerRef = useRef(null);
  const viewOnScreen = useOnScreen(viewerRef);
  const isOn = useAnimationEnd(viewOnScreen, 10);
  const [curImage, curTitle, curColor, curAnswer] = useCauseAnswer(cause);
  return left ? (
    <Wrapper>
      <BodyWrapper>
        <ImgWrapper>
          <Img src={curImage} />
          <CircleWrapper viewBox="1000 1000" left={left}>
            <Circle cx="200" cy="150" r="140" color={curColor} left={left} state={isOn} />
            <Path stroke={curColor} strokeWidth="6" d={`M 340 150 H ${isOn ? 400 : 340}`} />
          </CircleWrapper>
        </ImgWrapper>
        <AnswerBox color={curColor} title={curTitle} body={curAnswer} state={isOn} />
      </BodyWrapper>
      <Viewer ref={viewerRef} />
      <Back color={curColor} state={isOn} />
    </Wrapper>
  ) : (
    <Wrapper>
      <BodyWrapper>
        <AnswerBox color={curColor} title={curTitle} body={curAnswer} state={isOn} />
        <ImgWrapper>
          <Img src={curImage} />
          <CircleWrapper viewBox="1000 1000" left={left}>
            <Circle cx="200" cy="150" r="140" color={curColor} left={left} state={isOn} />
            <Path stroke={curColor} strokeWidth="6" d={`M 340 150 H ${isOn ? 400 : 340}`} />
          </CircleWrapper>
        </ImgWrapper>
      </BodyWrapper>
      <Viewer ref={viewerRef} />
      <Back color={curColor} state={isOn} />
    </Wrapper>
  );
}

function AnswerBox({
  color,
  title,
  body,
  state,
}: {
  color: string;
  title: string;
  body: string;
  state: boolean;
}) {
  const isOn = useAnimationEnd(state, 600);
  return (
    <BoxWrapper color={color} state={state}>
      <BoxHeader color={color} state={isOn}>
        {title}
      </BoxHeader>
      <BoxBody state={isOn}>
        {body.split('.').map((sentence, idx) => {
          return <p key={idx}>{sentence}</p>;
        })}
      </BoxBody>
    </BoxWrapper>
  );
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled(Column)`
  width: 100%;
  height: 500px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

interface BackProps {
  color: string;
  state: boolean;
}

const Back = styled.div<BackProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ color, state }) => (state ? color : 'rgb(255, 255, 255)')};
  opacity: 0.1;
  transition-duration: 1s;
  position: absolute;
  top: 0;
  left: 0;
`;

const BodyWrapper = styled(Row)`
  height: 300px;
`;

const ImgWrapper = styled(Row)`
  width: 400px;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: visible;
`;

const Img = styled.img``;

interface CircleWrapper {
  left: boolean;
}

const CircleWrapper = styled.svg<CircleWrapper>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ left }) => (left ? null : 'rotateY(180deg)')};
`;

interface CircleProps {
  color: string;
  left: boolean;
  state: boolean;
}

const Circle = styled.circle<CircleProps>`
  stroke: ${({ color }) => color};
  stroke-width: 6;
  fill: transparent;
  stroke-dasharray: 1000;
  stroke-dashoffset: ${({ state, left }) => (left ? (state ? 0 : 1000) : state ? 0 : 1000)};
  transition-duration: 2s;
`;

const Path = styled.path`
  transition-delay: 1.1s;
  transition-duration: 1s;
`;

interface BoxWrapper {
  color: string;
  state: boolean;
}

const BoxWrapper = styled.div<BoxWrapper>`
  width: ${({ state }) => (state ? `700px` : 0)};
  height: ${({ state }) => (state ? `auto` : 0)};
  opacity: ${({ state }) => (state ? 1 : 0)};
  transition-duration: 1s;
  border-radius: 15px;
  box-shadow: 0 0 15px -10px black;
  overflow: hidden;
`;

interface BoxHeader {
  color: string;
  state: boolean;
}

const BoxHeader = styled(Row)<BoxHeader>`
  display: flex;
  align-items: center;
  width: ${({ state }) => (state ? `auto` : 0)};
  height: ${({ state }) => (state ? `60px` : 0)};
  opacity: ${({ state }) => (state ? 1 : 0)};
  transition-duration: 1s;
  color: white;
  font-size: 30px;
  font-weight: 600;
  background-color: ${({ color }) => color};
  padding-left: 20px;
`;

interface BoxBody {
  state: boolean;
}

const BoxBody = styled(Column)<BoxBody>`
  width: ${({ state }) => (state ? `auto` : 0)};
  height: ${({ state }) => (state ? `auto` : 0)};
  opacity: ${({ state }) => (state ? 1 : 0)};
  transition-duration: 0.5s;
  padding: 20px;
  color: rgb(100, 100, 100);
  font-size: 20px;
  font-weight: 600;
  gap: 15px;
`;

const Viewer = styled.div`
  width: 100%;
  height: 10px;
`;
