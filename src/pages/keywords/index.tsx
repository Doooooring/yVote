import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import { SpeechBubble } from '@components/common/figure';
import CategoryGrid from '@components/keywords/categoryGrid';
import RecentCategoryGrid from '@components/keywords/recentCategoryGrid';
import SearchBox from '@components/keywords/searchBox';
import { KeywordToView } from '@interfaces/keywords';
import KeywordServices, { getKeywordsResponse } from '@utils/keywords';

export default function KeywordsPage() {
  const [recentKeywords, setRecentKeywords] = useState<Array<KeywordToView>>([]);
  const [keywordInHuman, setKeywordInHuman] = useState<Array<KeywordToView>>([]);
  const [keywordInEconomy, setKeywordInEconomy] = useState<Array<KeywordToView>>([]);
  const [keywordInOrganization, setkeywordInOrganization] = useState<Array<KeywordToView>>([]);
  const [keywordInPolicy, setKeywordInPolicy] = useState<Array<KeywordToView>>([]);
  const [keywordInPolitics, setKeywordInPolitics] = useState<Array<KeywordToView>>([]);
  const [keywordInSocial, setKeywordInSocial] = useState<Array<KeywordToView>>([]);
  const [keywordInEtc, setKeywordInEtc] = useState<Array<KeywordToView>>([]);

  const setStateMap = useMemo(() => {
    return {
      human: setKeywordInHuman,
      economics: setKeywordInEconomy,
      organization: setkeywordInOrganization,
      policy: setKeywordInPolicy,
      politics: setKeywordInPolitics,
      social: setKeywordInSocial,
      etc: setKeywordInEtc,
    };
  }, []);

  const setInitKeywords = useCallback(async () => {
    const response: getKeywordsResponse = await KeywordServices.getKeywords();
    const { recent, other } = response;
    console.log(other);
    setRecentKeywords(recent);
    other.forEach((comp) => {
      const { _id, keywords } = comp;

      const setState: Dispatch<SetStateAction<KeywordToView[]>> = setStateMap[_id];

      setState(keywords);
    });
  }, []);

  useEffect(() => {
    setInitKeywords();
  }, []);

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchBox />
        <SpeechBubble width={200} height={30} />
      </SearchWrapper>
      <GridContainer>
        <RecentCategoryGrid keywords={recentKeywords} setKeywords={setRecentKeywords} />
        <CategoryGrid
          category={'economics'}
          keywords={keywordInEconomy}
          setKeywords={setKeywordInEconomy}
        />
        <CategoryGrid
          category={'organization'}
          keywords={keywordInOrganization}
          setKeywords={setkeywordInOrganization}
        />
        <CategoryGrid
          category={'policy'}
          keywords={keywordInPolicy}
          setKeywords={setKeywordInPolicy}
        />
        <CategoryGrid
          category={'politics'}
          keywords={keywordInPolitics}
          setKeywords={setKeywordInPolitics}
        />
        <CategoryGrid
          category={'social'}
          keywords={keywordInSocial}
          setKeywords={setKeywordInSocial}
        />
        <CategoryGrid
          category={'human'}
          keywords={keywordInHuman}
          setKeywords={setKeywordInHuman}
        />
        <CategoryGrid category={'etc'} keywords={keywordInEtc} setKeywords={setKeywordInEtc} />
      </GridContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const SearchWrapper = styled.div`
  position: relative;
  z-index: 999;
  width: 1000px;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 30px -20px;
  margin-bottom: 80px;
  text-align: center;
`;

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
