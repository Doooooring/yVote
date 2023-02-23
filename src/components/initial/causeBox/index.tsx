import styled from 'styled-components';

import { useNumberIncreasing } from '@entities/hook/useNumberIncreasing';

interface CauseBoxProps {
  cause:
    | 'covid'
    | 'avoid_arguments'
    | 'excessive_news'
    | 'negative_mood'
    | 'unessential'
    | 'untrustworthy';
  percent: number;
}

export default function CauseBox({ cause, percent }: CauseBoxProps) {
  const curPercent = useNumberIncreasing(percent);
  return <Wrapper>{curPercent}</Wrapper>;
}

const Wrapper = styled.div``;

const ImageWrapper = styled.div``;

const TitleWrapper = styled.div``;
