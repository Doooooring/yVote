import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import defaultImg from '@assets/img/img_thumb@2x.png';
import { HOST_URL } from '@assets/url';
import { KeywordToView } from '@interfaces/keywords';

interface RecentKeywordBoxProps {
  keyword: KeywordToView['keyword'];
}

export default function RecentKeywordBox({ keyword }: RecentKeywordBoxProps) {
  const navigation = useNavigate();

  const onErrorImg = useCallback((e: React.SyntheticEvent) => {
    const target = e.target as HTMLImageElement;
    target.src = defaultImg;
  }, []);

  return (
    <Wrapper
      onClick={() => {
        navigation(`/keywords/${keyword}`);
      }}
    >
      <KeywordWrapper>
        <KeywordTitle>{keyword}</KeywordTitle>
      </KeywordWrapper>
      <ImageWrapper>
        <img
          src={`${HOST_URL}/images/keyword/${keyword}`}
          height="190px"
          width="190px"
          alt="hmm"
          onError={(e) => {
            onErrorImg(e);
          }}
        />
      </ImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 190px;
  height: 190px;
  border-radius: 15px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  width: 190px;
  height: 190px;
  top: 0;
  left: 0;
  z-index: 1;
`;

const KeywordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 190px;
  height: 190px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.3);
`;

const KeywordTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
