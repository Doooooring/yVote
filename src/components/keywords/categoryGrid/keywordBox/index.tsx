import React, { useCallback } from 'react';
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
    <Wrapper>
      <ImageWrapper>
        <img
          src={`${HOST_URL}/`}
          alt="hmm"
          onError={(e) => {
            onErrorImg(e);
          }}
        />
      </ImageWrapper>
      <KeywordWrapper>
        <KeywordTitle>{keyword.keyword}</KeywordTitle>
      </KeywordWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const ImageWrapper = styled.div``;

const KeywordWrapper = styled.div``;

const KeywordTitle = styled.p``;
