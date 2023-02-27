import { useMemo, useRef } from 'react';
import styled from 'styled-components';

import { useCause } from '@entities/hook/useCause';
import { useOnScreen } from '@entities/hook/useOnScreen';

function Highlight({ color, str }: { color: string; str: string }) {
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

export default function Intent() {
  const intentViewer = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(intentViewer);

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

  return (
    <Wrapper>
      <Viewer />
      <Row>
        <Comp state={true}>
          <ImageBox cause={'covid'} width={70} height={70} />
        </Comp>
        <Comp state={true}>
          <ImageBox cause={'avoid_arguments'} width={70} height={70} />
        </Comp>
        <Comp state={true}>
          <ImageBox cause={'excessive_news'} width={70} height={70} />
        </Comp>
        <Comp state={true}>
          <ImageBox cause={'negative_mood'} width={70} height={70} />
        </Comp>
        <Comp state={true}>
          <ImageBox cause={'unessential'} width={70} height={70} />
        </Comp>
        <Comp state={true}>
          <ImageBox cause={'untrustworthy'} width={70} height={70} />
        </Comp>
      </Row>
      <Column>
        <p>
          <Highlight color={colorMap['avoid_arguments']} str={'미래를 위한 논의'} />
          에
          <Highlight color={colorMap['unessential']} str={' 도움이 되는 '} />
          <Highlight color={colorMap['excessive_news']} str={'최소한의 '} />
          <Highlight color={colorMap['covid']} str={'정치 뉴스'} />
          만을
        </p>
        <p>
          <Highlight color={colorMap['negative_mood']} str={'보기 좋게 '} />
          제공하는
          <Highlight color={colorMap['untrustworthy']} str={' 이성적인 '} />
          서비스가 필요하다!
        </p>
        <p>“감정에 휘둘리지 않고 차분히 생각하기 위해서는 환경 조성이 중요하다.</p>
        <p>공부를 시작하기 전에 휴대폰을 끄고 책상을 정리하는 것과 같은 이치이다.”</p>
      </Column>
      <Column></Column>
    </Wrapper>
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
}

function ImageBox({ cause, width, height }: ImageBoxProps) {
  const [percent, curImage, curTitle, curColor] = useCause(cause);

  return (
    <ImageWrapper>
      <img src={curImage} width={`${width}px`} height={`${height}px`} />
    </ImageWrapper>
  );
}

const Wrapper = styled.div`
  height: 800px;
  position: relative;
`;

const Viewer = styled.div``;

const ImageWrapper = styled.div`
  width: 70px;
  height: 70px;
`;

interface CompProps {
  state: boolean;
}

const Comp = styled.div<CompProps>`
  display: inline-block;
  opacity: ${({ state }) => {
    return state ? 1 : 0;
  }};
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
