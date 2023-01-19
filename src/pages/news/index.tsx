import axios from 'axios';

import styled from 'styled-components';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

import icoNews from '@assets/img/ico_news.png';

import PreviewBox from '@components/news/previewBox';
import SearchBox from '@components/news/searchBox';
import NewsContents from '@components/news/newsContents';
import { SpeechBubble } from '@components/common/figure';

import { News, Preview } from '@entities/interfaces/news';
import {
  curClicked,
  setCurClicked,
  newsContent,
  curPreviewsList,
} from '@entities/state';

interface NewsProps {
  curClicked: curClicked;
  setCurClicked: setCurClicked;
}

export default function News({ curClicked, setCurClicked }: NewsProps) {
  const curBoxNumber = useRef(0);
  const [newsContentDefault, setNewsContentDefault] = useState<News[]>([]);
  const [newsContent, setNewsContent] = useState<newsContent>(undefined);
  const [curPreviewsList, setCurPreviewsList] = useState<curPreviewsList>([]);

  useEffect(() => {}, []);

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchBox
          newsContentDefault={newsContentDefault}
          setCurPreviewsList={setCurPreviewsList}
        />
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
            {curPreviewsList.map((Preview) => (
              <PreviewBoxWrapper key={Preview.order}>
                <PreviewBox
                  Preview={Preview}
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
  height: 1200px;
  margin-top: 100px;
`;

const Body = styled.div`
  width: 1000px;
  height: 1200px;

  text-align: center;
`;

const SearchWrapper = styled.div`
  width: 1000px;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 30px -25px;
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
