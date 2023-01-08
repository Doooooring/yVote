import styled from 'styled-components';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { News } from '@/entities/interfaces/news';
import {
  curClicked,
  setCurClicked,
  newsContent,
  setNewsContent,
} from '@entities/state';

import PreviewBox from '@components/news/newsContents';

interface NewsProps {
  curClicked: curClicked;
  setCurClicked: setCurClicked;
}

export default function News({ curClicked, setCurClicked }: NewsProps) {
  const curBoxNumber = useRef(0);
  const [newsContent, setNewsContent] = useState<newsContent>(undefined);

  return <Wrapper></Wrapper>;
}

const Wrapper = styled.div``;
