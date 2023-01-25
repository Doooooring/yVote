import styled from 'styled-components';

import { Dispatch, SetStateAction } from 'react';

import { KeywordToView } from '@interfaces/keywords';

import RecentKeywordBox from '@components/keywords/recentCategoryGrid/keywordBox';

interface RecentCategoryGridProps {
  keywords: Array<KeywordToView>;
  setKeywords: Dispatch<SetStateAction<Array<KeywordToView>>>;
}

export default function RecentCategoryGrid({ keywords, setKeywords }: RecentCategoryGridProps) {
  return (
    <Wrapper>
      {keywords.map((keyword) => {
        return <RecentKeywordBox keyword={keyword}></RecentKeywordBox>;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
