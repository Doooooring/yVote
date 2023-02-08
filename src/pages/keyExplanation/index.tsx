import { useCallback, useEffect, useMemo, useState } from 'react';
import { Params, useParams } from 'react-router-dom';
import styled from 'styled-components';

import icoClose from '@assets/img/ico_close.png';
import icoNews from '@assets/img/ico_news.png';
import { SpeechBubble } from '@components/common/figure';
import KeywordBox from '@components/keywords/categoryGrid/keywordBox';
import SearchBox from '@components/keywords/searchBox';
import NewsContent from '@components/news/newsContents';
import PreviewBox from '@components/news/previewBox';
import { curClicked, curPreviewsList, newsContent, setCurClicked } from '@entities/state';
import { Keyword, KeywordOnDetail } from '@interfaces/keywords';
import { Preview } from '@interfaces/news';
import KeywordsServices from '@utils/keywords';

type AnswerState = 'left' | 'right' | 'none' | null;

export default function KeyExplanation() {
  const [curClicked, setCurClicked] = useState<curClicked>(undefined);
  const [curKeyword, setCurKeyword] = useState<KeywordOnDetail>();
  const [curNewsContent, setCurNewsContent] = useState<newsContent>(undefined);
  const [curPreviews, setCurPreviews] = useState<curPreviewsList>([]);
  const [voteHistory, setVoteHistory] = useState<AnswerState>(null);
  const params = useParams();
  const keyName = useMemo(() => params.keyname, [params]);
  const getKeywordData = useCallback(async () => {
    interface KeywordDetail {
      keyword: KeywordOnDetail;
      previews: Array<Preview>;
    }
    if (!keyName) {
      return 0;
    }
    const { keyword, previews }: KeywordDetail = await KeywordsServices.getKeywordDetail(
      keyName,
      0,
    );
    setCurKeyword(keyword);
    setCurPreviews(previews);
  }, []);

  useEffect(() => {
    getKeywordData();
  }, [keyName]);

  return !curKeyword ? (
    <div></div>
  ) : (
    <Wrapper>
      <SearchWrapper>
        <SearchBox />
        <SpeechBubble width={200} height={30} />
      </SearchWrapper>
      <MainContents>
        <MainContentsLeft curClicked={curClicked}>
          <KeywordWrapper>
            <KeywordBoxWrapper>
              <KeywordBox keyword={keyName} tail={true} />
            </KeywordBoxWrapper>
            <ExplanationWrapper>
              <Explanation>{curKeyword.explain}</Explanation>
            </ExplanationWrapper>
          </KeywordWrapper>
          <NewsListWrapper>
            <NewsHeaderWrapper>
              <img src={icoNews} alt="hmm" height="18px"></img>
              <NewsListHeader>최신 뉴스</NewsListHeader>
            </NewsHeaderWrapper>
            <NewsList curClicked={curClicked}>
              {curPreviews.map((preview) => {
                return (
                  <PreviewBox
                    key={preview._id}
                    Preview={preview}
                    curClicked={curClicked}
                    setCurClicked={setCurClicked}
                    setNewsContent={setCurNewsContent}
                    setVoteHistory={setVoteHistory}
                  />
                );
              })}
            </NewsList>
          </NewsListWrapper>
        </MainContentsLeft>
        <MainContentsRight>
          <NewsContent
            curClicked={curClicked}
            setCurClicked={setCurClicked}
            newsContent={curNewsContent}
            voteHistory={voteHistory}
          />
        </MainContentsRight>
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
  margin-bottom: 60px;
`;

const MainContents = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(2, 495px);
  grid-column-gap: 10px;
  position: relative;
`;

interface MainContentsLeftProps {
  curClicked: curClicked;
}

const MainContentsLeft = styled.div<MainContentsLeftProps>`
  width: ${({ curClicked }) => {
    return curClicked ? '500px' : '1000px';
  }};
`;

const KeywordWrapper = styled.div`
  margin-bottom: 30px;
`;

const KeywordBoxWrapper = styled.div`
  margin-bottom: 20px;
`;

const ExplanationWrapper = styled.div`
  width: 480px;
  height: 180px;
  background-color: white;
  padding-top: 30px;
  padding-left: 20px;
  border-radius: 20px;
  box-shadow: 0 0 30px -25px;
`;

const Explanation = styled.p`
  text-align: left;
`;

const NewsListWrapper = styled.div``;

const NewsHeaderWrapper = styled.div`
  width: 500px;
  text-align: left;
  padding-left: 10px;
  margin-bottom: 20px;
`;

const NewsListHeader = styled.p`
  display: inline;
  margin-left: 10px;
  font-weight: 700;
  font-size: 18px;
`;

interface NewsListProps {
  curClicked: curClicked;
}

const NewsList = styled.div<NewsListProps>`
  width: ${({ curClicked }) => {
    return curClicked ? '500px' : '1000px';
  }};
  display: grid;
  grid-template-columns: repeat(auto-fill, 490px);
  grid-template-rows: repeat(auto-fill, 120px);
  grid-column-gap: 0px;
  grid-row-gap: 20px;
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
