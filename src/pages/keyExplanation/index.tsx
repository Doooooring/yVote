import styled from 'styled-components';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

export default function KeyExplanation() {
  const params = useParams();
  const keyname = useMemo(() => params.keyname, []);
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.div``;
