import { useCallback, useEffect, useMemo, useState } from 'react';
import { Params, useParams } from 'react-router-dom';
import styled from 'styled-components';

import KeywordBox from '@components/keywords/categoryGrid';
import SearchBox from '@components/keywords/searchBox';
import NewsContent from '@components/news/newsContents';
import PreviewBox from '@components/news/previewBox';
import { curClicked, curPreviewsList, newsContent, setCurClicked } from '@entities/state';
import { Keyword, KeywordOnDetail } from '@interfaces/keywords';
import { Preview } from '@interfaces/news';
import KeywordsServices from '@utils/keywords';

export default function KeyExplanation() {
  const [curClicked, setCurclicked] = useState<curClicked>(undefined);
  const [curKeyName, setCurKeyName] = useState<KeywordOnDetail['keyword']>();
  const [newsContents, setNewsContent] = useState<newsContent>(undefined);
  const [curPreviewList, setCurPreviewList] = useState<curPreviewsList>([]);
  const params = useParams();
  const keyName = useMemo(() => params.keyname, []);

  console.log('here');

  const getKeywordData = useCallback(async () => {
    interface KeywordDetail {
      keyword: KeywordOnDetail;
      previews: Array<Preview>;
    }
    if (!keyName) {
      console.log('설마');
      return 0;
    }
    const { keyword, previews }: KeywordDetail = await KeywordsServices.getKeywordDetail(
      keyName,
      0,
    );
    console.log(keyword);
    console.log(previews);
    setCurKeyName(keyword.keyword);
    setCurPreviewList(previews);
  }, []);

  useEffect(() => {
    getKeywordData();
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
              <KeywordBoxWrapper></KeywordBoxWrapper>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 1200px;
  margin-top: 100px;
`;

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

const KeywordBoxWrapper = styled.div``;

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
