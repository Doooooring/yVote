import styled, { keyframes } from 'styled-components';

export default function InitialHeader() {
  return (
    <Wrapper>
      <TitleWrapper>
        <Highlight>Y보트</Highlight>가 필요한 당신들에게
      </TitleWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TitleUp = keyframes`
  0% {
    opacity : 0;
    transform : translateY(5px);
  }
  100% {
    opacity : 1;
    transform : translateY(0px);
  }
`;

const TitleWrapper = styled.div`
  display: inline-block;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px -10px black;
  margin-bottom: 30px;
  font-size: 23px;
  animation-name: ${TitleUp};
  animation-duration: 0.5s;
  animation-duration: linear;
  animation-iteration-count: 1;
  animation-direction: normal;
`;

const Highlight = styled.span`
  color: rgb(61, 152, 247);
  font-weight: 700;
  transition-duration: 0.5s;
`;
