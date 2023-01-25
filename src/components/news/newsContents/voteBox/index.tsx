import styled from 'styled-components';

import { newsContent } from '@entities/state';
import { News } from '@interfaces/news';

interface VoteBoxProps {
  state: News['state'];
  opinions: News['opinions'];
  votes: News['votes'];
}

export default function VoteBox({ state, opinions, votes }: VoteBoxProps) {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
  background-color: rgb(234, 240, 246);
`;
