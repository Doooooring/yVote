import styled from 'styled-components';

import newsImage from '@assets/img/news_image.png';
import Header from '@components/common/header';
import CauseBox from '@components/initial/causeBox';

export default function Initial() {
  return (
    <Wrapper>
      <IntroductionWrapper>
        <IntroductTitleWrapper>
          <IntroductTitle>
            <Highlight>{'Q. '}</Highlight>
            {'오늘 '}
            <Highlight>뉴스 </Highlight> {'보셨나요? '}
          </IntroductTitle>
        </IntroductTitleWrapper>
        <Introduction>
          <IntroductionBack>
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
        </Introduction>
      </IntroductionWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const IntroductionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 110px;
`;

const Highlight = styled.span`
  color: rgb(61, 152, 247);
  font-weight: 700;
`;

const IntroductTitleWrapper = styled.div`
  display: block;
  width: 400px;
  margin-bottom: 30px;
`;

const IntroductTitle = styled.h2`
  display: inline-block;
  color: rgb(85, 86, 86);
  font-size: 30px;
  font-weight: 450;
  border-bottom: 3px solid rgb(61, 152, 247);
`;

const Introduction = styled.div`
  width: 100%;
  position: relative;
`;

const IntroductionBack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
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
