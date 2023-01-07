import axios from 'axios';

import styled from 'styled-components';

import { Preview } from '@interfaces/news';
import { vacant, setVacant } from '@/entities/state';

import { useCallback, useMemo } from 'react';

interface PreviewBoxProps {
  Preview: Preview;
  vacant: vacant;
  setVacant: setVacant;
}

export default function PreviewBox() {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.div``;
