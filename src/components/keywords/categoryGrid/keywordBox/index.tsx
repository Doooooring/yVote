import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import defaultImg from '@assets/img/img_thumb@2x.png';
import { HOST_URL } from '@assets/url';
import { KeywordToView } from '@interfaces/keywords';

interface KeywordBoxProps {
  keyword: KeywordToView;
}

export default function KeywordBox({ keyword }: KeywordBoxProps) {
  const onErrorImg = useCallback((e: React.SyntheticEvent) => {
    const target = e.target as HTMLImageElement;
    target.src = defaultImg;
  }, []);

  return (
    <LinkWrapper to={`/keywords/${keyword}`}>
      <Wrapper>
        <ImageWrapper>
          <img
            src={`${HOST_URL}/`}
            alt="hmm"
            height="95px"
            onError={(e) => {
              onErrorImg(e);
            }}
          />
        </ImageWrapper>
        <KeywordWrapper>
          <KeywordTitle>{keyword.keyword}</KeywordTitle>
        </KeywordWrapper>
      </Wrapper>
    </LinkWrapper>
  );
}

const LinkWrapper = styled(Link)`
  text-decoration: none; ;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: row;
  align-items: center;
  width: 200px;
  height: 95px;
  border-radius: 10px;
  border: 1px solid rgba(200, 200, 200, 0.5);
  background-color: white;
  box-shadow: 0px 0px 30px -25px;
  overflow: hidden; ;
`;

const ImageWrapper = styled.div``;

const KeywordWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 95px;
`;

const KeywordTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: black;
`;
