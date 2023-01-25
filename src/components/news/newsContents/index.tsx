import styled from 'styled-components';

import { BrickBar } from '@components/common/figure';
import Journals from '@components/news/newsContents/journals';
import NewsHistory from '@components/news/newsContents/newsHistory';
import VoteBox from '@components/news/newsContents/voteBox';
import { curClicked, newsContent, setCurClicked } from '@entities/state';

interface NewsContentProps {
  curClicked: curClicked;
  setCurClicked: setCurClicked;
  newsContent: newsContent;
}

export default function NewsContent({ curClicked, setCurClicked, newsContent }: NewsContentProps) {
  if (curClicked === undefined || newsContent === undefined) {
    return <div></div>;
  } else {
    return (
      <Wrapper>
        <NewsBoxClose>
          <input
            type="button"
            style={{ display: 'none' }}
            id="close-button"
            onClick={() => {
              setCurClicked(undefined);
            }}
          ></input>
          <CloseButton htmlFor="close-button"></CloseButton>
        </NewsBoxClose>
        <Body>
          <ContentHead>{newsContent.title}</ContentHead>
          <ContentBody>
            <Summary>{newsContent.summary}</Summary>
            <NewsHistory news={newsContent.news} />
            <Journals journals={newsContent.journals} />
            <VoteBox
              state={newsContent.state}
              opinions={newsContent.opinions}
              votes={newsContent.votes}
            />
          </ContentBody>
        </Body>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 1000px;
  width: 500px;
  background-color: white;
  border-width: 0px;
  border-color: black;
  border-radius: 10px;
  border-style: solid;
  padding-bottom: 20px;
  text-align: left;
  position: absolute;
  overflow: scroll;
`;
const NewsBoxClose = styled.div`
  padding-top: 10px;
  padding-right: 20px;
  text-align: right;
`;
const CloseButton = styled.label`
  &:hover {
    cursor: pointer;
  }
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  line-height: 150%;
  text-align: left;
  position: relative;
  background-color: white;
`;
const ContentHead = styled.h1`
  padding-left: 20px;
  margin-bottom: 8px;
  font-size: 21px;
  font-weight: 600;
`;
const ContentBody = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;
const Summary = styled.div`
  display: inline-block;
  font-size: 20px;
  font-weight: 550;
  margin-bottom: 5%;
  font-family: 'summary-font';
  word-break: break-all;
`;
