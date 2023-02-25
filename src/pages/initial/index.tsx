import styled from 'styled-components';

import IntroductionComp from '@components/initial/introduction';
import { usePopAnimation } from '@entities/hook/usePopAnimation';

export default function Initial() {
  return (
    <Wrapper>
      <IntroductionComp />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
