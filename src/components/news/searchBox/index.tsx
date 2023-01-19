import axios from 'axios';

import styled from 'styled-components';

import { useState, useCallback, useEffect } from 'react';

import { News, Preview } from '@interfaces/news';
import { Keyword } from '@interfaces/keywords';

import { curPreviewsList, setCurPreviewsList } from '@state/index';

import { HOST_URL } from '@assets/url';

interface KeyName extends Partial<Pick<Keyword, 'keyword'>> {}

interface SearchBoxProps {
  newsContentDefault: Preview[];
  setCurPreviewsList: setCurPreviewsList;
}

export default function SearchBox({
  newsContentDefault,
  setCurPreviewsList,
}: SearchBoxProps) {
  const [searchWord, setSearchWord] = useState<String>('');
  const [relatedWords, getRelatedWords] = useState<String[]>([
    '키워드를 검색해 봅시다.',
  ]);
  const [keylist, setKeyList] = useState<KeyName[]>([]);
  const [curFocusOnWord, setCurFocusOnWord] = useState<number>(-1);
  const [arrowKeyActive, setArrowKeyActive] = useState<boolean>(false);

  const getKeys = useCallback(async () => {
    try {
      const response = await axios.get(`${HOST_URL}/keywords/keyword`);
      const { keylist } = response.data;
      setKeyList(keylist);
    } catch {
      Error();
    }
  }, []);

  useEffect(() => {
    getKeys();
  }, []);

  return (
    <Wrapper>
      <InputWrapper>
        <InputBox></InputBox>
        <RelatedBox>
          {relatedWords.map((word) => (
            <RelatedWord
              className={'word'}
              id={`${relatedWords.indexOf(word)}`}
              isFocused={word === relatedWords[curFocusOnWord]}
            >
              {`# ${word}`}
            </RelatedWord>
          ))}
        </RelatedBox>
      </InputWrapper>
      <SubmitButton>{'찾기'}</SubmitButton>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: inline-block;
  width: 300px;
  height: 40px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;
  position: relative;
`;
const InputWrapper = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 90%;
  overflow: hidden;
  &:focus-within {
    overflow: visible;
  }
`;
const InputBox = styled.input`
  display: inline-block;
  border: 0;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  font-size: 15px;
  color: rgb(170, 170, 170);
  font-weight: 600;
  padding-left: 40px;
  padding-top: 4px;
  padding-bottom: 3px;
  background-image: url('image/ico_search.png');
  background-repeat: no-repeat;
  background-position: 6px 6px;
  &::placeholder {
    color: rgb(170, 170, 170);
    font-size: 15px;
    font-weight: 800;
  }
  &:focus {
    outline: 2px solid rgb(104, 156, 209);
  }
`;
const RelatedBox = styled.div`
  min-height: 100px;
  background-color: rgb(104, 156, 209);
  width: 100%;
  border-style: solid;
  border-width: 2px;
  border-color: rgb(104, 156, 209);
  border-radius: 0px 0px 10px 10px;
  position: absolute;
  top: 100%;
  text-align: left;
  z-index: 3;
  padding-top: 5px;
`;

interface RelatedWordProps {
  isFocused: Boolean;
}

const RelatedWord = styled.p<RelatedWordProps>`
  color: white;
  font-weight: 700;
  padding-left: 5px;
  margin-bottom: 5px;
  border-width: 3px;
  font-size: 15px;
  border-style: solid;
  z-index: 1;
  background-color: ${({ isFocused }) =>
    isFocused ? 'rgb(120, 120, 120)' : 'rgba(0,0,0,0)'};
`;

const SubmitButton = styled.button`
  display: none;
  position: absolute;
  height: 80%;
  width: 12%;
  top: 0;
  right: 0px;
  color: black;
`;
