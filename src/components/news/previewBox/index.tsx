import axios from 'axios';

import styled from 'styled-components';

import defaultImg from '@assets/img/img_thumb@2x.png';
import icoNew from '@assets/img/ico_new.png';
import { HOST_URL } from '@assets/url';

import { Preview } from '@interfaces/news';

import { curClicked, setCurClicked, setNewsContent } from '@entities/state';

import { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';

interface PreviewBoxProps {
  Preview: Preview;
  curClicked: curClicked;
  setCurClicked: setCurClicked;
  setNewsContent: setNewsContent;
}

export default function PreviewBox({
  Preview,
  curClicked,
  setCurClicked,
  setNewsContent,
}: PreviewBoxProps) {
  const { order, title, summary, keywords, state } = Preview;

  const onErrorImg = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      e.currentTarget.src = defaultImg;
    },
    [],
  );

  const showNewsContent = useCallback(async () => {
    try {
      const response = await axios.get(`${HOST_URL}/news/${order}`);
      setNewsContent(response.data);
      setCurClicked(order);
    } catch {}
  }, []);

  return (
    <Wrapper>
      <ImgWrapper
        onClick={() => {
          showNewsContent();
        }}
      >
        <NewsImg
          src={''}
          alt=""
          width="100%"
          onError={(e) => {
            onErrorImg(e);
          }}
        ></NewsImg>
      </ImgWrapper>
      <BodyWrapper>
        <HeadWrapper>
          <Header>{title}</Header>
          <New state={state}>
            <NewIco src={icoNew} alt="hmm" height="18px"></NewIco>
          </New>
        </HeadWrapper>
        <Summary>{summary}</Summary>
        <KeywordsWrapper>
          {keywords?.map((keyword) => {
            return (
              <Keyword>
                <Link to={`/keyword/:${keyword}`}>{`#${keyword}`}</Link>
              </Keyword>
            );
          })}
        </KeywordsWrapper>
      </BodyWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 480px;
  height: 100px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 30px -30px;
  margin-bottom: 20px;
  text-align: left;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`;
const ImgWrapper = styled.div`
  display: inline-block;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 10px;
  width: 18%;
  overflow: hidden;
`;

const NewsImg = styled.img``;

const BodyWrapper = styled.div`
  display: inline-block;
  padding-left: 20px;
  width: 80%;
`;
const HeadWrapper = styled.div``;
const Header = styled.h1`
  display: inline;
  font-size: 15px;
  font-weight: 700;
  margin-right: 10px;
`;

interface NewProps {
  state: Boolean | undefined;
}

const New = styled.span<NewProps>`
  display: ${({ state }) => (state ? 'inline' : 'none')};
`;
const NewIco = styled.img`
  position: relative;
  top: 3px;
`;
const Summary = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const KeywordsWrapper = styled.div``;
const Keyword = styled.p`
  display: inline;
  & > a {
    text-decoration: none;
  }
`;
