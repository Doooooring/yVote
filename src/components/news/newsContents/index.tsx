import styled from 'styled-components';

import { curClicked, setCurClicked, newsContent } from '@entities/state';
import { BrickBar } from '@/components/common/figure';
import NewsHistory from '../newsHistory';
import Journals from '../journals';

interface NewsContentProps {
  curClicked: curClicked;
  setCurClicked: setCurClicked;
  newsContent: newsContent;
}

export default function NewsContent({
  curClicked,
  setCurClicked,
  newsContent,
}: NewsContentProps) {
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
          <ContentHead></ContentHead>
          <ContentBody>
            <Summary></Summary>
            <NewsHistory news={newsContent.news} />
            <Journals journals={newsContent.journals}/>
          </ContentBody>
        </Body>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;
const NewsBoxClose = styled.div``;
const CloseButton = styled.label``;
const Body = styled.div``;
const ContentHead = styled.h1``;
const ContentBody = styled.div``;
const Summary = styled.div``;
