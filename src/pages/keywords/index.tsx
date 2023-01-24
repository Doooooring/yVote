import styled from 'styled-components';

import KeywordsServices from '@utils/keywords';

import CategoryGrid from '@components/keywords/categoryGrid';
import RecentKeywordBox from '@components/keywords/recentCategoryGrid';

import { useState, useEffect, useMemo, useCallback } from 'react';

import { category, Keyword, KeywordToView } from '@interfaces/keywords';

import { recentKeywords } from '@entities/state';

export default function Keywords() {
  const [recentKeywords, setRecentKeywords] = useState<Array<KeywordToView>>([]);
  const [keywordInHuman, setKeywordInHuman] = useState<Array<KeywordToView>>([]);
  const [keywordInEconomy, setKeywordInEconomy] = useState<Array<KeywordToView>>([]);
  const [keywordInOrganization, setkeywordInOrganization] = useState<Array<KeywordToView>>([]);
  const [keywordInPolicy, setKeywordInPolicy] = useState<Array<KeywordToView>>([]);
  const [keywordInPolitics, setKeywordInPolitics] = useState<Array<KeywordToView>>([]);
  const [keywordInSocial, setkeywordInSocial] = useState<Array<KeywordToView>>([]);
  const [keywordInEtc, setKeywordInEtc] = useState<Array<KeywordToView>>([]);

  return (
    <Wrapper>
      <GridContainer>
        <RecentGrid>
          {recentKeywords.map((recentKeyword) => {
            return <RecentKeywordBox keyword={recentKeyword} />;
          })}
        </RecentGrid>
        <CategoryGrid
          category={category.human}
          keywords={keywordInHuman}
          setKeywords={setKeywordInHuman}
        />
        <CategoryGrid
          category={category.economy}
          keywords={keywordInEconomy}
          setKeywords={setKeywordInEconomy}
        />
        <CategoryGrid
          category={category.organizatioin}
          keywords={keywordInOrganization}
          setKeywords={setkeywordInOrganization}
        />
        <CategoryGrid
          category={category.policy}
          keywords={keywordInPolicy}
          setKeywords={setKeywordInPolicy}
        />
        <CategoryGrid
          category={category.politics}
          keywords={keywordInPolitics}
          setKeywords={setKeywordInPolitics}
        />
        <CategoryGrid
          category={category.social}
          keywords={keywordInSocial}
          setKeywords={setkeywordInSocial}
        />
        <CategoryGrid
          category={category.etc}
          keywords={keywordInEtc}
          setKeywords={setKeywordInEtc}
        />
      </GridContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const GridContainer = styled.div``;

const RecentGridContainer = styled.div``;

const RecentGridHeader = styled.h2``;

const RecentGrid = styled.div``;
