import { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import { newsContent } from '@entities/state';
import { News } from '@interfaces/news';

interface VoteBoxProps {
  state: News['state'];
  opinions: News['opinions'];
  votes: News['votes'];
}

type SubmitState = 'resolve' | 'pending' | 'error';

export default function VoteBox({ state, opinions, votes }: VoteBoxProps) {
  const [haveThinked, setHaveThinked] = useState<boolean | null>(false);
  const [checkLeftRight, setCheckLeftRight] = useState<'left' | 'right' | 'none' | null>(null);
  const [haveVoted, setHaveVoted] = useState<boolean | 'error'>(false);
  const [submitState, setSubmitState] = useState<SubmitState>('pending');

  const submitButtonText = useMemo(() => {
    return {
      resolve: 'C 생각이 바뀌었습니다',
      pending: ' ✔ 참여하기',
      error: '! 생각을 하고 왔습니다.',
    };
  }, []);

  const vote = useCallback(() => {
    return 0;
  }, [checkLeftRight]);

  function handlePendingState() {
    switch (haveThinked) {
      case true:
        if (checkLeftRight === null) {
          setCheckLeftRight('none');
        }
        setSubmitState('resolve');
        break;
      case false:
        setSubmitState('error');
        break;
    }
  }

  const clickSubmitButton = () => {
    switch (submitState) {
      case 'resolve':
        setSubmitState('pending');
        break;
      case 'pending':
        handlePendingState();
        break;
      case 'error':
        setSubmitState('pending');
        break;
    }
  };

  return (
    <Wrapper>
      <HaveThinked>
        <VotingSentence>투표하기 전에 생각했나요?</VotingSentence>
        <VotingBlocks>
          <VotingBlock>
            <ThinkBox
              type="radio"
              name="think"
              id="yes"
              checked={state === true && haveThinked === true}
              onClick={() => {
                setHaveThinked(true);
              }}
              disabled={submitState !== 'pending'}
            />
            예
          </VotingBlock>
          <VotingBlock>
            <ThinkBox
              type="radio"
              name="think"
              id="no"
              checked={state === true && haveThinked === false}
              onClick={() => {
                setHaveThinked(false);
                setCheckLeftRight(null);
              }}
              disabled={submitState !== 'pending'}
            />
            아니오
          </VotingBlock>
        </VotingBlocks>
      </HaveThinked>
      <LeftRightBox>
        <LeftRightHead>여러분의 생각에 투표하세요.</LeftRightHead>
        <CheckBoxWrapper>
          <CheckBox
            type="radio"
            name="checkbox"
            id="left"
            checked={checkLeftRight === 'left'}
            onClick={() => {
              setCheckLeftRight('left');
            }}
            disabled={haveThinked === false || submitState === 'resolve'}
          />
          <LRComment>{'left'}</LRComment>
        </CheckBoxWrapper>
        <CheckBoxWrapper>
          <CheckBox
            type="radio"
            name="checkbox"
            id="right"
            checked={checkLeftRight === 'right'}
            onClick={() => {
              setCheckLeftRight('right');
            }}
            disabled={haveThinked === false || submitState === 'resolve'}
          />
          <LRComment>{'right'}</LRComment>
        </CheckBoxWrapper>
        <CheckBoxWrapper>
          <CheckBox
            type="radio"
            name="checkbox"
            id="none"
            checked={checkLeftRight === 'none'}
            onClick={() => {
              setCheckLeftRight('none');
            }}
            disabled={haveThinked === false || submitState === 'resolve'}
          />
          <LRComment>{'잘 모르겠다'}</LRComment>
        </CheckBoxWrapper>
      </LeftRightBox>
      <SubmitBlock>
        <SubmitButton
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            clickSubmitButton();
          }}
        >
          {submitButtonText[submitState]}
        </SubmitButton>
      </SubmitBlock>
      <BackDrop state={state}></BackDrop>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
  background-color: rgb(234, 240, 246);
  position: relative;
`;

const HaveThinked = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 20px;
  text-align: center;
`;

const VotingSentence = styled.div`
  font-size: 15px;
  font-weight: 600;
  text-align: left;
  margin-bottom: 10px;
`;

const VotingBlocks = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(2, 50%);
`;

const VotingBlock = styled.div`
  text-align: left;
  font-size: 13px;
  font-weight: 500;
`;

const ThinkBox = styled.input`
  margin-right: 10px;
  &:checked + label::after {
    content: '✔';
    color: red;
    height: 10px;
    width: 20px;
    padding: 0;
    text-align: center;
    position: absolute;
    top: -2px;
    left: 0px;
  }
`;

const ThinkBoxLabel = styled.label`
  display: inline-block;
  height: 20px;
  width: 20px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  position: relative;
  top: 5px;
  margin-right: 10px;
`;

const LeftRightBox = styled.div`
  width: 100%;
`;

const LeftRightHead = styled.div`
  font-size: 15px;
  font-weight: 600;
  text-align: left;
  margin-bottom: 10px;
`;

const CheckBoxWrapper = styled.div`
  margin-bottom: 10px;
`;

const CheckBox = styled.input`
  margin-right: 10px;
  &:checked + label::after {
    content: '✔';
    color: grey;
    font-size: 5px;
    padding: 0;
    text-align: center;
    position: absolute;
    top: -6px;
    left: 2px;
  }
`;

const CheckBoxLabel = styled.label`
  display: inline-block;
  height: 13px;
  width: 13px;
  border: 1px solid black;
  border-radius: 15px;
  position: relative;
  top: 3px;
  margin-right: 10px;
`;

const LRComment = styled.span`
  color: black;
`;

const SubmitBlock = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const SubmitButton = styled.button`
  width: 200px;
  height: 50px;
  border: 0;
  border-radius: 10px;
  box-shadow: 0px 0px 35px -8px rgb(57, 150, 248);
  background-color: rgb(56, 134, 212);
  color: white;
  font-size: 15px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: 0px 0px 35px -5px rgb(57, 150, 248);
  }
`;

interface BackDropProps {
  state: boolean;
}

const BackDrop = styled.div<BackDropProps>`
  display: ${({ state }) => (state ? 'none' : 'block')};
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99;
  backdrop-filter: grayscale(90%);
`;
