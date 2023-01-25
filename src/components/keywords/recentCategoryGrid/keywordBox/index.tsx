import styled from 'styled-components';
import { KeywordToView } from '@interfaces/keywords';

import React, { Dispatch, SetStateAction, useCallback } from 'react';

import defaultImg from '@assets/img/img_thumb@2x.png';
import { HOST_URL } from '@assets/url';

interface RecentKeywordBoxProps {
  keyword: KeywordToView;
}

export default function RecentKeywordBox({ keyword }: RecentKeywordBoxProps) {
  const onErrorImg = useCallback((e: React.SyntheticEvent) => {
    const target = e.target as HTMLImageElement;
    target.src = defaultImg;
  }, []);

  return (
    <Wrapper>
      <KeywordWrapper>
        <KeywordTitle>{keyword.keyword}</KeywordTitle>
      </KeywordWrapper>
      <ImageWrapper>
        <img
          src={`${HOST_URL}/`}
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
`;

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const KeywordWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
`;

const KeywordTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
