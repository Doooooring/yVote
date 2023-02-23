import styled from 'styled-components';

import Header from '@components/common/header';
import CauseBox from '@components/initial/causeBox';

export default function Initial() {
  return (
    <Wrapper>
      <CauseBox cause="covid" percent={50} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 200px;
`;
