import styled from 'styled-components';

import InitialBody from '@components/initial/body';
import InitialHeader from '@components/initial/header';
import Intent from '@components/initial/intent';
import IntroductionComp from '@components/initial/introduction';

export default function Initial() {
  return (
    <Wrapper>
      <InitialHeader />
      <IntroductionComp />
      <Intent />
      <InitialBody />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: scroll;
  padding-top: 110px;
  padding-bottom: 100px;
`;
