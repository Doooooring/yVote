import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import RecentKeywordBox from '@components/keywords/recentCategoryGrid/keywordBox';
import { KeywordToView } from '@interfaces/keywords';

interface RecentCategoryGridProps {
  keywords: Array<KeywordToView>;
  setKeywords: Dispatch<SetStateAction<Array<KeywordToView>>>;
}

export default function RecentCategoryGrid({ keywords, setKeywords }: RecentCategoryGridProps) {
  return (
    <Wrapper>
      {keywords.map((keyword) => {
        return <RecentKeywordBox key={keyword.keyword} keyword={keyword}></RecentKeywordBox>;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
