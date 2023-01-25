import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import KeywordBox from '@components/keywords/categoryGrid';
import SearchBox from '@components/keywords/searchBox';
import NewsContent from '@components/news/newsContents';
import PreviewBox from '@components/news/previewBox';
import { curClicked, curPreviewsList, newsContent, setCurClicked } from '@entities/state';

export default function KeyExplanation() {
  const [curClicked, setCurclicked] = useState<curClicked>(undefined);
  const [newsContents, setNewsContent] = useState<newsContent>(undefined);
  const [curPreviewList, setCurPreviewList] = useState<curPreviewsList>([]);
  const params = useParams();
  const keyname = useMemo(() => params.keyname, []);

  useEffect(() => {
    window.location.reload();
  }, []);

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchBox />
      </SearchWrapper>
      <MainContents>
        <MainContentsLeft curClicked={curClicked}>
          <KeywordWrapper>
            <ExplanationBox>
              <Explanation></Explanation>
            </ExplanationBox>
          </KeywordWrapper>
          <ExplanationWrapper></ExplanationWrapper>
          <NewsList curClicked={curClicked}></NewsList>
        </MainContentsLeft>
        <MainContentsRight></MainContentsRight>
      </MainContents>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const SearchWrapper = styled.div`
  width: 1000px;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 30px -25px;
  margin-bottom: 40px;
`;

const MainContents = styled.div`
  width: 1000px;
`;

interface MainContentsLeftProps {
  curClicked: curClicked;
}

const MainContentsLeft = styled.div<MainContentsLeftProps>`
  width: ${({ curClicked }) => {
    return curClicked ? '1000px' : '500px';
  }};
`;

const KeywordWrapper = styled.div``;

const ExplanationWrapper = styled.div``;

const ExplanationBox = styled.div``;

const Explanation = styled.p``;

interface NewsListProps {
  curClicked: curClicked;
}

const NewsList = styled.div<NewsListProps>`
  width: ${({ curClicked }) => {
    return curClicked ? '1000px' : '500px';
  }};
  display: grid;
  grid-template-columns: repeat(auto-fill, 490px);
  grid-template-rows: repeat(auto-fill, 120px);
  grid-column-gap: 20px;
  justify-items: center;
  border-style: solid;
  border-radius: 10px;
  border-width: 0px;
  opacity: 1;
  height: 900px;
  position: relative;
  overflow: scroll;
  animation: box-sliding 0.5s linear 1;
`;

const MainContentsRight = styled.div``;
