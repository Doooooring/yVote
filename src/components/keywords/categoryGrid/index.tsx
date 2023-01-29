import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';

import icoNews from '@assets/img/ico_news.png';
import KeywordBox from '@components/keywords/categoryGrid/keywordBox';
import { KeywordToView } from '@interfaces/keywords';

interface CategoryGridProps {
  category: KeywordToView['category'];
  keywords: Array<KeywordToView>;
  setKeywords: Dispatch<SetStateAction<KeywordToView[]>>;
}

export default function CategoryGrid({ category, keywords, setKeywords }: CategoryGridProps) {
  const [preKeywords, setPreKeywords] = useState<KeywordToView[] | undefined>(undefined);
  const [curKeywords, setCurKeywords] = useState<KeywordToView[]>(keywords);
  const [postKeywords, setPostKeywords] = useState<KeywordToView[] | undefined>(undefined);

  return (
    <Wrapper>
      <HeaderWrapper>
        <img src={icoNews} alt="hmm" height="18px"></img>
        <CategoryHead>{category}</CategoryHead>
      </HeaderWrapper>
      <GridWrapper>
        <GridContainer>
          {keywords.map((keyword) => {
            return <KeywordBox key={keyword._id} keyword={keyword.keyword} tail={false} />;
          })}
        </GridContainer>
      </GridWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1000px;
  margin-top: 20px;
`;

const HeaderWrapper = styled.div`
  height: 30px;
`;

const CategoryHead = styled.div`
  display: inline;
  width: 1000px;
  margin-left: 10px;
  font-weight: 700;
  font-size: 18px;
`;

const GridWrapper = styled.div`
  overflow: scroll;
`;

const GridContainer = styled.div`
  display: grid;
  height: 220px;
  grid-template-rows: repeat(2, 95px);
  grid-template-columns: repeat(auto-fill, 220px);
  grid-auto-flow: column;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
`;
