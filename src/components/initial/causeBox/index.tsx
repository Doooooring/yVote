import styled from 'styled-components';

import { useCause } from '@entities/hook/useCause';
import { useNumberIncreasing } from '@entities/hook/useNumberIncreasing';

interface CauseBoxProps {
  cause:
    | 'covid'
    | 'avoid_arguments'
    | 'excessive_news'
    | 'negative_mood'
    | 'unessential'
    | 'untrustworthy';
}

export default function CauseBox({ cause }: CauseBoxProps) {
  const [percent, curImage, curTitle, curColor] = useCause(cause);
  const curPercent = useNumberIncreasing(percent);

  return (
    <Wrapper>
      <PercentWrapper fontColor={`${curColor}`}>{`${curPercent}%`}</PercentWrapper>
      <BodyWrapper>
        <ImageWrapper />
        <Expanded>
          <Image src={curImage} width="70px" height="70px" />
          <ContentsWrapper>
            <TitleWrapper>{`${curTitle}`}</TitleWrapper>
          </ContentsWrapper>
        </Expanded>
      </BodyWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: inline-block;
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding-left: 10px;
`;

interface PercentWrapperProps {
  fontColor: string;
}
const PercentWrapper = styled.div<PercentWrapperProps>`
  width: 100px;
  font-size: 50px;
  font-weight: 600;
  margin-right: 10px;
  color: ${({ fontColor }) => {
    return fontColor;
  }};
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  border-radius: 20px;
`;

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255);
  box-shadow: 0 0 20px -15px black;
  border-radius: 50px;
  position: relative;
  z-index: 1;
`;

const Expanded = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const Image = styled.img`
  background-color: white;
  position: absolute;
  border-radius: 20px;
  left: -85px;
  z-index: 4;
`;

const ContentsWrapper = styled.div`
  display: inline-block;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255);
  box-shadow: 0 0 20px -15px black;
  position: relative;
  z-index: 3;
  left: -40px;
  padding-left: 40px;
  padding-right: 20px;
  border-radius: 0 20px 20px 0;
`;

const TitleWrapper = styled.div`
  font-family: var(--font-cafe);
`;
