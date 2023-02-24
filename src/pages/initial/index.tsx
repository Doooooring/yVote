import styled from 'styled-components';

import newsImage from '@assets/img/news_image.png';
import Header from '@components/common/header';
import CauseBox from '@components/initial/causeBox';

export default function Initial() {
  return (
    <Wrapper>
      <IntroductionWrapper>
        <IntroductionBack>
          <IntroductTitle>{''}</IntroductTitle>
          <NewsImageWrapper>
            <NewsImage src={newsImage} width="400px" />
          </NewsImageWrapper>
        </IntroductionBack>
        <Comp1>
          <CauseBox cause="covid" />
        </Comp1>
        <Comp2>
          <CauseBox cause="avoid_arguments" />
        </Comp2>
        <Comp3>
          <CauseBox cause="excessive_news" />
        </Comp3>
        <Comp4>
          <CauseBox cause="negative_mood" />
        </Comp4>
        <Comp5>
          <CauseBox cause="unessential" />
        </Comp5>
        <Comp6>
          <CauseBox cause="untrustworthy" />
        </Comp6>
      </IntroductionWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 150px;
`;

const IntroductionWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const IntroductionBack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const IntroductTitle = styled.h1`
  display: block;
`;

const NewsImageWrapper = styled.div`
  width: 400px;
  height: 603px;
  position: relative;
`;

const NewsImage = styled.img`
  box-shadow: 0 0 30px -15px black;
`;

const Comp1 = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 10px;
`;
const Comp2 = styled.div`
  display: inline-block;
  position: absolute;
  top: 80px;
  left: 600px;
`;
const Comp3 = styled.div`
  display: inline-block;
  position: absolute;
  top: 160px;
  left: 50px;
`;
const Comp4 = styled.div`
  display: inline-block;
  position: absolute;
  top: 240px;
  left: 700px;
`;
const Comp5 = styled.div`
  display: inline-block;
  position: absolute;
  top: 320px;
  left: 50px;
`;
const Comp6 = styled.div`
  display: inline-block;
  position: absolute;
  top: 430px;
  left: 500px;
`;
