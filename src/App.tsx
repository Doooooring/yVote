import styled from 'styled-components';
import { useState } from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from '@components/common/header';
import Analyze from '@pages/analyze';
import Initial from '@pages/initial';
import Keywords from '@pages/keywords';
import KeyExplanation from '@pages/keyExplanation';
import News from '@pages/news';

import { News as NewsInf } from '@entities/interfaces/news';
import { curClicked, setCurClicked } from '@entities/state';

function App() {
  const [curClicked, setCurClicked] = useState<curClicked>(undefined);
  return (
    <Wrapper>
      <Header setCurClicked={setCurClicked} />
      <Router>
        <Routes>
          <Route
            path="/news"
            element={
              <News curClicked={curClicked} setCurClicked={setCurClicked} />
            }
          />
          <Route path="/keywords" element={<Keywords />} />
          <Route path="/keywords/:keyname" element={<KeyExplanation />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/" element={<Initial />} />
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: '1080px';
  min-width: '1440px';
  overflow: 'hidden';
`;
