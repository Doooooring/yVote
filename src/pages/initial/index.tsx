import styled from 'styled-components';

import Intent from '@components/initial/intent';
import IntroductionComp from '@components/initial/introduction';

export default function Initial() {
  return (
    <Wrapper>
      <IntroductionComp />
      <Intent />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: scroll;
  padding-bottom: 100px;
`;
