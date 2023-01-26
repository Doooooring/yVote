import { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import icoNews from '@assets/img/ico_news.png';
import { SpeechBubble } from '@components/common/figure';
import NewsContents from '@components/news/newsContents';
import PreviewBox from '@components/news/previewBox';
import SearchBox from '@components/news/searchBox';
import { News, Preview } from '@entities/interfaces/news';
import { curClicked, curPreviewsList, newsContent, setCurClicked } from '@entities/state';
import NewsService from '@utils/news';

interface NewsProps {
  curClicked: curClicked;
  setCurClicked: setCurClicked;
}

export default function NewsPage({ curClicked, setCurClicked }: NewsProps) {
  const curBoxNumber = useRef(0);
  const [previewsDefault, setPreviewsDefault] = useState<Preview[]>([]);
  const [newsContent, setNewsContent] = useState<newsContent>(undefined);
  const [curPreviews, setCurPreviews] = useState<curPreviewsList>([]);

  const getNewsContent = useCallback(async () => {
    const PreviewInit: Array<Preview> = await NewsService.getPreviews(0);
    console.log(PreviewInit);
    setPreviewsDefault(PreviewInit);
    setCurPreviews(PreviewInit);
    return 0;
  }, []);

  useEffect(() => {
    getNewsContent();
  }, []);

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchBox newsContentDefault={previewsDefault} setCurPreviewsList={setPreviewsDefault} />
        <SpeechBubble width={200} height={30} />
      </SearchWrapper>
      <MainContents>
        <MainHeaderWrapper>
          <MainHeader>
            <img src={icoNews} alt="hmm" height="18px"></img>
            <CategoryName>{'최신 뉴스'}</CategoryName>
          </MainHeader>
        </MainHeaderWrapper>
        <MainContentsBody>
          <NewsList curClicked={curClicked}>
            {curPreviews.map((preview) => (
              <PreviewBoxWrapper key={preview.order}>
                <PreviewBox
                  Preview={preview}
                  curClicked={curClicked}
                  setCurClicked={setCurClicked}
                  setNewsContent={setNewsContent}
                />
              </PreviewBoxWrapper>
            ))}
          </NewsList>
          <NewsContentsWrapper curClicked={curClicked}>
            <NewsContents
              curClicked={curClicked}
              setCurClicked={setCurClicked}
              newsContent={newsContent}
            />
          </NewsContentsWrapper>
        </MainContentsBody>
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
  box-shadow: 0px 0px 30px -20px;
  margin-bottom: 40px;
`;

const MainContents = styled.div``;

const MainHeaderWrapper = styled.div`
  height: 30px;
`;

const MainHeader = styled.div`
  width: 1000px;
  text-align: left;
  padding-left: 10px;
`;

const CategoryName = styled.p`
  display: inline;
  width: 1000px;
  margin-left: 10px;
  font-weight: 700;
  font-size: 18px;
`;

const MainContentsBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 495px);
  grid-column-gap: 10px;
  position: relative;
`;

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

const PreviewBoxWrapper = styled.div`
  display: inline-block;
  width: 470px;
`;

interface NewsContentsWrapperProps {
  curClicked: curClicked;
}

const NewsContentsWrapper = styled.div<NewsContentsWrapperProps>`
  width: 500px;
  height: 800px;
  opacity: ${(curClicked) => (curClicked ? 1 : 0)};
  pointer-events: ${(curClicked) => (curClicked ? 'auto' : 'none')};
`;
