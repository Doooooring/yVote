import styled from 'styled-components';

export default function Answer() {
  return <Wrapper></Wrapper>;
}

function AnswerBox(color: string, title: string) {
  return (
    <BoxWrapper color={color}>
      <BoxHeader color={color}>{title}</BoxHeader>
      <BoxBody></BoxBody>
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

const Wrapper = styled.div``;

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
