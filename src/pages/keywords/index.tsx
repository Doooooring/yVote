import styled from 'styled-components';

import KeywordsServices from '@utils/keywords';

import CategoryGrid from '@components/keywords/categoryGrid';

import { useState, useEffect, useMemo, useCallback } from 'react';

import {
  category,
  Keyword,
  KeywordInHuman,
  KeywordInEconomy,
  KeywordInEtc,
  KeywordInOrganization,
  KeywordInPolicy,
  KeywordInPolitics,
  KeywordInSocial,
} from '@interfaces/keywords';

import { recentKeywords } from '@entities/state';

export default function Keywords() {
  const [recentKeywords, setRecentKeywords] = useState<recentKeywords>([]);
  const [keywordInHuman, setKeywordInHuman] = useState<Array<KeywordInHuman>>([]);
  const [keywordInEconomy, setKeywordInEconomy] = useState<Array<KeywordInEconomy>>([]);
  const [keywordInOrganization, setkeywordInOrganization] = useState<Array<KeywordInOrganization>>([]);
  const [keywordInPolicy, setKeywordInPolicy] = useState<Array<KeywordInPolicy>>([]);
  const [keywordInPolitics, setKeywordInPolitics] = useState<Array<KeywordInPolitics>>([]);
  const [keywordInSocial, setkeywordInSocial] = useState<Array<KeywordInSocial>>([]);
  const [keywordInEtc, setKeywordInEtc] = useState<Array<KeywordInEtc>>([]);

  
  return (
    <Wrapper>
      <GridContainer>
        <RecentGrid></RecentGrid>
        <CategoryGrid category={category.human} keywords={keywordInHuman} />
        <CategoryGrid category={category.economy} keywords={keywordInEconomy} />
        <CategoryGrid category={category.organizatioin} keywords={keywordInOrganization} />
        <CategoryGrid category={category.policy} keywords={keywordInPolicy} />
        <CategoryGrid category={category.politics} keywords={keywordInPolitics} />
        <CategoryGrid category={category.social} keywords={keywordInSocial} />
        <CategoryGrid category={category.etc} keywords={keywordInEtc} />
      </GridContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const GridContainer = styled.div``;

const RecentGridContainer = styled.div``;

const RecentGridHeader = styled.h2``;

const RecentGrid = styled.div``;
