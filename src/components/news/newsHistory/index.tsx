import styled from 'styled-components';

export default function NewsHistory() {
  return (
    <Wrapper>
      <HistoryHead>관련 뉴스 기사</HistoryHead>
      <HistoryExplanation>
        <HistoryDate></HistoryDate>
        <BrickBar />
        <HistorySentences></HistorySentences>
      </HistoryExplanation>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 0;
  padding: 20px;
  margin-top: 10px;
  background-color: rgb(246, 246, 246);
  border-radius: 10px;
`;

const HistoryHead = styled.span`
  font-size: 17px;
  font-weight: 800;
`;

const HistoryExplanation = styled.p`
  display: flex;
  justify-content: row;
  flex-direction: row;
  margin-top: 12px;
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill, 40px);
  align-items: center;
`;

const HistoryDate = styled(NewsGrid)`
  text-align: right;
  margin-right: 20px;
`;
const HistorySentences = styled(NewsGrid)``;
