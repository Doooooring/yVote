import styled from 'styled-components';

import { curClicked, setCurClicked, newsContent } from '@entities/state';
import { BrickBar } from '@components/common/speechBubble';
import NewsHistory from '../newsHistory';

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
  if (curClicked === undefined) {
    return <div></div>;
  } else {
    return;
    <Wrapper>
      <NewsBoxClose></NewsBoxClose>
      <Body>
        <ContentHead></ContentHead>
        <ContentBody>
          <Summary></Summary>
          <NewsHistory />
        </ContentBody>
      </Body>
    </Wrapper>;
  }
}

const Wrapper = styled.div``;
