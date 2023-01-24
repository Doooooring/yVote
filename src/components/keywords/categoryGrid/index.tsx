import styled from 'styled-components';

import { useState, useEffect } from 'react';

import { KeywordToView } from '@interfaces/keywords';

import KeywordBox from '@components/keywords/categoryGrid/keywordBox';

interface CategoryGridProps {
  category: KeywordToView['category'];
  keywords: Array<KeywordToView>;
}

export default function CategoryGrid({ category, keywords }: CategoryGridProps) {
  return (
    <Wrapper>
      <GridHeader>{category}</GridHeader>
      <GridContainer>
        {keywords.map((keyword) => {
          return <KeywordBox keyword={keyword} />;
        })}
      </GridContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const GridHeader = styled.p``;

const GridContainer = styled.div``;
