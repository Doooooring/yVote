import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';

import KeywordBox from '@components/keywords/categoryGrid/keywordBox';
import { KeywordToView } from '@interfaces/keywords';

interface CategoryGridProps {
  category: KeywordToView['category'];
  keywords: Array<KeywordToView>;
  setKeywords: Dispatch<SetStateAction<KeywordToView[]>>;
}

export default function CategoryGrid({ category, keywords, setKeywords }: CategoryGridProps) {
  return (
    <Wrapper>
      <GridHeader>{category}</GridHeader>
      <GridContainer>
        {keywords.map((keyword) => {
          return <KeywordBox key={keyword._id} keyword={keyword} />;
        })}
      </GridContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const GridHeader = styled.p``;

const GridContainer = styled.div``;
